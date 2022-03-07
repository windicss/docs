<script setup lang="ts">
import { computed } from 'vue'
import config from 'windicss/defaultConfig'

const props = withDefaults(defineProps<{
  color: string
}>(), {
  color: '',
})

function camelize(str: string) {
  const arr = str.split('-')
  const capital = arr.map((item, index) => index ? item.charAt(0).toUpperCase() + item.slice(1).toLowerCase() : item.toLowerCase())
  // ^-- change here.
  const capitalString = capital.join('')

  return capitalString
}

const level = computed(() => props.color.split(/-/).slice(-1)[0])
const color = computed(() => props.color.split(/-/).slice(1, -1).join('-'))
// @ts-ignore
const hex = computed<string>(() => config.theme.colors[camelize(color.value)]?.[+level.value])
</script>

<template>
  <div>
    <div class="w-14 h-14 rounded" :class="props.color" />
    <div class="font-bold text-sm">
      {{ level }}
    </div>
    <div class="opacity-50 font-mono text-xs -mt-1">
      {{ hex }}
    </div>
  </div>
</template>
