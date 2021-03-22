<script setup lang="ts">
import { computed, defineProps, defineEmit, defineAsyncComponent } from 'vue'
import type { PropType } from 'vue'
import type Processor from 'windicss'

const CodeMirror = defineAsyncComponent(() => import('../CodeMirror'))

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  processor: {
    type: Object as PropType<Processor>,
    required: true,
  },
})

const emit = defineEmit(['update:modelValue'])

const htmlCode = computed({
  get: () => props.modelValue,
  set: v => emit('update:modelValue', v),
})
</script>

<template>
  <div class="block-bg ml-4 mt-4 mb-2 relative">
    <div class="block-title">
      <div class="w-full flex justify-between items-center">
        <span>Template</span>
        <ToolsDropdown />
      </div>
    </div>
    <div class="block-code">
      <ClientOnly>
        <CodeMirror v-model="htmlCode" class="h-full w-full pb-2" language="html" :processor="processor" />
      </ClientOnly>
    </div>
  </div>
</template>
