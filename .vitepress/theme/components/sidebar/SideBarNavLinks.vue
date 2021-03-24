<template>
  <nav v-if="show" class="nav-links">
    <template v-if="links">
      <template v-for="item in links" :key="item.text">
        <SideBarNavDropdownLink v-if="item.items" :item="item" />
        <SideBarNavLink v-else :item="item" />
      </template>
    </template>

    <div v-if="localeLinks" class="item">
      <SideBarNavDropdownLink :item="localeLinks" />
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
  @apply block py-2 lg:hidden border-b-1px border-blue-gray-200 dark:border-dark-300;
}
</style>
