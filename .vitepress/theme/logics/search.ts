import docsearch from '@docsearch/js'
import { useRoute, useRouter, useData } from 'vitepress'
import { getCurrentInstance, onMounted, watch } from 'vue'

import type { DocSearchHit } from '@docsearch/react/dist/esm/types'
import type { DefaultTheme } from '@/config'

export function useSearchBox(props: Readonly<{
  options: DefaultTheme.AlgoliaSearchOptions
  multilang?: boolean
  id?: string
}>) {
  const vm = getCurrentInstance()
  const route = useRoute()
  const router = useRouter()

  const searchId = props.id || 'docsearch'

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
        = `<div class="algolia-search-box" id="${searchId}"></div>`
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

  return {
    searchId,
    initialize,
    update,
  }
}
