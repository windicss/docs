<script setup lang="ts">
/* eslint-disable vue/no-v-html */
import { ref, computed, watchEffect, defineProps } from 'vue'
import Windi from 'windicss'
import Prism from 'prismjs'
import 'prismjs/components/prism-css'

const props = defineProps({
  classes: {
    type: String,
    // eslint-disable-next-line no-useless-escape
    default: 'px-1.2em py-2 bg-hex-0ea5e9 text-white rounded\nhover:\(shadow bg-opacity-85)',
  },
  preview: {
    default: true,
  },
})

const processor = new Windi()

const frame = ref<HTMLIFrameElement | null>()
const classes = ref(props.classes.replace(/::/g, ':'))

const tab = ref<'code' | 'css'>('code')

let acceped: string[] = []

const preflight = processor.preflight('<div <p', true, true, true)

const style = computed(() => {
  const { styleSheet, success } = processor.interpret(classes.value.replace(/\n/g, ' '))
  acceped = success
  return styleSheet
})

const highlighted = computed(() => {
  return Prism.highlight(style.value.build().trim(), Prism.languages.css, 'css').trim()
})

function updateIframe() {
  if (!frame.value?.contentWindow)
    return
  const fulll = preflight.extend(style.value)
  fulll.sort()

  frame.value.contentWindow.postMessage(
    JSON.stringify({
      style: fulll.build(),
      classes: acceped.join(' '),
    }),
    location.origin,
  )
  setTimeout(resizeIframe, 100)
}

function resizeIframe() {
  if (!frame.value?.contentWindow)
    return

  frame.value.style.height = '0'
  frame.value.style.height = `${frame.value.contentWindow.document.documentElement.scrollHeight}px`
}

watchEffect(updateIframe)
</script>

<template>
  <div class="flex tabs mt-4">
    <div class="tab" :class="{active: tab === 'code'}" @click="tab = 'code'">
      <carbon:code class="inline-block" />
    </div>
    <div class="tab" :class="{active: tab === 'css'}" @click="tab = 'css'">
      <bx:bxl-css3 class="inline-block" />
    </div>
  </div>
  <div class="border border-gray-300 rounded relative">
    <div
      class="grid w-full"
      style="grid-template-columns: 1fr max-content;"
    >
      <div class="flex-auto flex flex-col overflow-auto">
        <textarea
          v-model="classes"
          spellcheck="false"
          autocomplete="false"
          autocapitalize="false"
          class="text-sm font-mono border-none resize-none p-2 m-0 rounded min-height-1em outline-none w-full overflow-auto"
          :class="{'h-full': tab === 'code' }"
        />
        <div
          v-show="tab === 'css'"
          class="text-sm p-2 border-t border-gray-300"
        >
          <div class="ml-1 mb-2 opacity-50 text-sm">
            CSS
          </div>
          <pre><code v-html="highlighted" /></pre>
        </div>
      </div>
      <div
        v-if="preview"
        class="p-2 border-l border-gray-300"
      >
        <div class="ml-1 mb-2 opacity-50 text-sm">
          Preview
        </div>
        <iframe
          ref="frame"
          src="/__playground.html"
          class="overflow-hidden outline-none w-10em h-0"
          frameborder="0"
          scrolling="no"
          @load="updateIframe()"
        />
      </div>
    </div>
  </div>
</template>

<style>
.tabs .tab {
  @apply px-3 py-1 mx-1 cursor-pointer bg-gray-50 text-gray-400 opacity-75
    border-t border-l border-r rounded-tr rounded-tl border-gray-300;
}
.tabs .tab.active {
  @apply text-blue-500 bg-white opacity-100;
}
</style>
