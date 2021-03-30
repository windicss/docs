<template>
  <nav v-if="show" class="nav-links">
    <template v-if="links">
      <div v-for="item in links" :key="item.text" class="item">
        <NavBarDropdownLink v-if="item.items" :item="item" />
        <NavBarLink v-else :item="item" />
      </div>
    </template>

    <div v-if="localeLinks" class="item">
      <NavBarDropdownLink :item="localeLinks" />
    </div>
  </nav>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue'
import { useSiteDataByRoute } from 'vitepress'
import { useLocaleLinks } from '../../composables/nav'
import { useRepo } from '../../composables/repo'

const props = defineProps<{ links?: any[] }>()

const site = useSiteDataByRoute()
const localeLinks = useLocaleLinks()
const repo = useRepo()

const links = computed(() => props.links || site.value.themeConfig.nav)
const show = computed(() => links.value || repo.value)
</script>

<style scoped lang="postcss">
.nav-links {
  @apply flex space-x-3 xl:space-x-6 items-center;
}
</style>
