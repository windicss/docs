<template>
  <div id="docsearch" class="algolia-search-box" />
</template>

<script setup lang="ts">
import '@docsearch/css/dist/style.css'
import { useRoute, useRouter } from 'vitepress'
import { defineProps, getCurrentInstance, onMounted, watch } from 'vue'
import docsearch from '@docsearch/js'
import type { DocSearchHit } from '@docsearch/react/dist/esm/types'
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

function update(options: any) {
  if (vm && vm.vnode.el) {
    vm.vnode.el.innerHTML
      = '<div class="algolia-search-box" id="docsearch"></div>'
    initialize(options)
  }
}

function initialize(userOptions: any) {
  docsearch(
    Object.assign({}, userOptions, {
      container: '#docsearch',

      searchParameters: Object.assign({}, userOptions.searchParameters),

      navigator: {
        navigate: ({ suggestionUrl }: { suggestionUrl: string }) => {
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
      },

      transformItems: (items: DocSearchHit[]) => {
        return items.map((item) => {
          return Object.assign({}, item, {
            url: getRelativePath(item.url),
          })
        })
      },

      hitComponent: ({
        hit,
        children,
      }: {
        hit: DocSearchHit
        children: any
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
    }),
  )
}
</script>

<style lang="postcss">
.algolia-search-box {
  @apply pt-1px md:(pl-4 text-0.9rem font-medium);
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
  --docsearch-searchbox-background: theme('colors.gray.200');
  --docsearch-searchbox-focus-background: theme('colors.gray.100');
  --docsearch-searchbox-shadow: none;
  --docsearch-text-color: var(--c-text-light);
  --docsearch-muted-color: var(--c-text-lighter);
  --docsearch-key-gradient: transparent;
  --docsearch-key-shadow: none;
}

html.dark .DocSearch {
  --docsearch-container-background: rgba(0,0,0,0.8);
  --docsearch-searchbox-background: rgba(255, 255, 255, 0.5);
  --docsearch-searchbox-focus-background: rgba(255, 255, 255, 0.1);
  --docsearch-key-gradient: transparent;
  --docsearch-key-shadow: none;
}

.DocSearch-Button {
  @apply rounded-lg px-3 ml-0 rounded-lg
  bg-gray-200 bg-opacity-50 hover:bg-opacity-60 hover:bg-gray-200
  dark:(bg-gray-700 bg-opacity-40 hover:bg-opacity-60);
}
.DocSearch-Button-Key {
  @apply static pb-0 border border-gray-300 bg-transparent m-0;
}
.DocSearch-Button-Placeholder + .DocSearch-Button-Key {
  @apply mr-2;
}
.DocSearch-Button-Placeholder {
  @apply pl-3 font-normal pr-32;
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
</style>
