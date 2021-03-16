<script setup lang="ts">
import { ref, defineProps, onMounted, watch, defineEmit } from 'vue'
import Windi from 'windicss'
import { CSSParser } from 'windicss/utils/parser'
import { useClipboard, useVModel } from '@vueuse/core'
import Prism from 'prismjs'

import 'prismjs/components/prism-css'

import { useCodeMirror } from '../../composables/useCodeMirror'

const emit = defineEmit()
const props = defineProps({
  input: {
    type: String,
    // eslint-disable-next-line no-useless-escape
    default: '',
  },
})

const input = useVModel(props, 'input', emit)
const textareaInput = ref<HTMLTextAreaElement | null>(null)

const plainCSS = ref('')
const highlighted = ref('')

const { copy, copied } = useClipboard({
  read: false,
  source: plainCSS,
  copiedDuring: 2000,
})

const processor = new Windi()

watch(input, () => {
  plainCSS.value = new CSSParser(input.value, processor).parse().build()
  highlighted.value = Prism.highlight(plainCSS.value, Prism.languages.css, 'css').trim()
}, { immediate: true })

onMounted(async() => {
  if (typeof window === 'undefined')
    return

  await useCodeMirror(textareaInput, input, { mode: 'text/x-scss', scrollbarStyle: 'null' })
})
</script>

<template>
  <div class="border bc rounded relative directives-playground">
    <div
      class="grid w-full"
      style="grid-template-columns: 1fr max-content;"
    >
      <div class="flex-auto flex flex-col overflow-auto">
        <div>
          <textarea
            ref="textareaInput"
            spellcheck="false"
            autocomplete="off"
            autocapitalize="false"
            class="bg-transparent outline-none"
          />
        </div>
        <div
          class="text-sm border-t bc"
        >
          <div class="ml-1 p-2 text-sm opacity-50 flex">
            <span>Generated CSS</span>
            <div class="flex-auto" />
            <div class="icon-button ml-3" :class="{ active: copied }" title="Copy" @click="copy()">
              <carbon:checkmark-outline v-if="copied" class="text-green-500" />
              <carbon:copy v-else />
            </div>
          </div>
          <!-- eslint-disable-next-line vue/no-v-html -->
          <pre class="px-3 pb-2 overflow-auto max-h-30em"><code v-html="highlighted" /></pre>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss">
.directives-playground .CodeMirror {
  @apply px-3 py-2 h-auto bg-transparent font-mono text-sm;
}
</style>
