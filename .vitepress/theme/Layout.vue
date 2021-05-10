<template>
  <div class="theme flex" :class="pageClasses">
    <NavBar :sidebar-state="showSidebar">
      <template v-if="playground" #icons>
        <NavDivider />
        <PlaygroundActionButtons />
      </template>
      <template #search>
        <NavDivider />
        <AlgoliaSearchBox :options="theme.algolia" :small="playground || (!bpxl && !enableHome)" class="hidden md:block" />
      </template>
    </NavBar>
    <SideBar>
      <template #search>
        <AlgoliaSearchBox id="sidebar-search" :options="theme.algolia" class="md:hidden" />
      </template>
    </SideBar>
    <div class="relative pt-$header-height min-h-screen w-full" :class="[{'lg:pl-$sidebar-width': showSidebar}, { 'lg:pr-$sections-sidebar-width': headersSidebar}]">
      <Home v-if="enableHome" />
      <Playground v-else-if="playground" />
      <Page v-else />
    </div>
    <SectionsSideBar v-if="headersSidebar" />
    <VersionTag v-if="playground" />
    <div class="sidebar-mask" @click="toggleSidebar(false)" />
  </div>
  <!-- <Debug /> -->
</template>

<script setup lang="ts">
import { computed, watch, defineAsyncComponent } from 'vue'
import {
  useRoute,
  useSiteData,
  // usePageData,
  useSiteDataByRoute,
} from 'vitepress'
import { isSideBarEmpty, getSideBarConfig } from './support/sideBar'
import { openSideBar, toggleSidebar } from './composables/sideBar'
import { bps } from './composables/breakpoints'
import type { DefaultTheme } from './config'

const bpxl = bps.greater('xl')

const Home = defineAsyncComponent(() => import('./components/Home.vue'))
const Playground = defineAsyncComponent(() => import('./components/play/Playground.vue'))

const NoopComponent = () => null

// @ts-ignore
// eslint-disable-next-line no-undef
const AlgoliaSearchBox = __ALGOLIA__
  ? defineAsyncComponent(() => import('./components/AlgoliaSearchBox.vue'))
  : NoopComponent

// generic state
const route = useRoute()
const siteData = useSiteData<DefaultTheme.Config>()
const siteRouteData = useSiteDataByRoute()
const theme = computed(() => siteData.value.themeConfig)
// const page = usePageData()

// home
const enableHome = computed(() => !!route.data.frontmatter.home)

// playground
const playground = computed(() => !!route.data.frontmatter.playground)
const headersSidebar = computed(() => route.path.startsWith('/utilities'))

// navbar
const showNavbar = computed(() => {
  const { themeConfig } = siteRouteData.value
  const { frontmatter } = route.data
  if (frontmatter.navbar === false || themeConfig.navbar === false)
    return false

  return (
    siteData.value.title
    || themeConfig.logo
    || themeConfig.repo
    || themeConfig.nav
  )
})

const showSidebar = computed(() => {
  const { frontmatter } = route.data

  if (frontmatter.home || frontmatter.playground || frontmatter.sidebar === false)
    return false

  const { themeConfig } = siteRouteData.value

  return !isSideBarEmpty(
    getSideBarConfig(themeConfig.sidebar, route.data.relativePath),
  )
})

const hideSidebar = toggleSidebar.bind(null, false)
// close the sidebar when navigating to a different location
watch(route, hideSidebar)
// TODO: route only changes when the pathname changes
// listening to hashchange does nothing because it's prevented in router

// page classes
const pageClasses = computed(() => {
  return [
    {
      'no-navbar': !showNavbar.value,
      'sidebar-open': openSideBar.value,
      'no-sidebar': !showSidebar.value,
    },
  ]
})
</script>

<style lang="postcss">
#ads-container {
  margin: 0 auto;
}

@media (min-width: 420px) {
  #ads-container {
    position: relative;
    right: 0;
    float: right;
    margin: -8px -8px 24px 24px;
    width: 146px;
  }
}

@media (max-width: 420px) {
  #ads-container {
    /* Avoid layout shift */
    height: 105px;
    margin: 1.75rem 0;
  }
}

@media (min-width: 1400px) {
  #ads-container {
    position: fixed;
    right: 8px;
    bottom: 8px;
  }
}
</style>
