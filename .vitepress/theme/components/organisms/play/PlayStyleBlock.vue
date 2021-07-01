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

const styleCode = computed({
  get: () => props.modelValue,
  set: v => emit('update:modelValue', v),
})
</script>

<template>
  <div class="block-bg relative">
    <div class="block-code">
      <ClientOnly>
        <Editor v-model="styleCode" class="h-full w-full" language="css" :processor="processor" />
      </ClientOnly>
    </div>
    <div class="block-title">
      <div class="flex w-full justify-between items-center">
        <span>Style</span>
        <!-- <PlayToolsDropdown /> -->
      </div>
    </div>
  </div>
</template>
