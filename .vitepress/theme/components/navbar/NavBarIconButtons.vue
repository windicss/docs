<script setup lang="ts">
import { useRepo } from '../../composables/repo'

const repo = useRepo()
</script>

<template>
  <div class="flex items-center border-b-0 ml-3 space-x-4 mx-4">
    <slot />
    <NavBarIcon v-if="repo" tag="a" :href="repo.link" target="_blank">
      <carbon-logo-github />
    </NavBarIcon>
    <DarkModeSwitch />
  </div>
</template>
