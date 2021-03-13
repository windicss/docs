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
  <div class="selector">
    <div
      v-for="s of sizes"
      :key="s"
      class="item"
      :class="{ active: has(s) }"
      @click="set(s)"
    >
      {{ s || 'Normal' }}
    </div>
  </div>
</template>

<style scoped>
.item {
  @apply px-2 py-0.5 bg-gray-100 inline-block m-1 rounded text-sm cursor-pointer select-none;
}
.item.active {
  @apply bg-light-blue-400 bg-opacity-10 text-light-blue-600;
}
</style>
