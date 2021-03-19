<script setup lang="ts">
import Nuxt from '/@vite-icons/logos/nuxt-icon'
import Vue from '/@vite-icons/logos/vue'
import Svelte from '/@vite-icons/logos/svelte-icon'
import Webpack from '/@vite-icons/logos/webpack'
import Vite from './logos/ViteLogo.vue'
import Windi from './logos/WindiLogo.vue'

const items = [
  {
    title: 'Vite',
    link: '/guide/integrations/vite',
    logo: Vite,
  },
  {
    title: 'Webpack',
    link: '/guide/integrations/webpack',
    logo: Webpack,
  },
  {
    title: 'Nuxt',
    link: '/guide/integrations/nuxt',
    logo: Nuxt,
  },
  {
    title: 'Vue CLI',
    link: '/guide/integrations/vue-cli',
    logo: Vue,
  },
  {
    title: 'Svelte',
    link: '/guide/integrations/svelte-preprocess',
    logo: Svelte,
  },
  {
    title: 'CLI',
    link: '/guide/integrations/cli',
    logo: Windi,
  },
]
</script>

<template>
  <div class="flex flex-wrap gap-5">
    <a
      v-for="item of items"
      :key="item.link"
      class="
        border bc rounded-lg p-4 text-$c-fg text-center relative
        no-underline transition-all duration-500 w-30 h-30 hover:(shadow-xl)
      "
      :href="item.link"
    >
      <component :is="item.logo" class="text-5xl m-auto block" />
      <div class="absolute bottom-0 left-0 right-0 no-underline pb-3">{{ item.title }}</div>
    </a>
  </div>
</template>
