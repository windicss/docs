<script setup lang="ts">
import { computed } from 'vue'
import { useData, useRoute } from 'vitepress'

import { isActive, joinUrl } from '@/utils'

import type { DefaultTheme } from 'vitepress'
import type { PropType } from 'vue'

const props = defineProps({
  item: {
    type: Object as PropType<DefaultTheme.SideBarItem>,
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
// @ts-ignore
const isChildActive = props.item.children && props.item.children.map(child => isActive(route, child.link)).some(Boolean)

const style = computed(() => ([
  'transition duration-100',
  props.header
    ? 'font-bold py-2'
    : props.table
      ? `inline-flex
      items-center
      justify-between py-2 px-3 w-full rounded-md
      text-sm text-gray-700
      dark:text-gray-400
      hover:(text-primary dark:text-primary bg-$windi-hover-bg)`
      : `relative
      inline-flex
      items-center
      justify-between
      pl-3 py-1
      border-l border-gray-100
      dark:border-dark-400
      text-sm text-gray-700
      dark:text-gray-400
      hover:(text-primary dark:text-primary)`,
  {
    'active !border-primary dark:border-primary !text-primary dark:text-primary': active.value,
  },
  { 'parent-active': isChildActive },
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
