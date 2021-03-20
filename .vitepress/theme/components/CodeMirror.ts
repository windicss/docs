import { defineComponent, h, nextTick, onMounted, ref, onUnmounted } from 'vue'
import { EditorState } from '@codemirror/state'
import { EditorView, ViewPlugin } from '@codemirror/view'
import { basicSetup } from '@codemirror/basic-setup'
import { html } from '@codemirror/lang-html'
import { css } from '@codemirror/lang-css'
import { javascript } from '@codemirror/lang-javascript'
import { oneDark } from '@codemirror/theme-one-dark'

import { isDark } from '../composables/dark'

// const isClient = typeof window !== 'undefined'

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
    let view: EditorView | null = null
    let state: EditorState | null = null

    // auto adjust content height
    const resizeObserver = new ResizeObserver((entries) => {
      view?.dispatch()
    })

    async function initEditor() {
      const extensions = [
        basicSetup,
        oneDark,
        ViewPlugin.define((view) => {
          return {
            update(update) {
              if (update.docChanged) {
                const value = view.state.doc.toString()
                if (props.modelValue !== value)
                  emit('update:modelValue', value)
              }
            },
          }
        }),
      ]
      if (props.language === 'html')
        extensions.push(html())

      if (props.language === 'css')
        extensions.push(css())

      if (props.language === 'js')
        extensions.push(javascript())

      state = EditorState.create({
        doc: props.modelValue,
        extensions,
      })

      view = new EditorView({
        state,
        parent: root.value!,
      })
    }
    onMounted(async() => {
      await nextTick(async() => {
        await initEditor()
      })
      resizeObserver.observe(root.value!)
    })
    onUnmounted(() => {
      view?.destroy()
    })

    // watch(isDark, (isDark) => {
    //   monaco.editor.setTheme(isDark ? 'vs-dark' : 'vs')
    // })

    // watch(options, (v) => {
    //   editor?.updateOptions(v)
    // })

    return () => h('div', {
      ref: root,
    })
  },
})
