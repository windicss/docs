<script setup lang="ts">
import { defineProps, computed } from 'vue'
import { useRoute, useData } from 'vitepress'
import { joinUrl, isActive } from '@/utils'

import type { PropType } from 'vue'
import type { DefaultTheme } from '@/config'

const props = defineProps({
  item: {
    type: Object as PropType<Partial<DefaultTheme.SideBarItem>>,
    required: true,
  },
  header: {
    type: Boolean,
    default: false,
  },
  table: {
    type: Boolean,
    default: false,
  },
})

const route = useRoute()
const { site } = useData()

function resolveLink(base: string, path?: string): string | undefined {
  if (path === undefined)
    return path

  // keep relative hash to the same page
  if (path.startsWith('#'))
    return path

  return joinUrl(base, path)
}

const active = computed(() => isActive(route, props.item.link))
const link = resolveLink(site.value.base, props.item.link)

const style = computed(() => ([
  props.header
    ? 'font-bold py-2 transition duration-200'
    : props.table
      ? `inline-flex
      items-center
      justify-between py-2.2 px-3 w-full rounded-md font-medium text-sm text-gray-700
      dark:text-gray-400
      hover:(text-primary dark:text-primary bg-gray-50 dark:bg-dark-500)`
      : `relative
      inline-flex
      items-center
      justify-between
      pl-3 py-1
      transition
      duration-200
      border-l border-gray-100
      dark:border-gray-800
      text-sm text-gray-700
      dark:text-gray-400
      hover:(text-primary dark:text-primary)`,
  {
    'border-primary dark:border-primary text-primary dark:text-primary': active.value,
  },
]))

</script>

<template>
  <a v-if="link" :href="link" :class="style">
    {{ item.text }}
  </a>
  <h5 v-else :class="style">
    {{ item.text }}
  </h5>
</template>
