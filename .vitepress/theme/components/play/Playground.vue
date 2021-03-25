<script setup lang="ts">
import { defineProps, ref, computed, watch } from 'vue'
import type { PropType } from 'vue'
import Windi from 'windicss'
import type { Config } from 'windicss/types/interfaces'
import { StyleSheet } from 'windicss/utils/style'
import { CSSParser, HTMLParser } from 'windicss/utils/parser'
import { Splitpanes, Pane } from 'splitpanes'
import { html, css } from '../../examples/playground'
import 'splitpanes/dist/splitpanes.css'

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
    <Splitpanes class="default-theme h-full w-full">
      <Pane min-size="20" size="60">
        <Splitpanes horizontal>
          <Pane>
            <TemplateBlock v-model="htmlCode" class="h-full w-full" :processor="processor" />
          </Pane>
          <Pane>
            <StyleBlock v-model="styleCode" class="h-full w-full" :processor="processor" />
          </Pane>
        </Splitpanes>
      </Pane>
      <Pane min-size="20" size="40">
        <PreviewBlock class="h-full">
          <ClientOnly>
            <PlaygroundIframe class="w-full h-full" :html="htmlCode" :css="generatedCSS" />
          </ClientOnly>
        </PreviewBlock>
      </Pane>
    </Splitpanes>
  </div>
</template>

<style>
.playground {
  height: calc(100vh - var(--header-height));
  @apply p-4 bg-blue-gray-100 dark:bg-dark-800;
}
.block-bg {
  @apply bg-white rounded-lg bg-opacity-90 dark:bg-dark-500;
}
.block-title {
  @apply px-4 pt-2 text-sm font-bold opacity-85 select-none;
}
.block-code {
  @apply absolute pt-2em inset-0 w-full h-full overflow-hidden rounded-b-lg;
}
.splitpanes.default-theme .splitpanes__pane {
  @apply bg-transparent;
}
.splitpanes.default-theme .splitpanes__splitter {
  @apply bg-transparent border-transparent min-w-4 min-h-4;
  &:before, &:after {
    @apply bg-gray-300 dark:bg-dark-300;
  }
  &:hover:before, &:hover:after {
    @apply bg-gray-400 dark:bg-dark-100;
  }
}
</style>
