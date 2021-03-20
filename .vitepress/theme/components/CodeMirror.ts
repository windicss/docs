import { defineComponent, h, nextTick, onMounted, ref, onUnmounted } from 'vue'
import { EditorState } from '@codemirror/state'
import { EditorView, ViewPlugin } from '@codemirror/view'
import { basicSetup } from '@codemirror/basic-setup'
import { html } from '@codemirror/lang-html'
import { css } from '@codemirror/lang-css'
import { javascript } from '@codemirror/lang-javascript'

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

    const myTheme = EditorView.theme({
      '&': {
        color: '#8ADDFF',
        backgroundColor: 'transparent',
      },
      '.cm-content': {
        caretColor: '#0e9',
      },
      '&.cm-focused .cm-cursor': {
        borderLeftColor: '#0e9',
      },
      '&.cm-focused .cm-selectionBackground, ::selection': {
        backgroundColor: '#004767',
      },
      '.cm-gutters': {
        'backgroundColor': 'transparent',
        'padding-left': '1rem',
        'padding-right': '1rem',
        'color': '#ddd',
        'border': 'none',
      },
      // ".cm-line": {
      //   color: '#727272'
      // },
      '.cm-line .ͼk': {
        color: '#4C7C40',
      },
      '.cm-line .ͼg': {
        color: '#3A95CF',
      },
      '.cm-line .ͼc': {
        color: '#D88E73',
      },
    }, { dark: true })

    async function initEditor() {
      const extensions = [
        basicSetup,
        myTheme,
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
