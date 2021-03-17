<template>
  <header v-if="showHero" class="home-hero">
    <div class="text-left max-w-40em pt-20 py-50 m-auto">
      <figure v-if="$frontmatter.heroImage">
        <img
          class="block w-auto max-w-full max-h-120px -ml-2"
          :src="$withBase($frontmatter.heroImage)"
          :alt="$frontmatter.heroAlt"
        >
      </figure>

      <div class="ml-2">
        <h1 v-if="hasHeroText" id="main-title" class="text-3xl leading-10 xs:(text-5xl leading-16) mt-0">
          {{ heroText }}
        </h1>
        <p v-if="hasTagline" class="m-0 mt-1 text-xl leading-6 text-$c-text-light xs:(text-2xl)">
          {{ tagline }}
        </p>
        <div class="mt-8 xs:mt-12 flex space-x-6">
          <NavLink
            v-if="hasAction"
            :item="{ link: data.actionLink, text: data.actionText }"
            class="action"
          />
          <NavLink
            v-if="hasAltAction"
            :item="{ link: data.altActionLink, text: data.altActionText }"
            class="action alt"
          />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useSiteDataByRoute, useFrontmatter } from 'vitepress'
import NavLink from './NavLink.vue'

const site = useSiteDataByRoute()
const data = useFrontmatter()

const showHero = computed(() => {
  return (
    data.value.heroImage
    || hasHeroText.value
    || hasTagline.value
    || hasAction.value
  )
})

const hasHeroText = computed(() => data.value.heroText !== null)
const heroText = computed(() => data.value.heroText || site.value.title)

const hasTagline = computed(() => data.value.tagline !== null)
const tagline = computed(() => data.value.tagline || site.value.description)

const hasAction = computed(() => data.value.actionLink && data.value.actionText)
const hasAltAction = computed(
  () => data.value.altActionLink && data.value.altActionText,
)
</script>

<style scoped lang="postcss">
.home-hero {
  min-height: calc(100vh - var(--header-height));
  @apply pt-10 pb-11 px-4 md:px-6 text-center xs:py-14 md:(pt-16 pb-17) flex;
}
.action {
  @apply inline-block;
}

.action :deep(.item) {
  @apply rounded-lg
    inline-block px-4 py-2.5
    text-lg text-white
    bg-$c-brand border-2px border-$c-brand transition-colors
    xs:(text-xl px-5 py-2.8);
}

.action.alt :deep(.item) {
  @apply bg-transparent text-$c-brand;
}

.action.alt :deep(.item:hover) {
  @apply text-$c-brand-light bg-transparent border-$c-brand-light;
}

.action :deep(.item:hover) {
  @apply no-underline bg-$c-brand-light border-$c-brand-light;
}
</style>
