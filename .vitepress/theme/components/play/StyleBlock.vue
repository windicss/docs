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

const styleCode = computed({
  get: () => props.modelValue,
  set: v => emit('update:modelValue', v),
})
</script>

<template>
  <div class="block-border relative">
    <div class="block-title">
      Style
    </div>
    <div class="block-code">
      <ClientOnly>
        <CodeMirror v-model="styleCode" class="h-full w-full" language="css" />
      </ClientOnly>
    </div>
  </div>
</template>
