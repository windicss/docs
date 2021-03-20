<script setup lang="ts">
import { defineProps, ref, computed, defineAsyncComponent } from 'vue'
import type { PropType } from 'vue'
import Windi from 'windicss'
import type { Config } from 'windicss/types/interfaces'
import { StyleSheet } from 'windicss/utils/style'
import { CSSParser, HTMLParser } from 'windicss/utils/parser'
import { html, css } from '../../examples/playground'

const CodeMirror = defineAsyncComponent(() => import('../CodeMirror'))

const styleCode = ref(css)

const htmlCode = ref(html)

const props = defineProps({
  config: {
    type: Object as PropType<Config>,
  },
})

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
  <div class="playground flex flex-col space-y-4 md:(flex-row space-x-4 space-y-0)">
    <!-- html -->
    <div class="h-full w-full md:w-3/5 grid gap-4">
      <div class="min-h-300px bg-gray-200 dark:bg-black bg-opacity-50 rounded-lg shadow-xl w-full h-full relative">
        <div class="px-4 py-1.5 font-semibold">
          Style
        </div>
        <div class="absolute pt-9 inset-0 w-full h-full overflow-hidden rounded-b-lg">
          <ClientOnly>
            <CodeMirror v-model="styleCode" class="h-full w-full" language="css" />
          </ClientOnly>
        </div>
      </div>
      <div class="min-h-300px bg-gray-200 dark:bg-black bg-opacity-50 rounded-lg shadow-xl w-full h-full relative">
        <div class="px-4 py-1.5 font-semibold">
          Template
        </div>
        <div class="absolute pt-9 inset-0 w-full h-full overflow-hidden rounded-b-lg">
          <ClientOnly>
            <CodeMirror v-model="htmlCode" class="h-full w-full" language="html" />
          </ClientOnly>
        </div>
      </div>
    </div>
    <!-- preview -->
    <div class="h-full w-full md:w-2/5 bg-gray-200 dark:bg-black bg-opacity-50 rounded-lg shadow-xl overflow-hidden">
      <div class="px-4 py-1.5 font-semibold">
        Preview
      </div>
      <div class="p-4">
        <ClientOnly>
          <PlaygroundIframe class="w-full h-full" :html="htmlCode" :css="generatedCSS"></PlaygroundIframe>
        </ClientOnly>
      </div>
    </div>
  </div>
</template>

<style>
.playground {
  min-height: calc(100vh - var(--header-height));
  @apply p-4;
}
@screen md {
  .playground {
    height: calc(100vh - var(--header-height));
  }
}

</style>
