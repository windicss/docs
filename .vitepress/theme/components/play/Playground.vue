<script setup lang="ts">
import { defineProps, ref, computed, watch } from 'vue'
import type { PropType } from 'vue'
import Windi from 'windicss'
import type { Config } from 'windicss/types/interfaces'
import { StyleSheet } from 'windicss/utils/style'
import { CSSParser, HTMLParser } from 'windicss/utils/parser'
import { Board } from 'vue-board'
import { html, css } from '../../examples/playground'

const styleCode = ref(css)

const htmlCode = ref(html)

const props = defineProps({
  config: {
    type: Object as PropType<Config>,
  },
})

watch(htmlCode, v => console.log('play'))

const processor = computed(() => new Windi(props.config))

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
</script>

<template>
  <div class="playground">
    <Board class="h-full">
      <Board vertical>
        <TemplateBlock v-model="htmlCode" :processor="processor" />
        <StyleBlock v-model="styleCode" :processor="processor" />
      </Board>
      <Board>
        <PreviewBlock>
          <ClientOnly>
            <PlaygroundIframe class="w-full h-full" :html="htmlCode" :css="generatedCSS" />
          </ClientOnly>
        </PreviewBlock>
      </Board>
    </Board>
  </div>
</template>

<style>
.playground {
  height: calc(100vh - var(--header-height));
  @apply p-4 bg-blue-gray-100 dark:bg-dark-800;
}
.block-bg {
  @apply bg-white rounded-lg bg-opacity-90 dark:bg-dark-500 shadow;
}
.block-title {
  @apply px-4 pt-2 text-sm font-bold opacity-85 select-none;
}
.block-code {
  @apply absolute pt-2em inset-0 w-full h-full overflow-hidden rounded-b-lg;
}
</style>
