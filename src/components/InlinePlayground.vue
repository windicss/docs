<script setup lang="ts">
/* eslint-disable vue/no-v-html */
import { ref, computed, onMounted, watchEffect, defineProps } from 'vue'
import { useThrottle } from '@vueuse/core'
import Windi from 'windicss'
import Prism from 'prismjs'

import 'prismjs/components/prism-css'

const props = defineProps({
  classes: {
    type: String,
    // eslint-disable-next-line no-useless-escape
    default: 'p-1.1em bg-hex-0ea5e9 text-white rounded\nhover:\(shadow bg-opacity-85)',
  },
  preview: {
    default: true,
  },
})

const processor = new Windi()

const frame = ref<HTMLIFrameElement | null>()
const classes = ref(props.classes.replace(/::/g, ':'))
const throttled = useThrottle(classes, 300)

let acceped: string[] = []

const style = computed(() => {
  const { styleSheet, success } = processor.interpret(throttled.value.replace(/\n/g, ' '))
  acceped = success
  return styleSheet.build().trim()
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
  <div class="my-4 p-2 border border-gray-300 rounded">
    <textarea
      v-model="classes"
      class="w-full border border-gray-300 resize-y p-2 rounded"
    />
    <div class="flex">
      <div class="language-css !m-0">
        <pre v-html="highlighted" />
      </div>
      <div class="w-2/5 hidden md:block pl-2">
        <iframe
          ref="frame"
          src="/__playground.html"
          class="border-none overflow-hidden outline-none w-full"
        />
      </div>
    </div>
  </div>
</template>
