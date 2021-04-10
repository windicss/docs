
<script setup lang="ts">
import { defineProps } from 'vue'
import { emitExport } from '../../composables/useShare'

defineProps({
  open: Boolean,
})
</script>

<template>
  <div class="relative hidden md:block" @click.stop="$emit('toggle')">
    <NavBarIcon>
      <carbon:export />
    </NavBarIcon>
    <div v-if="open" class="dropdown-model">
      <span>Components</span>
      <div class="flex space-x-2">
        <NavBarIcon class="!text-2xl" @click="emitExport('vue')">
          <logos:vue />
        </NavBarIcon>
        <NavBarIcon class="!text-2xl" @click="emitExport('svelte')">
          <logos:svelte-icon />
        </NavBarIcon>
        <!-- TODO -->
        <!-- <NavBarIcon @click="emitExport('react')">
          <logos:react />
        </NavBarIcon> -->
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.dropdown-model {
  @apply
  grid gap-2 p-1.5 px-2
  absolute top-11 -right-2
  bg-white dark:bg-dark-700
  text-sm font-bold
  rounded-lg border border-blue-gray-200 dark:border-dark-300;
}
</style>
