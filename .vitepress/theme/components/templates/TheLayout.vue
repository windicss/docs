<script setup lang="ts">
import { useData } from 'vitepress'

const { frontmatter } = useData()

</script>

<template>
  <div class="relative antialiased">
    <TheHome v-if="frontmatter.home" />
    <ThePlay v-else-if="frontmatter.playground" />
    <ThePage v-else />
  </div>
</template>
