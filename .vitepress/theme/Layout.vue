<template>
  <div class="theme" :class="pageClasses">
    <template v-if="fullpage">
      <Content />
    </template>
    <template v-else>
      <NavBar v-if="showNavbar" @toggle="toggleSidebar">
        <template #search>
          <slot name="navbar-search">
            <div class="hidden lg:block w-1px h-auto my-2 bg-gray-200 dark:bg-gray-700"></div>
            <AlgoliaSearchBox v-if="theme.algolia" :options="theme.algolia" />
          </slot>
        </template>
      </NavBar>
      <div class="pt-$header-height min-h-screen" :class="{'grid-layout': !enableHome}">
        <SideBar :open="openSideBar">
          <template #sidebar-top>
            <slot name="sidebar-top" />
          </template>
          <template #sidebar-bottom>
            <slot name="sidebar-bottom" />
          </template>
        </SideBar>
        <!-- TODO: make this button accessible -->
        <div class="sidebar-mask" @click="toggleSidebar(false)" />
        <Home v-if="enableHome">
          <template #hero>
            <slot name="home-hero" />
          </template>
          <template #features>
            <slot name="home-features" />
          </template>
          <template #footer>
            <slot name="home-footer" />
          </template>
        </Home>
        <Page v-else>
          <template #top>
            <slot name="page-top-ads" />
            <slot name="page-top" />
          </template>
          <template #bottom>
            <slot name="page-bottom" />
            <slot name="page-bottom-ads" />
          </template>
        </Page>
      <!-- <HeadersSideBar /> -->
      </div>
    </template>
  </div>
  <!-- <Debug /> -->
</template>

<script setup lang="ts">
import { ref, computed, watch, defineAsyncComponent } from 'vue'
import {
  useRoute,
  useSiteData,
  // usePageData,
  useSiteDataByRoute,
} from 'vitepress'
import { isSideBarEmpty, getSideBarConfig } from './support/sideBar'
import type { DefaultTheme } from './config'

const Home = defineAsyncComponent(() => import('./components/Home.vue'))

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
const fullpage = computed(() => !!route.data.frontmatter.fullpage)

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

// sidebar
const openSideBar = ref(false)

const showSidebar = computed(() => {
  const { frontmatter } = route.data

  if (frontmatter.home || frontmatter.sidebar === false)
    return false

  const { themeConfig } = siteRouteData.value

  return !isSideBarEmpty(
    getSideBarConfig(themeConfig.sidebar, route.data.relativePath),
  )
})

const toggleSidebar = (to?: boolean) => {
  openSideBar.value = typeof to === 'boolean' ? to : !openSideBar.value
}

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
@screen lg {
  .grid-layout {
    display: grid;
    grid-template-columns: 16rem minmax(100px, 1fr);
    grid-template-rows: 1fr;
    gap: 0px 16px;
  }
}

/* @screen lg {
  .grid-layout {
    grid-template-columns: min-content minmax(100px, 2fr) 16rem;
  }
} */

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
