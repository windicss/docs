import { computed, Ref } from 'vue'
import Windi from 'windicss'
import type { Config } from 'windicss/types/interfaces'
import { StyleSheet } from 'windicss/utils/style'
import { CSSParser, HTMLParser } from 'windicss/utils/parser'

export function useWindiCSS(htmlCode: Ref<string>, styleCode: Ref<string>, config: Config | undefined) {
  const processor = computed(() => new Windi(config))

  const preflightStyles = computed(() => {
    return processor.value.preflight(htmlCode.value, true, true, true)
  })

  const transformStyles = computed(() => {
    return new CSSParser(styleCode.value, processor.value).parse()
  })

  const utilityStyles = computed(() => {
    return processor.value.interpret(
      new HTMLParser(htmlCode.value)
        .parseClasses()
        .map(i => i.result)
        .join(' '),
    ).styleSheet
  })

  const generatedCSS = computed(() => new StyleSheet()
    .extend(preflightStyles.value)
    .extend(transformStyles.value)
    .extend(utilityStyles.value)
    .sort()
    .build(),
  )

  return { processor, generatedCSS }
}
