<template>
  <nav v-if="show" class="nav-links">
    <template v-if="links">
      <div v-for="item in links" :key="item.text" class="item">
        <NavDropdownLink v-if="item.items" :item="item" />
        <NavLink v-else :item="item" />
      </div>
    </template>

    <div v-if="localeLinks" class="item">
      <NavDropdownLink :item="localeLinks" />
    </div>

    <!-- <div v-if="repo" class="item">
      <NavLink :item="repo" />
    </div> -->
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
  padding: 0.5rem 0;
  @apply border-b-1px border-blue-gray-200 dark:border-dark-300;
}

@screen lg {
  .nav-links {
    display: flex;
    padding: 2px 0 0;
    align-items: center;
    border-bottom: 0;
  }

  .item + .item {
    padding-left: 24px;
  }
}
</style>
