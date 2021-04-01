import { Ref, computed, watch } from 'vue'
import * as lzs from 'lz-string'
import mitt from 'mitt'

export const emitter = mitt()
export const SHARE_EVENT = Symbol('share')
export const BASE_URL = 'https://next.windicss.org'

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
}
export function emitShare() {
  emitter.emit(SHARE_EVENT)
}
