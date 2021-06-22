<script setup lang="ts">
import { isDark, toggleDark } from '@/logics/dark'
</script>

<template>
  <IconButton @click="toggleDark">
    <bx:bx-moon v-show="isDark" />
    <ion-ios-sunny v-show="!isDark" />
  </IconButton>
</template>
