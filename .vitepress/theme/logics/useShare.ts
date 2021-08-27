import { computed, watch } from 'vue'
import * as lzs from 'lz-string'
import mitt from 'mitt'
import { getTemplateComponent } from '../data/components'

import type { Ref } from 'vue'

export const SHARE_EVENT = Symbol('share')
export const EXPORT_EVENT = Symbol('export')
export const BASE_URL = 'https://windicss.org'

type ComponentType = 'vue' | 'react' | 'svelte'

const filename: Record<ComponentType, string> = {
  vue: 'windicss.vue',
  react: 'windicss.tsx',
  svelte: 'windicss.svelte',
}

type Events = {
  [SHARE_EVENT]: void
  [EXPORT_EVENT]: ComponentType
}

export const emitter = mitt<Events>()

export function getShareURL(html: string, css: string, site: string = BASE_URL) {
  const url = new URL('/play.html', site)
  url.searchParams.set('html', lzs.compressToEncodedURIComponent(html))
  url.searchParams.set('css', lzs.compressToEncodedURIComponent(css))
  return url
}
export function getSharedCode() {
  const url = new URL(window.location.href)
  const params = url.searchParams
  const htmlParam = params.get('html')
  const cssParam = params.get('css')

  return {
    html: htmlParam ? lzs.decompressFromEncodedURIComponent(htmlParam) : null,
    css: cssParam ? lzs.decompressFromEncodedURIComponent(cssParam) : null,
  }
}

function download(filename: string, textInput: string) {
  const blob = new Blob([textInput], {
    type: 'text/plain',
  })
  const url = window.URL.createObjectURL(blob)
  const element = document.createElement('a')
  element.setAttribute('href', url)
  element.setAttribute('download', filename)
  element.click()
  window.URL.revokeObjectURL(url)
}

export function useEmitShare(html: Ref<string>, css: Ref<string>) {
  const url = computed(() => getShareURL(html.value, css.value))
  watch(url, () => {
    const path = `${url.value.pathname}${url.value.search}`
    if (typeof window !== 'undefined' && !import.meta.env.DEV)
      window.history.replaceState('', '', path)
  }, { immediate: true })

  emitter.on(SHARE_EVENT, async() => {
    await navigator.clipboard.writeText(url.value.toString())
  })
  emitter.on(EXPORT_EVENT, async(type) => {
    if (!type) return
    const str = getTemplateComponent(type, html.value, css.value)
    if (str)
      download(filename[type], str)
  })
}
export function emitShare() {
  emitter.emit(SHARE_EVENT)
}

export function emitExport(type: ComponentType) {
  emitter.emit(EXPORT_EVENT, type)
}
