<script setup lang="ts">
import '@docsearch/css'
import docsearch from '@docsearch/js'
import { useRoute, useRouter, useData } from 'vitepress'
import { defineProps, getCurrentInstance, onMounted, watch } from 'vue'

import type { DocSearchHit } from '@docsearch/react/dist/esm/types'
import type { DefaultTheme } from '@/config'

const props = defineProps<{
  options: DefaultTheme.AlgoliaSearchOptions
  multilang?: boolean
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

const { lang } = useData()

function initialize(userOptions: any) {
  // if the user has multiple locales, the search results should be filtered
  // based on the language
  const facetFilters = props.multilang ? [`language:${lang.value}`] : []
  docsearch(
    Object.assign({}, userOptions, {
      container: '#docsearch',
      searchParameters: Object.assign({}, userOptions.searchParameters, {
        // pass a custom lang facetFilter to allow multiple language search
        // https://github.com/algolia/docsearch-configs/pull/3942
        facetFilters: facetFilters.concat(
          userOptions.searchParameters?.facetFilters || [],
        ),
      }),
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

<template>
  <div id="docsearch" class="algolia-search-box" />
</template>

<style lang="postcss">
.algolia-search-box {
  @apply pt-1px;
}

:root {
  --docsearch-container-background: rgba(173,181,189,0.7);

  --docsearch-modal-background: theme('colors.white');
  --docsearch-modal-shadow: none;

  --docsearch-footer-background: transparent;
  --docsearch-footer-shadow: rgba(125,125,125,0.1);

  --docsearch-hit-color: theme('colors.cool-gray-800');
  --docsearch-hit-background: rgba(125,125,125,0.1);
  --docsearch-hit-shadow: none;

  --docsearch-primary-color: theme('colors.primary.600');
  --docsearch-highlight-color: var(--docsearch-primary-color);

  /* --docsearch-searchbox-background: theme('colors.cool-gray.100');
  --docsearch-searchbox-focus-background: theme('colors.cool-gray.200'); */
  --docsearch-searchbox-background: transparent;
  --docsearch-searchbox-focus-background: transparent;
  --docsearch-searchbox-shadow: none;
  --docsearch-searchbox-height: 3.25rem;

  --docsearch-text-color: theme('colors.cool-gray.600');
  --docsearch-muted-color: theme('colors.cool-gray.400');

  --docsearch-key-gradient: transparent;
  --docsearch-key-shadow: none;
}

html.dark {
  --docsearch-container-background: rgba(12,12,12,0.9);

  --docsearch-modal-background: theme('colors.dark.800');
  --docsearch-modal-shadow: none;

  /* --docsearch-searchbox-background: theme('colors.dark.400');
  --docsearch-searchbox-focus-background: theme('colors.dark.300'); */
  --docsearch-searchbox-background: transparent;
  --docsearch-searchbox-focus-background: transparent;

  --docsearch-text-color: theme('colors.cool-gray.200');
  --docsearch-muted-color: theme('colors.cool-gray.400');

  --docsearch-key-gradient: transparent;
  --docsearch-key-shadow: none;
}

.DocSearch-Button {
  @apply rounded-lg ml-0 h-auto px-3 py-2;
}
.DocSearch-Button-Key {
  @apply static w-5 h-5 pb-0 border border-$docsearch-muted-color m-0;
}
.DocSearch-Button-Placeholder + .DocSearch-Button-Key {
  @apply mr-2;
}
.DocSearch-Button-Placeholder {
  @apply pl-3 font-normal pr-12;
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
</style>
