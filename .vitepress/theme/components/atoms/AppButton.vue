<script setup lang="ts">
import { computed, defineProps } from 'vue'
import type { PropType } from 'vue'

const props = defineProps({
  href: {
    type: String,
    default: '',
  },
  outline: {
    type: Boolean,
    default: false,
  },
  inline: {
    type: Boolean,
    default: false,
  },
  size: String as PropType<'sm' | 'lg'>,
})

const linkClass = computed(() => ([
  `
  inline-flex
  items-center
  justify-center
  px-3
  py-2
  hover:bg-primary-600
  ring-primary focus:ring-3 ring-opacity-50
  border border-transparent
  text-base
  font-medium
  rounded-md
  shadow-sm
  text-white
  bg-primary
  `, {
    'bg-transparent border border-primary text-primary hover:text-gray-100': props.outline,
    'text-sm underline': props.inline,
    'text-sm px-2.5 py-2': props.size === 'sm',
    'text-base px-4 py-3 border-2': props.size === 'lg',
  },
]))

</script>

<template>
  <a
    :href="href"
    :class="linkClass"
  >
    <div v-if="$slots.icon" class="inline-block mr-1">
      <slot name="icon" />
    </div>
    <slot />
  </a>
</template>

<style>
.btn {
  display: inline-flex;

}
</style>
