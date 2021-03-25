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

const styleCode = computed({
  get: () => props.modelValue,
  set: v => emit('update:modelValue', v),
})
</script>

<template>
  <div class="block-bg relative">
    <div class="block-code">
      <ClientOnly>
        <CodeMirror v-model="styleCode" class="h-full w-full pb-2" language="css" :processor="processor" />
      </ClientOnly>
    </div>
    <div class="block-title">
      <div class="w-full flex justify-between items-center">
        <span>Style</span>
        <ToolsDropdown />
      </div>
    </div>
  </div>
</template>
