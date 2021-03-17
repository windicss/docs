<template>
  <div id="docsearch" class="algolia-search-box" />
</template>

<script setup lang="ts">
import '@docsearch/css/dist/style.css'
import { useRoute, useRouter } from 'vitepress'
import { defineProps, getCurrentInstance, onMounted, watch } from 'vue'
import docsearch from '@docsearch/js'
import type { DefaultTheme } from '../config'

const props = defineProps<{
  options: DefaultTheme.AlgoliaSearchOptions
}>()

const vm = getCurrentInstance()
const route = useRoute()
const router = useRouter()

watch(
  () => props.options,
  (value) => {
    update(value)
  },
)

onMounted(() => {
  initialize(props.options)
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
  console.log(userOptions)
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
            console.log(children)
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
  @apply pt-1px lg:(pl-4);
}

.DocSearch {
  --docsearch-container-background: rgba(220,220,220,0.6);
  --docsearch-modal-background: var(--c-bg);
  --docsearch-modal-shadow: var(--c-bg);
  --docsearch-hit-color: var(--c-text-light);
  --docsearch-footer-background: transparent;
  --docsearch-footer-shadow: rgba(125,125,125,0.1);
  --docsearch-hit-background: rgba(125,125,125,0.1);
  --docsearch-hit-shadow: none;
  --docsearch-primary-color: var(--c-brand);
  --docsearch-highlight-color: var(--docsearch-primary-color);
  --docsearch-searchbox-background: rgba(229, 231, 235, 0.5);
  --docsearch-searchbox-focus-background: rgba(229, 231, 235, 0.6);
  --docsearch-searchbox-shadow: none;
  --docsearch-text-color: var(--c-text-light);
  --docsearch-muted-color: var(--c-text-lighter);
  --docsearch-key-gradient: transparent;
  --docsearch-key-shadow: none;
}

html.dark .DocSearch {
  --docsearch-container-background: rgba(0,0,0,0.8);
  --docsearch-searchbox-background: rgba(55, 65, 81, 0.4);
  --docsearch-searchbox-focus-background: rgba(55, 65, 81, 0.6);
  --docsearch-key-gradient: transparent;
  --docsearch-key-shadow: none;
}

.DocSearch-Button {
  @apply rounded-lg px-2 md:px-3 ml-0 rounded-lg;
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
.DocSearch-Modal {
  @apply rounded-lg;
}
.DocSearch-Footer {
  @apply border-t border-dashed dark:border-gray-500;
}
.DocSearch-Search-Icon {
  @apply h-18px w-18px md:(h-16px w-16px);
}
.DocSearch-Button:hover .DocSearch-Search-Icon {
  @apply text-$docsearch-text-color;
}
@screen -lg {
  .DocSearch-Button-Key,
  .DocSearch-Button-KeySeparator,
  .DocSearch-Button-Placeholder {
      display: none;
  }
}
</style>
