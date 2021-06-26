<script setup lang="ts">
import { defineProps, ref, onMounted } from 'vue'
import { Splitpanes, Pane } from 'splitpanes'
import type { PropType } from 'vue'
import type { Config } from 'windicss/types/interfaces'
import { useWindiCSS } from '@/logics/useWindiCSS'
import { getSharedCode, useEmitShare } from '@/logics/useShare'
import { layout } from '@/logics/playgroundLayout'
import { isDark } from '@/logics/dark'
import { bps } from '@/logics/breakpoints'
import { html, css } from '@/data/playground'
import 'splitpanes/dist/splitpanes.css'
import '@windicss/shared-components/index.css'

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

const fixedStyle = processor.value.interpret('p-6').styleSheet.build()

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
      <Splitpanes :horizontal="!bpmd || layout === 'bottom'" class="w-full h-full default-theme">
        <Pane v-if="layout === 'left'" min-size="20" :size="bpmd ? 40 : 33">
          <PlayPreviewBlock class="h-full">
            <preview-box
              class="w-full h-full"
              classes="p-6"
              :fixed-css="fixedStyle"
              :html="htmlCode"
              :css="generatedCSS"
              :dark="isDark"
            />
          </PlayPreviewBlock>
        </Pane>
        <Pane min-size="20" :size="bpmd ? 60 : 66">
          <Splitpanes :horizontal="layout !== 'bottom'">
            <Pane min-size="20">
              <PlayTemplateBlock v-model="htmlCode" class="w-full h-full" :processor="processor" />
            </Pane>
            <Pane min-size="20">
              <PlayStyleBlock v-model="styleCode" class="w-full h-full" :processor="processor" />
            </Pane>
          </Splitpanes>
        </Pane>
        <Pane v-if="layout !== 'left'" min-size="20" :size="bpmd ? 40 : 33">
          <PlayPreviewBlock class="h-full">
            <preview-box
              class="w-full h-full"
              classes="p-6"
              :fixed-css="fixedStyle"
              :html="htmlCode"
              :css="generatedCSS"
              :dark="isDark"
            />
          </PlayPreviewBlock>
        </Pane>
      </Splitpanes>
    </ClientOnly>
  </div>
</template>

<style lang="postcss">
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
  @apply pl-4 pr-2 pt-2 text-sm font-bold opacity-85 select-none;
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
