<script setup lang="ts">
import { layout } from '@/logics/playgroundLayout'

defineProps({
  open: Boolean,
})
</script>

<template>
  <div class="relative hidden md:block" @click.stop="$emit('toggle')">
    <IconButton title="Switch layout" alt="Switch layout">
      <carbon:open-panel-right />
    </IconButton>
    <div v-if="open" class="dropdown-model">
      <IconButton v-if="layout !== 'left'" @click="layout = 'left'">
        <carbon:open-panel-left />
      </IconButton>
      <IconButton v-if="layout !== 'bottom'" @click="layout = 'bottom'">
        <carbon:open-panel-bottom />
      </IconButton>
      <IconButton v-if="layout !== 'right'" @click="layout = 'right'">
        <carbon:open-panel-right />
      </IconButton>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.dropdown-model {
  @apply
  grid gap-2 p-1.5
  absolute top-11 -left-2
  bg-white dark:bg-dark-700
  rounded-lg border border-$windi-bc;
}
</style>
