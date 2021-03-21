import { defineComponent, h, nextTick, onMounted, ref, onUnmounted } from 'vue'
import { EditorState } from '@codemirror/state'
import { EditorView, ViewPlugin } from '@codemirror/view'
import { html } from '@codemirror/lang-html'
// import { css } from '@codemirror/lang-css'
import { javascript } from '@codemirror/lang-javascript'

import { StreamLanguage } from '@codemirror/stream-parser'
import { css } from '@codemirror/legacy-modes/mode/css'
import { basicSetup } from '../codemirror'

import { isDark } from '../composables/dark'

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

    async function initEditor() {
      const extensions = [
        basicSetup,
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
        extensions.push(StreamLanguage.define(css))

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
    })
    onUnmounted(() => {
      view?.destroy()
    })

    return () => h('div', {
      ref: root,
    })
  },
})
