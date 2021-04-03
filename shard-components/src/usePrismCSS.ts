import { useClipboard } from '@vueuse/core'
import { ref, watchEffect } from 'vue'

import Prism from 'prismjs'
import 'prismjs/components/prism-css'

export function usePrismCSS(getStyle: () => string) {
  const plainCSS = ref('')
  const highlightedCSS = ref('')

  const { copy, copied } = useClipboard({
    read: false,
    source: plainCSS,
    copiedDuring: 2000,
  })

  watchEffect(() => {
    const style = getStyle()
    plainCSS.value = style
    highlightedCSS.value = Prism.highlight(style, Prism.languages.css, 'css').trim()
  })

  return {
    copy,
    copied,
    plainCSS,
    highlightedCSS,
  }
}
