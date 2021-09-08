<script setup lang="ts">
import { shallowRef, ref, watchEffect, onMounted, computed, toRef, reactive } from 'vue'
import { syncRef } from '@vueuse/core'
import { StyleSheet } from 'windicss/utils/style'
import Windi from 'windicss'
import JSON5 from 'json5'

import { useCodeMirror } from '@/logics/useCodeMirror'
import { usePrismCSS } from '@/logics/usePrismCSS'
import { isDark } from '@/logics/dark'

import type CodeMirror from 'codemirror'
import type { Config } from 'windicss/types/interfaces'

const props = withDefaults(defineProps<{
  input?: string
  showPreview?: boolean
  showMode?: boolean
  showTabs?: boolean
  showCSS?: boolean
  showCopy?: boolean
  showConfig?: boolean
  enableConfig?: boolean
  enablePreview?: boolean
  nested?: boolean
  fixed?: string
  appended?: string
  html?: string
  tab?: 'code' | 'css' | 'config'
  mode?: 'interpret' | 'compile'
  config?: Config
}>(), {
  input: 'px-1.2em py-2 bg-hex-0ea5e9 text-white rounded\nhover:\(shadow bg-opacity-85)',
  showPreview: true,
  showMode: false,
  showTabs: false,
  showCSS: true,
  showCopy: true,
  showConfig: false,
  enableConfig: false,
  enablePreview: true,
  nested: false,
  fixed: '',
  appended: '',
  tab: 'code',
  mode: 'interpret',
})

const config = ref(props.config || {})
const processor = computed(() => new Windi(config.value))

const textareaInput = ref<HTMLTextAreaElement | null>(null)
const textareaConfig = ref<HTMLTextAreaElement | null>(null)
const input = ref(props.input)
const mode = ref(props.mode)

syncRef(toRef(props, 'input'), input)

const acceped = ref<string[]>([])

const decorations: CodeMirror.TextMarker<CodeMirror.MarkerRange>[] = []
const preflightStyles = processor.value.preflight('<div <p', true, true, true)
const fixedStyles = processor.value.interpret(`${props.fixed} ${props.appended}`).styleSheet

const style = shallowRef<StyleSheet>(new StyleSheet())
const { highlightedCSS, copy, copied } = usePrismCSS(() => style.value.build().trim())

const html = computed(() => {
  if (props.html && !props.html?.startsWith('<'))
    return `<div>${props.html}</div>`
  else
    return props.html
})

const iframeData = reactive({
  css: computed(() => new StyleSheet()
    .extend(preflightStyles)
    .extend(style.value)
    .sort()
    .build(),
  ),
  fixedCss: computed(() => fixedStyles.build()),
  classes: computed(() => `${[...(props.nested ? [] : acceped.value), props.fixed].filter(Boolean).join(' ')}`.trim()),
  html: computed(() => props.nested ? `${html.value}`.replace(/\{class\}/g, acceped.value.join(' ')) : html.value),
})

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
    acceped.value = success || []
  else
    acceped.value = [className]

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
      } else {
        // group failed
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
  <div class="inline-playground mt-4">
    <div v-if="showTabs" class="flex tabs">
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
    <div class="border border-$windi-bc rounded relative">
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
          <div v-show="showConfig" class="border-t border-$windi-bc">
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
            class="text-sm border-t border-$windi-bc"
          >
            <div class="ml-1 p-2 text-sm opacity-50 flex">
              <span>CSS</span>
              <div class="flex-auto" />
              <div v-if="showMode" class="icon-button" title="Toggle Mode" @click="toggleMode">
                <span class="text-sm mr-1.5 capitalize">{{ mode }}</span>
                <carbon:circle-packing v-if="mode === 'compile'" />
                <carbon:chart-bubble-packed v-else />
              </div>
              <div v-if="showCopy" class="icon-button ml-3" :class="{ active: copied }" title="Copy" @click="copy()">
                <carbon:checkmark-outline v-if="copied" class="text-green-500" />
                <carbon:copy v-else />
              </div>
            </div>
            <!-- eslint-disable-next-line vue/no-v-html -->
            <pre class="language-css !bg-transparent max-h-30em !px-4 !py-4" v-html="highlightedCSS" />
          </div>
        </div>
        <div
          v-if="showPreview"
          class="border-l border-$windi-bc w-10em p-3 min-h-40"
        >
          <preview-box v-bind="iframeData" :dark="isDark" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss">
.inline-playground .tabs .tab {
  @apply px-3 py-1 mx-1 cursor-pointer bg-gray-50 dark:bg-true-gray-800 text-gray-400 opacity-75
    border-t border-l border-r rounded-tr rounded-tl border-$windi-bc;
}
.inline-playground .tabs .tab.active {
  @apply text-blue-500 bg-$windi-bg opacity-100;
}
.inline-playground .CodeMirror {
  @apply px-3 py-2 h-auto bg-transparent font-mono text-sm;
}
.icon-button {
  @apply
    flex items-center text-1.05rem border-0
    focus:outline-none text-$c-text
    opacity-80 cursor-pointer select-none
    hover:opacity-100;
  &.active {
    @apply opacity-100;
  }
}
</style>
