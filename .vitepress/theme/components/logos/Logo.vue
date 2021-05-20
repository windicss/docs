<script setup lang="ts">
import { computed, defineProps } from 'vue'
import Nuxt from '/@vite-icons/logos/nuxt-icon'
import Vue from '/@vite-icons/logos/vue'
import Svelte from '/@vite-icons/logos/svelte-icon'
import Rollup from '/@vite-icons/logos/rollup'
import Webpack from '/@vite-icons/logos/webpack'
import VSCode from '/@vite-icons/logos/visual-studio-code'
import Webstrom from '/@vite-icons/logos/webstorm'
import PostCSS from '/@vite-icons/logos/postcss'
import Gridsome from '/@vite-icons/logos/gridsome-icon'
import JavaScript from '/@vite-icons/logos/javascript'
import NextJs from './NuxtJs.vue'
import Vite from './ViteLogo.vue'
import Windi from './WindiLogo.vue'

// @windicss-safelist: 'logo-float-xl'

const props = defineProps({
  name: {
    default: '',
  },
})

const Logo = computed(() => {
  switch (props.name.toString()) {
    case 'nuxt':
      return Nuxt
    case 'vue':
      return Vue
    case 'svelte':
      return Svelte
    case 'rollup':
      return Rollup
    case 'webpack':
      return Webpack
    case 'vite':
      return Vite
    case 'nextjs':
      return NextJs
    case 'gridsome':
      return Gridsome
    case 'vscode':
      return VSCode
    case 'webstorm':
      return Webstrom
    case 'postcss':
      return PostCSS
    case 'javascript':
      return JavaScript
    default:
      return Windi
  }
})
</script>

<template>
  <component :is="Logo" />
</template>
