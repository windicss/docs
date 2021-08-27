<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import { useRepo } from '@/logics/repo'
const { theme } = useData()
const repo = useRepo()
const show = computed(() => theme.value.value || repo.value)
</script>

<template>
  <nav v-if="show" class="flex lg:hidden flex-col py-3">
    <template v-if="theme.nav">
      <div v-for="item in theme.nav" :key="item.text">
        <TreeLink v-if="item.items" :item="item" />
        <NavLink v-else :item="item" class="pl-8" />
      </div>
    </template>
  </nav>
</template>
