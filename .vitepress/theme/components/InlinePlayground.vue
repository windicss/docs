<script setup lang="ts">
/* eslint-disable vue/no-v-html */
import { ref, watchEffect, defineProps, onMounted, watch } from 'vue'
import type { PropType } from 'vue'
import Windi from 'windicss'
import { StyleSheet } from 'windicss/utils/style'
import Prism from 'prismjs'
import { useClipboard } from '@vueuse/core'
import type CodeMirror from 'codemirror'
import { isDark } from '../composables/dark'
import 'prismjs/components/prism-css'
import 'codemirror/lib/codemirror.css'

const props = defineProps({
  input: {
    type: String,
    // eslint-disable-next-line no-useless-escape
    default: 'px-1.2em py-2 bg-hex-0ea5e9 text-white rounded\nhover:\(shadow bg-opacity-85)',
  },
  showPreview: {
    default: true,
  },
  showMode: {
    default: true,
  },
  showTabs: {
    default: true,
  },
  showCSS: {
    default: true,
  },
  showCopy: {
    default: true,
  },
  fixed: {
    default: '',
  },
  tab: {
    type: String as PropType<'code' | 'css'>,
    default: 'code',
  },
  mode: {
    type: String as PropType<'interpret' | 'compile'>,
    default: 'interpret',
  },
})

const processor = new Windi()

const frame = ref<HTMLIFrameElement | null>()
const textarea = ref<HTMLTextAreaElement | null>()
const input = ref(props.input)
const tab = ref(props.tab)
const mode = ref(props.mode)

let acceped: string[] = []

const decorations: CodeMirror.TextMarker<CodeMirror.MarkerRange>[] = []
const preflightStyles = processor.preflight('<div <p', true, true, true)
const fixedStyles = processor.interpret(props.fixed).styleSheet

const style = ref<StyleSheet>(new StyleSheet())
const plainCSS = ref('')
const highlighted = ref('')
const copied = ref(false)

const clipboard = useClipboard({ read: false })

function copy() {
  clipboard.copy(plainCSS.value)
  copied.value = true
  setTimeout(() => { copied.value = false }, 2000)
}

watch(style, () => {
  plainCSS.value = style.value.build().trim()
  highlighted.value = Prism.highlight(plainCSS.value, Prism.languages.css, 'css').trim()
}, { immediate: true })

