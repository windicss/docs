<script setup lang="ts">
// @ts-ignore
import { openSideBar } from '@/logics/sideBar'
</script>

<template>
  <IconButton @click="openSideBar = true">
    <heroicons-outline:menu-alt-2 />
  </IconButton>
</template>
