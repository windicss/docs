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
  @apply block px-6 py-2 text-$c-text whitespace-nowrap text-0.95rem
  md:(px-4 py-2 text-sm);
}

@screen lg {
  .item.active .arrow {
    opacity: 1;
  }
}

.item.active {
  color: var(--c-brand);
}

.item:hover,
.item.active {
  text-decoration: none;
  @apply bg-blue-gray-100 dark:bg-dark-300;
}

.item.external:hover {
  border-bottom-color: transparent;
  @apply bg-blue-gray-100 dark:bg-dark-300;
}

@screen md {
  .arrow {
    display: inline-block;
    margin-right: 8px;
    border-top: 6px solid #ccc;
    border-right: 4px solid transparent;
    border-bottom: 0;
    border-left: 4px solid transparent;
    vertical-align: middle;
    opacity: 0;
    transform: translateY(-2px) rotate(-90deg);
  }
}
</style>
