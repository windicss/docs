import { ref, watchEffect } from 'vue'

import Prism from 'prismjs'
import 'prismjs/components/prism-css'

export function usePrismCSS(getStyle: () => string) {
  const plainCSS = ref('')
  const highlightedCSS = ref('')

  watchEffect(() => {
    const style = getStyle()
    plainCSS.value = style
    highlightedCSS.value = Prism.highlight(style, Prism.languages.css, 'css').trim()
  })

  return {
    plainCSS,
    highlightedCSS,
  }
}