function updateIframe() {
  if (!frame.value?.contentWindow)
    return

  const fullStyle = preflightStyles.extend(fixedStyles).extend(style.value).sort()

  frame.value.contentWindow.document.querySelector('html')?.classList.toggle('dark', isDark.value)
  frame.value.contentWindow.postMessage(
    JSON.stringify({
      style: fullStyle.build(),
      classes: `${acceped.join(' ')} ${props.fixed}`,
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

function mark(start: number, end: number, matched: boolean, cm: CodeMirror.Editor) {
  decorations.push(cm.markText(
    cm.posFromIndex(start),
    cm.posFromIndex(end),
    { className: matched ? 'text-green-600' : 'text-orange-600' },
  ))
}

function toggleMode() {
  mode.value = mode.value === 'compile' ? 'interpret' : 'compile'
}

function interpret(cm: CodeMirror.Editor) {
  // @ts-expect-error
  const { styleSheet, success, ignored, className } = mode.value === 'interpret'
    ? processor.interpret(input.value.replace(/\n/g, ' ')) || {}
    : processor.compile(input.value.replace(/\n/g, ' ')) || {}

  if (mode.value === 'interpret')
    acceped = success || []
  else
    acceped = [className]

  // clear previous
  decorations.forEach(i => i.clear())

  // hightlight for classes
  let start = 0
  input.value.split(/\s/g).forEach((i) => {
    const end = start + i.length
    if (success.includes(i))
      mark(start, end, true, cm)
    else if (ignored.includes(i))
      mark(start, end, false, cm)
    start = end + 1
  })

  // hightlight for groups
  Array.from(input.value.matchAll(/([\w:]+):\((.*?)\)/g))
    .forEach((match) => {
      const [full, prefix, itemStr] = match
      let start = match.index!
      const items = itemStr.split(/\s/g)
      // group success
      if (success.some(i => i.startsWith(prefix))) {
        // prefix
        mark(start, start + prefix.length + 2, true, cm)
        // end braket
        mark(start + full.length - 1, start + full.length, true, cm)

        start += prefix.length + 2

        // group items
        items.forEach((i) => {
          const item = `${prefix}:${i}`
          const end = start + i.length
          if (success.includes(item))
            mark(start, end, true, cm)
          else if (ignored.includes(item))
            mark(start, end, false, cm)

          start = end + 1
        })
      }
      // group failed
      else {
        mark(start, start + full.length, false, cm)
      }
    })

  style.value = styleSheet
}

watchEffect(updateIframe)

onMounted(async() => {
  if (typeof window === 'undefined')
    return

  const CodeMirror = await import('codemirror')
  const cm = CodeMirror.fromTextArea(textarea.value!, {
    scrollbarStyle: 'null',
    lineWrapping: true,
  })

  cm.on('change', () => {
    input.value = cm.getValue()
  })

  watch(
    input,
    (v) => {
      if (v !== cm.getValue())
        cm.replaceRange(v, cm.posFromIndex(0), cm.posFromIndex(Infinity))
    },
    { immediate: true },
  )

  watchEffect(() => interpret(cm))
})
</script>

<template>
  <div v-if="showTabs" class="flex tabs mt-4">
    <div class="tab" :class="{active: tab === 'code'}" @click="tab = 'code'">
      <carbon:code class="inline-block" />
    </div>
    <div class="tab" :class="{active: tab === 'css'}" @click="tab = 'css'">
      <bx:bxl-css3 class="inline-block" />
    </div>
    <div class="flex-auto" />
  </div>
  <div class="border bc rounded relative">
    <div
      class="grid w-full"
      style="grid-template-columns: 1fr max-content;"
    >
      <div class="flex-auto flex flex-col overflow-auto">
        <textarea
          ref="textarea"
          spellcheck="false"
          autocomplete="false"
          autocapitalize="false"
          class="text-sm font-mono border-none resize-none p-2 m-0 rounded min-height-1em outline-none w-full overflow-auto"
          :class="{'h-full': tab === 'code' }"
        />
        <div
          v-if="showCSS"
          v-show="tab === 'css'"
          class="text-sm p-2 border-t bc"
        >
          <div class="ml-1 mb-2 opacity-50 text-sm flex">
            <span>CSS</span>
            <div class="flex-auto" />
            <div v-if="showMode" class="icon-button" title="Toggle Mode" @click="toggleMode">
              <span class="text-sm mr-1.5 -mt-0.5 capitalize">{{ mode }}</span>
              <carbon:circle-packing v-if="mode === 'compile'" />
              <carbon:chart-bubble-packed v-else />
            </div>
            <div v-if="showCopy" class="icon-button ml-3" :class="{ active: copied }" title="Copy" @click="copy()">
              <carbon:checkmark-outline v-if="copied" class="text-green-500" />
              <carbon:copy v-else />
            </div>
          </div>
          <pre class="px-1 overflow-auto"><code v-html="highlighted" /></pre>
        </div>
      </div>
      <div
        v-if="showPreview"
        class="p-2 border-l flex bc"
      >
        <iframe
          ref="frame"
          src="/__playground.html"
          class="overflow-hidden outline-none w-10em h-0 m-auto"
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
  @apply px-3 py-1 mx-1 cursor-pointer bg-gray-50 dark:bg-true-gray-800 text-gray-400 opacity-75
    border-t border-l border-r rounded-tr rounded-tl bc;
}
.tabs .tab.active {
  @apply text-blue-500 bg-bg opacity-100;
}

.CodeMirror {
  @apply px-3 py-2 h-auto bg-transparent;
}
</style>
