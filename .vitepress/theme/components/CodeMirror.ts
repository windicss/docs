import { defineComponent, h, nextTick, onMounted, ref, onUnmounted, PropType } from 'vue'
import { EditorState, Compartment } from '@codemirror/state'
import { EditorView, ViewPlugin, keymap } from '@codemirror/view'
import { defaultTabBinding } from '@codemirror/commands'
import { StreamLanguage } from '@codemirror/stream-parser'
import { javascript } from '@codemirror/lang-javascript'
import { html } from '@codemirror/lang-html'
import { css } from '@codemirror/legacy-modes/mode/css'
import { hoverTooltip } from '@codemirror/tooltip'
import hljs from 'highlight.js'
import type Processor from 'windicss'
import { basicSetup } from '../codemirror'
import { isDark } from '../composables/dark'

const tabSize = new Compartment()

const hoverPreview = hoverTooltip((view, pos, side) => {
  const { from, to, text } = view.state.doc.lineAt(pos)
  let start = pos; let end = pos
  while (start > from && /[^\s"'`]/.test(text[start - from - 1])) start--
  while (end < to && /[^\s"'`]/.test(text[end - from])) end++
  if ((start === pos && side < 0) || (end === pos && side > 0)) return null
  const word = text.slice(start - from, end - from)
  // TODO
  // const result = processor.interpret(word)
  // if (result.ignored.length > 0) return null
  return {
    pos: start,
    end,
    above: true,
    create(view) {
      const dom = document.createElement('div')
      dom.innerHTML = `<code><pre>${hljs.highlightAuto('.test {\n  color: red;\n}').value}</pre></code>`
      // dom.innerHTML = `<code><pre>${hljs.highlightAuto(result.styleSheet.build()).value}</pre></code>`
      return { dom }
    },
  }
})

export default defineComponent({
  name: 'CodeMirror',
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
    // eslint-disable-next-line vue/require-default-prop
    processor: Object as PropType<Processor>,
  },
  emits: ['update:modelValue', 'editorDidMount'],
  setup(props, { emit }) {
    const root = ref<HTMLElement | null>(null)
    let view: EditorView | null = null
    let state: EditorState | null = null

    async function initEditor() {
      const extensions = [
        basicSetup,
        hoverPreview,
        keymap.of([defaultTabBinding]),
        tabSize.of(EditorState.tabSize.of(2)),
        EditorView.theme({
          '.cm-tooltip': {
            padding: '5px 15px',
            borderRadius: '5px',
            borderColor: 'var(--c-scrollbar)',
            background: 'var(--c-bg)',
          },
        }),
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
