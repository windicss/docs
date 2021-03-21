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
  <div>
    <NavBar>
      <!-- <NavBarTitle />

      <nav class="flex px-3 ml-4 ml-10">
        <NavLinks :links="[{ text: 'Home', link:'/'}, { text: 'Play', link:'/play'}]" />
      </nav>

      <div class="flex-grow" />

      <NavBarIconButtons /> -->
    </NavBar>
    <div class="playground flex flex-col md:(flex-row)">
      <!-- html -->
      <div class="h-full w-full md:w-3/5 grid">
        <div class="min-h-300px block-border w-full h-full relative">
          <div class="block-title">
            Template
          </div>
          <div class="block-code">
            <ClientOnly>
              <CodeMirror v-model="htmlCode" class="h-full w-full" language="html" />
            </ClientOnly>
          </div>
        </div>
        <div class="min-h-300px block-border w-full h-full relative">
          <div class="block-title">
            Style
          </div>
          <div class="block-code">
            <ClientOnly>
              <CodeMirror v-model="styleCode" class="h-full w-full" language="css" />
            </ClientOnly>
          </div>
        </div>
      </div>
      <!-- preview -->
      <div class="h-full w-full md:w-2/5 block-bg overflow-hidden">
        <div class="block-title">
          Preview
        </div>
        <div class="p-4">
          <ClientOnly>
            <PlaygroundIframe class="w-full h-full" :html="htmlCode" :css="generatedCSS"></PlaygroundIframe>
          </ClientOnly>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.playground {
  @apply pt-$header-height min-h-screen;
}
@screen md {
  .playground {
    height: calc(100vh - var(--header-height));
  }
}
.block-border {
  @apply border-r border-b bc;
}
.block-bg {
  @apply bg-gray-100 bg-opacity-50 dark:bg-gray-500 dark:bg-opacity-10;
}
.block-title {
  @apply px-4 pt-2 opacity-50 text-sm uppercase tracking-wider;
}
.block-code {
  @apply absolute pt-2em inset-0 w-full h-full overflow-hidden rounded-b-lg;
}
</style>
