import { ref } from 'vue'

export const layout = ref({
  template: true,
  style: true,
  preview: true,
})

export function toggleLayout(v: 'template' | 'style' | 'preview') {
  const isLastOne = Object.values(layout.value).filter(v => v).length === 1
  if (isLastOne && !layout.value[v] === false) return
  layout.value[v] = !layout.value[v]
}
