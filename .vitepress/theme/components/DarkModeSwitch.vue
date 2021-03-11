<template>
  <a class="icon-button" @click="toggle">
    <carbon-moon v-show="isDark" />
    <carbon-sun v-show="!isDark" />
  </a>
</template>

<script setup lang='ts'>
import { useToggle, useDark } from '@vueuse/core'

const isDark = useDark()
const toggle = useToggle(isDark)
</script>
