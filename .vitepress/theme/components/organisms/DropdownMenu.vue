<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import { useRepo } from '@/logics/repo'
const { theme } = useData()
const repo = useRepo()
const show = computed(() => theme.value.value || repo.value)
</script>

<template>
  <nav v-if="show" class="inline-flex space-x-2 px-3">
    <template v-if="theme.nav">
      <div v-for="item in theme.nav" :key="item.text" class="item">
        <DropdownLink v-if="item.items" :item="item" />
        <NavLink v-else :item="item" />
      </div>
    </template>
  </nav>
</template>
