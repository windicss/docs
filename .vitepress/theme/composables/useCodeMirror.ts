import { Ref, watch, WritableComputedRef } from 'vue'
import type CodeMirror from 'codemirror'
import 'codemirror/lib/codemirror.css'

export async function useCodeMirror(
  textarea: Ref<HTMLTextAreaElement | null>,
  input: Ref<string> | WritableComputedRef<string>,
  options: CodeMirror.EditorConfiguration = {},
) {
  const CodeMirror = await import('codemirror')

  // @ts-expect-error untyped
  await import('codemirror/mode/javascript/javascript')
  // @ts-expect-error untyped
  await import('codemirror/mode/css/css')

  const cm = CodeMirror.fromTextArea(textarea.value!, options)

  cm.on('change', () => input.value = cm.getValue())

  watch(
    input,
    (v) => {
      if (v !== cm.getValue())
        cm.replaceRange(v, cm.posFromIndex(0), cm.posFromIndex(Infinity))
    },
    { immediate: true },
  )

  return cm
}
