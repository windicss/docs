<script setup lang="ts">
import { computed } from 'vue'
import NextJs from './NuxtJs.vue'
import Vite from './ViteLogo.vue'
import Windi from './WindiLogo.vue'
import Nuxt from '~icons/logos/nuxt-icon'
import Vue from '~icons/logos/vue'
import Svelte from '~icons/logos/svelte-icon'
import Rollup from '~icons/logos/rollup'
import Webpack from '~icons/logos/webpack'
import VSCode from '~icons/logos/visual-studio-code'
import Webstrom from '~icons/logos/webstorm'
import PostCSS from '~icons/logos/postcss'
import Gridsome from '~icons/logos/gridsome-icon'
import JavaScript from '~icons/logos/javascript'

// @windicss-safelist: 'logo-float-xl'

const props = withDefaults(defineProps<{
  name?: string
}>(), {
  name: '',
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
