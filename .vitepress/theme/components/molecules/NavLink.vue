<script setup lang="ts">
import { defineProps, toRefs } from 'vue'
import type { DefaultTheme } from '@/config'
import { useNavLink } from '@/logics/navLink'
const props = defineProps<{
  item: DefaultTheme.NavItemWithLink
  dropdown?: boolean
}>()
const propsRefs = toRefs(props)
const { props: linkProps } = useNavLink(propsRefs.item, props.dropdown)
</script>

<template>
  <a
    class="p-2 inline-flex items-center font-medium transition duration-50"
    :class="{ 'whitespace-nowrap font-base hover:(text-primary bg-$windi-hover-bg) rounded w-full text-sm': dropdown }"
    v-bind="linkProps"
  >
    {{ item.text }}
  </a>
</template>
