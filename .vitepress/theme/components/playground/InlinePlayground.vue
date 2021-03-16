<script setup lang="ts">
import { shallowRef, ref, watchEffect, defineProps, onMounted, computed, toRef } from 'vue'
import { syncRef } from '@vueuse/core'
import { StyleSheet } from 'windicss/utils/style'
import Windi from 'windicss'
import JSON5 from 'json5'

import type { PropType } from 'vue'
import type CodeMirror from 'codemirror'
import type { Config } from 'windicss/types/interfaces'

import { isDark } from '../../composables/dark'
import { useCodeMirror } from '../../composables/useCodeMirror'
import { usePrismCSS } from '../../composables/usePrismCSS'

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
    default: false,
  },
  showTabs: {
    default: false,
  },
  showCSS: {
    default: true,
  },
  showCopy: {
    default: true,
  },
  showConfig: {
    default: false,
  },
  enableConfig: {
    default: false,
  },
  enablePreview: {
    default: true,
  },
  fixed: {
    default: '',
  },
  tab: {
    type: String as PropType<'code' | 'css' | 'config'>,
    default: 'code',
  },
  mode: {
    type: String as PropType<'interpret' | 'compile'>,
    default: 'interpret',
  },
  config: {
    type: Object as PropType<Config>,
    default: () => {},
  },
})

const config = ref(props.config)
const processor = computed(() => new Windi(config.value))

const frame = ref<HTMLIFrameElement | null>(null)
const textareaInput = ref<HTMLTextAreaElement | null>(null)
const textareaConfig = ref<HTMLTextAreaElement | null>(null)
const input = ref(props.input)
const mode = ref(props.mode)

syncRef(toRef(props, 'input'), input)

let acceped: string[] = []

const decorations: CodeMirror.TextMarker<CodeMirror.MarkerRange>[] = []
const preflightStyles = processor.value.preflight('<div <p', true, true, true)
const fixedStyles = processor.value.interpret(props.fixed).styleSheet

const style = shallowRef<StyleSheet>(new StyleSheet())
const { highlightedCSS, copy, copied } = usePrismCSS(() => style.value.build().trim())

function updateIframe() {
  if (!frame.value?.contentWindow)
    return

  const fullStyle = new StyleSheet()
    .extend(preflightStyles)
    .extend(style.value)
    .sort()

  frame.value.contentWindow.document.querySelector('html')?.classList.toggle('dark', isDark.value)
  frame.value.contentWindow.postMessage(
    JSON.stringify({
      style: fullStyle.build(),
      fixed: fixedStyles.build(),
      classes: `${[...acceped, props.fixed].filter(Boolean).join(' ')}`.trim(),
    }),
    location.origin,
  )
  setTimeout(resizeIframe, 100)
}

function resizeIframe() {
  if (!frame.value?.contentWindow)
    return

  frame.value.style.height = '0'
  frame.value.style.height = `${frame.value.contentWindow.document.documentElement.scrollHeight + 30}px`
}

function mark(start: number, end: number, matched: boolean, cm: CodeMirror.Editor) {
  decorations.push(cm.markText(
    cm.posFromIndex(start),
    cm.posFromIndex(end),
    { className: [matched ? 'text-green-600' : 'text-orange-600'].join(' ') },
  ))
}

function toggleMode() {
  mode.value = mode.value === 'compile' ? 'interpret' : 'compile'
}

function interpret(cm: CodeMirror.Editor) {
  const value = input.value

  // @ts-expect-error
  const { styleSheet, success, ignored, className } = mode.value === 'interpret'
    ? processor.value.interpret(value.replace(/\n/g, ' ')) || {}
    : processor.value.compile(value.replace(/\n/g, ' ')) || {}

  if (mode.value === 'interpret')
    acceped = success || []
  else
    acceped = [className]

  // clear previous
  decorations.forEach(i => i.clear())

  // hightlight for classes
  let start = 0
  value.split(/\s/g).forEach((i) => {
    const end = start + i.length
    if (success.includes(i))
      mark(start, end, true, cm)
    else if (ignored.includes(i))
      mark(start, end, false, cm)
    start = end + 1
  })

  // hightlight for groups
  Array.from(value.matchAll(/([\w:]+):\((.*?)\)/g))
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

const configString = computed<string>({
  get() {
    return JSON5.stringify(config.value, { space: 2, quote: '\'' }) || ''
  },
  set(v) {
    config.value = JSON5.parse(v)
  },
})

watchEffect(updateIframe)

onMounted(async() => {
  if (typeof window === 'undefined')
    return

  const cm1 = await useCodeMirror(textareaInput, input, { mode: 'text', scrollbarStyle: 'null', lineWrapping: true })

  if (textareaConfig.value)
    await useCodeMirror(textareaConfig, configString, { mode: 'javascript' })

  watchEffect(() => interpret(cm1))
})
</script>

<template>
  <div class="inline-playground">
    <div v-if="showTabs" class="flex tabs mt-4">
      <!-- <div class="tab" :class="{active: tab === 'code'}" @click="tab = 'code'">
      <carbon:code class="inline-block" />
    </div> -->
      <div class="flex-auto" />
      <div
        class="tab"
        title="Toggle CSS"
        :class="{active: showCSS}"
        @click="showCSS = !showCSS"
      >
        <uil:css3-simple class="inline-block" />
      </div>
      <div
        v-if="enableConfig"
        class="tab"
        title="Toggle Configurations"
        :class="{active: showConfig}"
        @click="showConfig = !showConfig"
      >
        <carbon:settings-adjust class="inline-block" />
      </div>
      <div
        v-if="enablePreview"
        class="tab"
        title="Toggle Preview"
        :class="{active: showPreview}"
        @click="showPreview = !showPreview"
      >
        <carbon:camera class="inline-block" />
      </div>
    </div>
    <div class="border bc rounded relative">
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
          <div v-show="showConfig" class="border-t bc">
            <div class="ml-1 p-2 pb-0 text-sm opacity-50 flex">
              <span>Config</span>
            </div>
            <div class="max-h-20em overflow-y-auto">
              <textarea
                ref="textareaConfig"
                spellcheck="false"
                autocomplete="off"
                autocapitalize="false"
                class="bg-transparent outline-none"
              />
            </div>
          </div>
          <div
            v-show="showCSS"
            class="text-sm border-t bc"
          >
            <div class="ml-1 p-2 text-sm opacity-50 flex">
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
            <!-- eslint-disable-next-line vue/no-v-html -->
            <pre class="px-3 pb-2 overflow-auto max-h-30em"><code v-html="highlightedCSS" /></pre>
          </div>
        </div>
        <div
          v-if="showPreview"
          class="border-l bc"
        >
          <iframe
            ref="frame"
            src="/__playground.html"
            class="overflow-visiable outline-none w-10em h-0 m-auto"
            frameborder="0"
            scrolling="no"
            @load="updateIframe()"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss">
.inline-playground .tabs .tab {
  @apply px-3 py-1 mx-1 cursor-pointer bg-gray-50 dark:bg-true-gray-800 text-gray-400 opacity-75
    border-t border-l border-r rounded-tr rounded-tl bc;
}
.inline-playground .tabs .tab.active {
  @apply text-blue-500 bg-bg opacity-100;
}
.inline-playground .CodeMirror {
  @apply px-3 py-2 h-auto bg-transparent font-mono text-sm;
}
</style>
