<template>
  <a class="icon-button" @click="toggle">
    <carbon-moon v-show="isDark" />
    <ion-ios-sunny v-show="!isDark" />
  </a>
</template>

<script setup lang='ts'>
import { useToggle } from '@vueuse/core'
import { isDark } from '../composables/dark'

const toggle = useToggle(isDark)
</script>
