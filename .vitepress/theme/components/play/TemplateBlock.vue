<script setup lang="ts">
import { computed, defineProps, defineEmit, defineAsyncComponent } from 'vue'

const CodeMirror = defineAsyncComponent(() => import('../CodeMirror'))

const props = defineProps({
  modelValue: {
    type: String,
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
  <div class="block-border relative border-b">
    <div class="block-title">
      Template
    </div>
    <div class="block-code">
      <ClientOnly>
        <CodeMirror v-model="htmlCode" class="h-full w-full" language="html" />
      </ClientOnly>
    </div>
  </div>
</template>
