import { defineComponent, h, nextTick, onMounted, ref, onUnmounted } from 'vue'
import { EditorState } from '@codemirror/state'
import { EditorView, ViewPlugin } from '@codemirror/view'
import { StreamLanguage } from '@codemirror/stream-parser'
import { javascript } from '@codemirror/lang-javascript'
import { html } from '@codemirror/lang-html'
import { css } from '@codemirror/legacy-modes/mode/css'
import type Processor from 'windicss'
import type { PropType } from 'vue'
import { basicSetup, hoverPreview } from '../plugin'

export default defineComponent({
  name: 'Editor',
  props: {
    modelValue: {
      type: String,
      required: true,
    },
    language: {
      type: String,
      default: 'html',
    },
    // eslint-disable-next-line vue/require-default-prop
    options: Object,
    // eslint-disable-next-line vue/require-default-prop
    processor: Object as PropType<Processor>,
  },
  emits: ['update:modelValue', 'editorDidMount'],
  setup(props, { emit }) {
    const root = ref<HTMLElement | null>(null)
    let view: EditorView | null = null
    let state: EditorState | null = null

    const reactivePlugin = ViewPlugin.define((view) => {
      return {
        update(update) {
          if (update.docChanged) {
            const value = view.state.doc.toString()
            emit('update:modelValue', value)
          }
        },
      }
    })

    async function initEditor() {
      const extensions = [
        basicSetup,
        reactivePlugin,
      ]
      if (props.processor)
        extensions.push(hoverPreview(props.processor))

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
