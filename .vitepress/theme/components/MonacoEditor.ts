import { defineComponent, h, nextTick, onMounted, ref, watch, onUnmounted } from 'vue'
import * as monaco from 'monaco-editor'
// Emmet Plugin
import { emmetHTML, emmetCSS } from 'emmet-monaco-es'

// Import language
import 'monaco-editor/esm/vs/basic-languages/scss/scss.contribution.js'

// Import language service workers

// @ts-ignore
import EditorWorker from 'monaco-editor/esm/vs/editor/editor.worker.js?worker'
// @ts-ignore
import CssWorker from 'monaco-editor/esm/vs/language/css/css.worker.js?worker'
// @ts-ignore
import HTMLWorker from 'monaco-editor/esm/vs/language/html/html.worker.js?worker'
// @ts-ignore
import JsonWorker from 'monaco-editor/esm/vs/language/json/json.worker.js?worker'
// @ts-ignore
import TSWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker.js?worker'

import { isDark } from '../composables/dark'

// @ts-ignore
window.MonacoEnvironment = {
  // @ts-ignore
  getWorker(workerId, label) {
    if (label === 'json')
      return new JsonWorker()

    if (label === 'css' || label === 'scss' || label === 'less')
      return new CssWorker()

    if (label === 'html' || label === 'handlebars' || label === 'razor')
      return new HTMLWorker()

    if (label === 'typescript' || label === 'javascript')
      return new TSWorker()

    return new EditorWorker()
  },
}

export default defineComponent({
  name: 'MonacoEditor',
  props: {
    modelValue: {
      type: String,
      required: true,
    },
    theme: {
      type: String,
      default: isDark.value ? 'vs-dark' : 'vs',
    },
    language: {
      type: String,
      default: 'html',
    },
    // eslint-disable-next-line vue/require-default-prop
    options: Object,
  },
  emits: ['update:modelValue', 'editorDidMount'],
  setup(props, { emit }) {
    const root = ref<HTMLElement | null>(null)
    let editor: monaco.editor.IStandaloneCodeEditor | null = null

    // auto adjust content height
    const resizeObserver = new ResizeObserver((entries) => {
      editor?.layout()
    })

    const options = ref<monaco.editor.IStandaloneEditorConstructionOptions>(Object.assign(
      {
        value: props.modelValue,
        theme: props.theme,
        language: props.language,
      },
      props.options,
    ))

    function initEditor() {
      editor = monaco.editor.create(root.value!, options.value)
      editor.onDidChangeModelContent(() => {
        const value = editor!.getValue()
        console.log('changed')
        if (props.modelValue !== value)
          emit('update:modelValue', value)

        emit('editorDidMount', editor)
      })

      // Add emmet to editor
      const lang = options.value.language
      if (lang === 'html')
        emmetHTML(monaco)
      if (lang === 'css' || lang === 'scss' || lang === 'less')
        emmetCSS(monaco)
    }
    onMounted(() => {
      nextTick(() => {
        initEditor()
      })
      resizeObserver.observe(root.value!)
    })
    onUnmounted(() => {
      editor?.dispose()
    })

    watch(isDark, (isDark) => {
      monaco.editor.setTheme(isDark ? 'vs-dark' : 'vs')
    })

    watch(options, (v) => {
      editor?.updateOptions(v)
    })

    return () => h('div', {
      ref: root,
    })
  },
})
