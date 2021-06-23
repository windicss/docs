<script setup lang="ts">
import { useData } from 'vitepress'

const { frontmatter } = useData()

</script>

<template>
  <div class="px-4">
    <a
      v-if="frontmatter.newsLink && frontmatter.newsTitle"
      class="
        bg-primary bg-opacity-10
        inline-flex rounded
        font-bold text-center text-primary
        p-3 md:p-4 lg:px-8
        text-sm lg:text-base"
      :href="frontmatter.newsLink"
    >
      {{ frontmatter.newsTitle }}
    </a>
  </div>
</template>
