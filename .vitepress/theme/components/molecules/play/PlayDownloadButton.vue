
<script setup lang="ts">
import { defineProps } from 'vue'
import { emitExport } from '@/logics/useShare'

defineProps({
  open: Boolean,
})
</script>

<template>
  <div class="relative hidden md:block" @click.stop="$emit('toggle')">
    <IconButton title="Download component" alt="Download component">
      <carbon:download />
    </IconButton>
    <div v-if="open" class="dropdown-model">
      <span>Components</span>
      <div class="flex space-x-2">
        <IconButton class="!text-2xl" @click="emitExport('vue')">
          <logos:vue />
        </IconButton>
        <IconButton class="!text-2xl" @click="emitExport('svelte')">
          <logos:svelte-icon />
        </IconButton>
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
  rounded-lg border border-$windi-bc;
}
</style>
