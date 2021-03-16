<script setup lang="ts">
import { ref, defineProps, toRefs, watchEffect } from 'vue'
import { isDark } from '../../composables/dark'

const props = defineProps({
  css: {
    default: '',
  },
  fixedCss: {
    default: '',
  },
  classes: {
    default: '',
  },
  heightOffset: {
    default: 0,
  },
})

const isReady = ref(false)
const propRefs = toRefs(props)
const frame = ref<HTMLIFrameElement | null>(null)

for (const key of Object.keys(propRefs) as (keyof typeof propRefs)[]) {
  watchEffect(() => {
    setTimeout(resizeIframe, 100)
    if (!isReady.value)
      return
    frame.value?.contentWindow?.postMessage(
      JSON.stringify({
        [key]: propRefs[key].value,
      }),
      location.origin,
    )
  })
}

watchEffect(() => {
  if (!isReady.value)
    return
  frame.value?.contentWindow?.document?.querySelector('html')?.classList?.toggle('dark', isDark.value)
})

function resizeIframe() {
  if (!frame.value?.contentWindow)
    return

  frame.value.style.height = '0'
  frame.value.style.height = `${frame.value.contentWindow.document.documentElement.scrollHeight + props.heightOffset}px`
}

function ready() {
  isReady.value = true
}
</script>

<template>
  <iframe
    ref="frame"
    src="/__playground.html"
    class="overflow-visiable outline-none h-0 m-auto"
    frameborder="0"
    scrolling="no"
    @load="ready"
  />
</template>
