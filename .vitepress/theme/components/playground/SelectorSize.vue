<script setup lang="ts">
import { ref, defineProps, defineEmit, watch, toRef } from 'vue'

const props = defineProps({
  modelValue: {
    default: '',
  },
  sizes: {
    default: () => ['sm', '', 'lg', 'xl', '2xl', '3xl'],
  },
})

const emit = defineEmit()

const size = ref(props.modelValue)
const sizes = toRef(props, 'sizes')

function set(str: string) {
  size.value = str
}
function has(str: string) {
  return size.value === str
}

watch(size, v => emit('update:modelValue', v))
watch(() => props.modelValue, v => size.value = v)
</script>

<template>
  <div class="selector flex flex-wrap gap-2">
    <div
      v-for="s of sizes"
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
