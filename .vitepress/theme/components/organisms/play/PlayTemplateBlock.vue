<script setup lang="ts">
import { computed, defineProps, defineEmit } from 'vue'
import { Editor } from '@windicss/shared-components'
import type { PropType } from 'vue'
import type Processor from 'windicss'

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
  <div class="block-bg relative">
    <div class="block-code">
      <ClientOnly>
        <Editor v-model="htmlCode" class="h-full w-full pb-2" language="html" :processor="processor" />
      </ClientOnly>
    </div>
    <div class="block-title">
      <div class="w-full flex justify-between items-center">
        <span>Template</span>
        <!-- <PlayToolsDropdown /> -->
      </div>
    </div>
  </div>
</template>
