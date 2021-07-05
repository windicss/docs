<script setup lang="ts">
import { useRepo } from '@/logics/repo'

defineEmits(['close'])

const repo = useRepo()

</script>

<template>
  <div class="h-$header-height bg-light-700 dark:bg-dark-400 flex lg:hidden items-center justify-between px-2">
    <IconButton @click="$emit('close')">
      <carbon:arrow-left />
    </IconButton>
    <div class="flex items-center">
      <IconButton :href="repo?.link">
        <carbon-logo-github />
      </IconButton>
      <ToggleDark />
    </div>
  </div>
</template>
