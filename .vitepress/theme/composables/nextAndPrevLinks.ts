import { computed } from 'vue'
import { useSiteDataByRoute, usePageData } from 'vitepress'
import { isArray, ensureStartingSlash, removeExtension } from '../utils'
import { getSideBarConfig, getFlatSideBarLinks } from '../support/sideBar'

export function useNextAndPrevLinks() {
  const site = useSiteDataByRoute()
  const page = usePageData()

  const path = computed(() => {
    return removeExtension(ensureStartingSlash(page.value.relativePath))
  })

  const candidates = computed(() => {
    const config = getSideBarConfig(site.value.themeConfig.sidebar, path.value)

    return isArray(config) ? getFlatSideBarLinks(config) : []
  })

  const index = computed(() => {
    return candidates.value.findIndex((item) => {
      return item.link === path.value
    })
  })

  const next = computed(() => {
    if (
      site.value.themeConfig.nextLinks !== false
      && index.value > -1
      && index.value < candidates.value.length - 1
    )
      return candidates.value[index.value + 1]
    return null
  })

  const prev = computed(() => {
    if (site.value.themeConfig.prevLinks !== false && index.value > 0)
      return candidates.value[index.value - 1]
    return null
  })

  const hasLinks = computed(() => !!next.value || !!prev.value)

  return {
    next,
    prev,
    hasLinks,
  }
}
