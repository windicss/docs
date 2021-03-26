<script setup lang="ts">
import { useRepo } from '../../composables/repo'

const repo = useRepo()
</script>

<template>
  <div class="flex items-center border-b-0 ml-3 space-x-4 ml-4">
    <NavBarIcon
      v-if="repo"
      aria-label="Github"
      tag="a"
      :href="repo.link"
      rel="noreferrer"
      target="_blank"
      class="!hidden !md:block"
    >
      <carbon-logo-github />
    </NavBarIcon>
    <DarkModeSwitch />
    <slot />
    <slot name="search" />
  </div>
</template>
