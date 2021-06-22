<script setup lang="ts">
import { defineProps, toRefs } from 'vue'
import type { DefaultTheme } from '@/config'
import { useNavLink } from '@/logics/navLink'
const props = defineProps<{
  item: DefaultTheme.NavItemWithLink
}>()
const propsRefs = toRefs(props)
const { props: linkProps } = useNavLink(propsRefs.item)
</script>

<template>
  <a class="p-2 inline-flex items-center font-medium" v-bind="linkProps">
    {{ item.text }}
  </a>
</template>
