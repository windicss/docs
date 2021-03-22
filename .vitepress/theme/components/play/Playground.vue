<script setup lang="ts">
import { defineProps, ref, computed } from 'vue'
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
      <template #icons>
        <!-- TODO -->
        <NavBarIcon>
          <carbon:open-panel-bottom />
        </NavBarIcon>
        <NavBarIcon>
          <carbon:open-panel-left />
        </NavBarIcon>
        <NavBarIcon>
          <carbon:open-panel-right />
        </NavBarIcon>
        <NavDivider />
      </template>
      <!-- <NavBarTitle />

      <nav class="flex px-3 ml-4 ml-10">
        <NavLinks :links="[{ text: 'Home', link:'/'}, { text: 'Play', link:'/play'}]" />
      </nav>

      <div class="flex-grow" />

      <NavBarIconButtons /> -->
    </NavBar>
    <Board class="playground">
      <Board vertical>
        <TemplateBlock v-model="htmlCode" :processor="processor" />
        <StyleBlock v-model="styleCode" />
      </Board>
      <Board>
        <PreviewBlock :html="htmlCode" :css="generatedCSS" />
      </Board>
    </Board>
  </div>
</template>

<style>
.playground {
  @apply pt-$header-height min-h-screen bg-blue-gray-100 dark:bg-dark-800;
}
@screen md {
  .playground {
    height: calc(100vh - var(--header-height));
  }
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
