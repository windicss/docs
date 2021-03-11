<script setup lang="ts">
import { ref, computed } from 'vue'
import Windi from 'windicss'

const processor = new Windi()

const source = ref('p-1 text-blue-400')

const style = computed(() => {
  const { styleSheet } = processor.interpret(source.value)
  return styleSheet.build()
})
</script>

<template>
  <div class="my-4 p-2 border border-gray-300 rounded-full">
    <textarea
      v-model="source"
      class="w-full border border-gray-300 resize-y p-2 rounded"
    />
    <pre
      class="text-sm bg-gray-50 p-4 rounded"
    >{{ style }}</pre>
  </div>
</template>
