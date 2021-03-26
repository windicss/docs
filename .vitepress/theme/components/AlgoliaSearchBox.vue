<template>
  <div id="docsearch" class="algolia-search-box" />
</template>

<script setup lang="ts">
import '@docsearch/css/dist/style.css'
import { useRoute, useRouter } from 'vitepress'
import { defineProps, getCurrentInstance, onMounted, watch, toRef } from 'vue'
import docsearch from '@docsearch/js'
import type { PropType } from 'vue'
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core'
import type { DefaultTheme } from '../config'

const bps = useBreakpoints(breakpointsTailwind)
const bplg = bps.greater('lg')

const props = defineProps({
  options: {
    type: Object as PropType<DefaultTheme.AlgoliaSearchOptions>,
    required: true,
  },
  small: {
    type: Boolean,
    default: false,
  },
})

const vm = getCurrentInstance()
const route = useRoute()
const router = useRouter()

watch(
  () => props.options,
  (value) => {
    update(value)
  },
)

const small = toRef(props, 'small')

onMounted(() => {
  initialize(props.options)
  watch([small, bplg], ([small, bplg]) => {
    bplg
      ? small
        ? vm?.vnode.el?.classList.add('small')
        : vm?.vnode.el?.classList.remove('small')
      : vm?.vnode.el?.classList.add('small')
  }, { immediate: true })
})

function isSpecialClick(event: MouseEvent) {
  return (
    event.button === 1
    || event.altKey
    || event.ctrlKey
    || event.metaKey
    || event.shiftKey
  )
}

function getRelativePath(absoluteUrl: string) {
  const { pathname, hash } = new URL(absoluteUrl)

  return pathname + hash
}

function update(options: DefaultTheme.AlgoliaSearchOptions) {
  if (vm && vm.vnode.el) {
    vm.vnode.el.innerHTML
      = '<div id="docsearch" class="algolia-search-box"></div>'
    initialize(options)
  }
}

function initialize(userOptions: DefaultTheme.AlgoliaSearchOptions) {
  docsearch({
    apiKey: userOptions.apiKey,
    appId: userOptions.appId,
    indexName: userOptions.indexName,
    container: '#docsearch',

    searchParameters: Object.assign({}, userOptions.searchParameters),

    navigator: {
      navigate: ({ suggestionUrl }) => {
        const { pathname: hitPathname } = new URL(
          window.location.origin + suggestionUrl,
        )

        // Router doesn't handle same-page navigation so we use the native
        // browser location API for anchor navigation
        if (route.path === hitPathname)
          window.location.assign(window.location.origin + suggestionUrl)
        else
          router.go(suggestionUrl)
      },
      navigateNewTab({ suggestionUrl }) {
        const windowReference = window.open(suggestionUrl, '_blank', 'noopener')

        if (windowReference)
          windowReference.focus()
      },
      navigateNewWindow({ suggestionUrl }) {
        window.open(suggestionUrl, '_blank', 'noopener')
      },
    },

    transformItems: (items) => {
      return items.map((item) => {
        return Object.assign({}, item, {
          url: getRelativePath(item.url),
        })
      })
    },

    hitComponent: ({
      hit,
      children,
    }) => {
      const relativeHit = hit.url.startsWith('http')
        ? getRelativePath(hit.url as string)
        : hit.url

      return {
        type: 'a',
        ref: undefined,
        constructor: undefined,
        key: undefined,
        props: {
          href: hit.url,
          onClick: (event: MouseEvent) => {
            if (isSpecialClick(event))
              return

            // we rely on the native link scrolling when user is already on
            // the right anchor because Router doesn't support duplicated
            // history entries
            if (route.path === relativeHit)
              return

            // if the hits goes to another page, we prevent the native link
            // behavior to leverage the Router loading feature
            if (route.path !== relativeHit)
              event.preventDefault()

            router.go(relativeHit)
          },
          children,
        },
      }
    },
  })
}
</script>

<style lang="postcss">
.algolia-search-box {
  @apply pt-1px;
}

.DocSearch {
  --docsearch-container-background: rgba(173,181,189,0.7);
  --docsearch-modal-background: var(--c-bg);
  --docsearch-modal-shadow: var(--c-bg);
  --docsearch-hit-color: var(--c-text-light);
  --docsearch-footer-background: transparent;
  --docsearch-footer-shadow: rgba(125,125,125,0.1);
  --docsearch-hit-background: rgba(125,125,125,0.1);
  --docsearch-hit-shadow: none;
  --docsearch-primary-color: var(--c-brand);
  --docsearch-highlight-color: var(--docsearch-primary-color);
  --docsearch-searchbox-background: theme('colors['blue-gray'].100');
  --docsearch-searchbox-focus-background: theme('colors['blue-gray'].200');
  --docsearch-searchbox-shadow: none;
  --docsearch-searchbox-height: 3rem;
  --docsearch-text-color: var(--c-text-light);
  --docsearch-muted-color: var(--c-text-lighter);
  --docsearch-key-gradient: transparent;
  --docsearch-key-shadow: none;
}

html.dark .DocSearch {
  --docsearch-container-background: rgba(12,12,12,0.9);
  --docsearch-searchbox-background: theme('colors.dark.400');
  --docsearch-searchbox-focus-background: theme('colors.dark.300');
  --docsearch-key-gradient: transparent;
  --docsearch-key-shadow: none;
}

.DocSearch-Button {
  @apply rounded-lg p-9px ml-0 rounded-lg h-auto lg:(px-3 h-36px);
}
.DocSearch-Button-Key {
  @apply static pb-0 border border-gray-300 bg-transparent m-0;
}
.DocSearch-Button-Placeholder + .DocSearch-Button-Key {
  @apply mr-2;
}
.DocSearch-Button-Placeholder {
  @apply pl-3 font-normal lg:pr-32;
}

.DocSearch-Button:hover .DocSearch-Button-Key {
  @apply text-$docsearch-text-color border-$docsearch-text-color;
}
.DocSearch-Form, .DocSearch-Hit a {
  @apply rounded-lg;
}
.DocSearch-Form {
  @apply bg-gray-100 dark:bg-dark-500;
}
.DocSearch-Modal {
  @apply rounded-lg;
}
.DocSearch-Footer {
  @apply border-t dark:border-dark-300;
}
.DocSearch-Search-Icon {
  @apply h-18px w-18px lg:(h-20px w-20px);
}
.DocSearch-Button:hover .DocSearch-Search-Icon {
  @apply text-$docsearch-text-color;
}
.DocSearch-Input {
  padding-left: 1rem;
  font-size: 1em;
}
.DocSearch-StartScreen {
  padding-top: 4rem;
  padding-bottom: 4rem;
}
.small {
  .DocSearch-Button {
    @apply p-9px h-auto;
  }
  .DocSearch-Button-Key,
  .DocSearch-Button-KeySeparator,
  .DocSearch-Button-Placeholder {
      display: none;
  }
  .DocSearch-Search-Icon {
    @apply h-18px w-18px;
  }
}
</style>
