<script setup lang="ts">
import { watch } from 'vue'
import { useRoute } from 'vitepress'
import { openSideBar } from '@/logics/sideBar'

const route = useRoute()

watch(() => route.path, () => openSideBar.value = false)

watch(openSideBar, (v) => {
  v
    ? document.documentElement.classList.add('overflow-hidden')
    : document.documentElement.classList.remove('overflow-hidden')
})

</script>

<template>
  <aside class="fixed z-50 lg:z-0 lg:static">
    <div class="h-full overflow-auto pointer-events-none lg:overflow-visible">
      <SidebarBackground />
      <div
        class="
          fixed top-0 left-0
          w-auto h-full
          overflow-auto pointer-events-auto
          transform -translate-x-full lg:transform-none transition-transform duration-200 ease-linear
          min-w-62
          lg:(h-$full-header sticky top-$header-height)
        "
        :class="{ '-translate-x-0': openSideBar }"
      >
        <div
          class="w-auto h-full overflow-auto bg-$windi-bg lg:bg-transparent"
        >
          <SidebarHeader @close="openSideBar = false" />
          <div class="sticky top-$header-height h-$full-header overflow-auto">
            <TreeMenu />
            <SidebarNav />
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
