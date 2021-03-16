<script setup lang="ts">
import { ref, defineProps, defineEmit, watch, toRef } from 'vue'

const props = defineProps({
  modelValue: {
    default: '',
  },
  variants: {
    default: () => ['sm', '', 'lg', 'xl', '2xl', '3xl'],
  },
})

const emit = defineEmit()

const variant = ref(props.modelValue)
const variants = toRef(props, 'variants')

function set(str: string) {
  variant.value = str
}
function has(str: string) {
  return variant.value === str
}

watch(variant, v => emit('update:modelValue', v))
watch(() => props.modelValue, v => variant.value = v)
</script>

<template>
  <div class="selector flex flex-wrap gap-2">
    <div
      v-for="s of variants"
      :key="s"
      class="item"
      :class="{ active: has(s), default: !s }"
      @click="set(s)"
    >
      {{ s || 'default' }}
    </div>
  </div>
</template>

<style scoped>
.selector {
  height: max-content;
}
.item {
  height: max-content;
  @apply px-2 py-0.5 inline-block rounded font-mono
         border bc border-opacity-50 dark:border-opacity-50
         text-sm cursor-pointer select-none;
}
.item.active {
  @apply border-light-blue-500 text-light-blue-500;
}
</style>
