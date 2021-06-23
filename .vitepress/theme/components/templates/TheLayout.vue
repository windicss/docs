<script setup lang="ts">
import { computed, defineAsyncComponent } from 'vue'
import { useData } from 'vitepress'
import TheHome from './TheHome.vue'
import ThePage from './ThePage.vue'

const { frontmatter } = useData()

const ThePlay = defineAsyncComponent(async () => await import('./ThePlay.vue'))

const page = computed(() => {
  if (frontmatter.value.home) {
    return TheHome
  } else if (frontmatter.value.playground) {
    return ThePlay
  } else { 
    return ThePage
  }
})

</script>

<template>
  <div class="relative antialiased">
    <keep-alive>
      <component :is="page"></component>
    </keep-alive>
  </div>
</template>
