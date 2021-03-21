<template>
  <NavBarIcon aria-label="Toggle dark mode" @click="toggle">
    <bx:bx-moon v-show="isDark" />
    <ion-ios-sunny v-show="!isDark" />
  </NavBarIcon>
</template>

<script setup lang='ts'>
import { useToggle } from '@vueuse/core'
import { isDark } from '../../composables/dark'

const toggle = useToggle(isDark)
</script>
