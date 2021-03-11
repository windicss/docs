<script setup lang="ts">
import { ref, computed, onMounted, watch, watchEffect } from 'vue'
import Windi from 'windicss'
import Prism from 'prismjs'

import 'prismjs/components/prism-css'

const processor = new Windi()

const frame = ref<HTMLIFrameElement | null>()
const source = ref('p-1em bg-hex-0ea5e9 text-white rounded\nhover\\:(shadow bg-opacity-85)'.replace(/\\/g, ''))

let acceped: string[] = []

const style = computed(() => {
  const { styleSheet, success } = processor.interpret(source.value.replace(/\n/g, ' '))
  acceped = success
  return styleSheet.build()
})

const highlighted = computed(() => {
  return Prism.highlight(style.value, Prism.languages.css, 'css')
})

function sendData() {
  if (frame.value?.contentWindow) {
    frame.value.contentWindow.postMessage(
      JSON.stringify({
        style: style.value,
        classes: acceped.join(' '),
      }),
      location.origin,
    )
  }
}

watchEffect(sendData)

onMounted(() => {
  frame.value!.contentWindow!.onload = sendData
})
</script>

<template>
  <div class="my-4 p-2 border border-gray-300 rounded-full">
    <textarea
      v-model="source"
      class="w-full border border-gray-300 resize-y p-2 rounded"
    />
    <div class="grid grid-cols-2 mt-2">
      <div class="language-css text-white !m-0">
        <pre v-html="highlighted" />
      </div>
      <iframe
        ref="frame"
        src="/__playground.html"
        class="border-none overflow-hidden outline-none pl-2 w-full"
      />
    </div>
  </div>
</template>
