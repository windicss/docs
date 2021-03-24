<template>
  <a class="item" v-bind="linkProps">
    <span class="font-normal">{{ item.text }}</span>
  </a>
</template>

<script setup lang="ts">
import { defineProps, toRefs } from 'vue'
import type { DefaultTheme } from '../../config'
import { useNavLink } from '../../composables/navLink'

const props = defineProps<{
  item: DefaultTheme.NavItemWithLink
}>()

const propsRefs = toRefs(props)

const { props: linkProps } = useNavLink(propsRefs.item)
</script>

<style scoped lang="postcss">
.item {
  @apply
    block px-6 py-2 rounded-lg
    text-$c-text whitespace-nowrap text-0.95rem
    md:(px-4 py-2 text-sm);
}

.item.active {
  color: var(--c-brand);
}

.item:hover,
.item.active {
  @apply bg-blue-gray-100 dark:bg-dark-400 no-underline;
}

.item.external:hover {
  @apply bg-blue-gray-100 dark:bg-dark-400 border-transparent;
}
</style>
