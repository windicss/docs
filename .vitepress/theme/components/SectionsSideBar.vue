<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vitepress'

const route = useRoute()
const headers = computed(() => {
  return route.data.headers.filter(i => i.level < 3) || []
})
</script>

<template>
  <aside class="sidebar-sections">
    <div>
      <p>
        Sections
      </p>
      <ul>
        <li v-for="item of headers" :key="item.title">
          <a :href="`#${item.slug}`">
            {{ item.title }}
          </a>
        </li>
      </ul>
    </div>
  </aside>
</template>

<style scoped lang="postcss">
.sidebar-sections {
  @apply fixed top-0 right-0 hidden lg:block h-full w-$sections-sidebar-width pt-$header-height text-0.9rem px-4 border-l-1px border-$c-divider;
  > div {
    height: calc(100vh - var(--header-height));
    @apply sticky top-$header-height overflow-y-auto py-4;
  }
  & p {
    @apply block m-0 px-4 py-1 opacity-50 font-semibold text-0.8rem uppercase leading-7;
  }
  & ul {
    @apply list-none m-0 p-0;
    & a {
      @apply block px-4 py-2 my-1 leading-5 text-$c-text
      hover:(no-underline bg-blue-gray-100 dark:bg-dark-400 rounded-md);
    }
  }
}
</style>
