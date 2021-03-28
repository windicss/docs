import { Ref } from 'vue'
import * as lzs from 'lz-string'
import mitt from 'mitt'

export const emitter = mitt()
export const SHARE_EVENT = Symbol('share')
export const BASE_URL = 'https://next.windicss.org'

export function getShareURL(html: string, css: string, site: string = BASE_URL) {
  const url = new URL('/play', site)
  url.searchParams.set('html', lzs.compressToEncodedURIComponent(html))
  url.searchParams.set('css', lzs.compressToEncodedURIComponent(css))
  return url.toString()
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
  emitter.on(SHARE_EVENT, async() => {
    const url = getShareURL(html.value, css.value)
    await navigator.clipboard.writeText(url)
  })
}
export function emitShare() {
  emitter.emit(SHARE_EVENT)
}
