
import { computed, Ref } from 'vue'
import { useRoute, withBase } from 'vitepress'
import { isExternal as isExternalCheck } from '../utils'
import type { DefaultTheme } from '../config'

export function useNavLink(item: Ref<DefaultTheme.NavItemWithLink>) {
  const route = useRoute()

  const isExternal = isExternalCheck(item.value.link)

  const props = computed(() => {
    const routePath = normalizePath(`/${route.data?.relativePath}`)

    let active = false
    if (item.value.activeMatch) {
      active = new RegExp(item.value.activeMatch).test(routePath)
    }
    else {
      const itemPath = normalizePath(withBase(item.value.link))
      active = itemPath === routePath
    }

    return {
      'class': {
        'bg-gray-200 dark:bg-dark-400': active,
        isExternal,
      },
      'href': isExternal ? item.value.link : withBase(item.value.link),
      'target': item.value.target || isExternal ? '_blank' : undefined,
      'rel': item.value.rel || isExternal ? 'noopener noreferrer' : undefined,
      'aria-label': item.value.ariaLabel,
    }
  })

  return {
    props,
    isExternal,
  }
}

function normalizePath(path: string): string {
  return path
    .replace(/#.*$/, '')
    .replace(/\?.*$/, '')
    .replace(/\.(html|md)$/, '')
    .replace(/\/index$/, '/')
}
