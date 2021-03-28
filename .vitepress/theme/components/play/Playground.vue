<script setup lang="ts">
import { defineProps, ref, onMounted } from 'vue'
import type { PropType } from 'vue'
import type { Config } from 'windicss/types/interfaces'
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core'
import { Splitpanes, Pane } from 'splitpanes'
import { useWindiCSS } from '../../composables/useWindiCSS'
import { getSharedCode, useEmitShare } from '../../composables/useShare'
import { html, css } from '../../examples/playground'
import 'splitpanes/dist/splitpanes.css'

const bps = useBreakpoints(breakpointsTailwind)
const bpmd = bps.greater('md')

const styleCode = ref(css)
const htmlCode = ref(html)

const props = defineProps({
  config: {
    type: Object as PropType<Config>,
  },
})

const {
  processor,
  generatedCSS,
} = useWindiCSS(htmlCode, styleCode, props.config)

onMounted(() => {
  const { html, css } = getSharedCode()
  if (html)
    htmlCode.value = html
  if (css)
    styleCode.value = css
})

useEmitShare(htmlCode, styleCode)
</script>

<template>
  <div class="playground">
    <ClientOnly>
      <Splitpanes :horizontal="!bpmd" class="default-theme h-full w-full">
        <Pane min-size="20" :size="bpmd ? 60 : 66">
          <Splitpanes horizontal>
            <Pane min-size="20">
              <TemplateBlock v-model="htmlCode" class="h-full w-full" :processor="processor" />
            </Pane>
            <Pane min-size="20">
              <StyleBlock v-model="styleCode" class="h-full w-full" :processor="processor" />
            </Pane>
          </Splitpanes>
        </Pane>
        <Pane min-size="20" :size="bpmd ? 40 : 33">
          <PreviewBlock class="h-full">
            <PlaygroundIframe class="w-full h-full" :html="htmlCode" :css="generatedCSS" />
          </PreviewBlock>
        </Pane>
      </Splitpanes>
    </ClientOnly>
  </div>
</template>

<style>
.playground {
  @apply h-140vh p-4 bg-blue-gray-100 dark:bg-dark-800;
}
@screen md {
  .playground {
    height: calc(100vh - var(--header-height));
  }
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
