<template>
  <header v-if="showHero" class="home-hero">
    <div>
      <div class="space-y-2 pb-12">
        <figure v-if="$frontmatter.heroImage">
          <img
            class="mx-auto max-w-full w-auto max-h-120px block select-none"
            :src="$withBase($frontmatter.heroImage)"
            :alt="$frontmatter.heroAlt"
          >
        </figure>

        <div class="text-center">
          <h1 v-if="hasHeroText" id="main-title" class="text-3xl leading-10 xs:(text-5xl leading-16) mt-0">
            {{ heroText }}
          </h1>
          <p v-if="hasTagline" class="m-0 mt-1 text-lg opacity-75 leading-6 xs:(text-2xl)">
            {{ tagline }}
          </p>

          <div class="flex space-x-4 mt-8 justify-center">
            <a v-if="hasAction" :href="data.actionLink" class="link-btn">
              {{ data.actionText }}
            </a>
            <a v-if="hasAltAction" :href="data.altActionLink" class="link-btn alt">
              {{ data.altActionText }}
            </a>
          </div>
        </div>
      </div>
      <a class="bg-primary rounded font-bold bg-opacity-10 text-center py-4 px-8 block" href="/posts/v30.html">
        🎉 v3.0 is now in Beta with a bunch of exciting new features!
      </a>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useSiteDataByRoute, useFrontmatter } from 'vitepress'

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
  @apply px-4 md:px-6 flex items-center justify-center;
}
.link-btn {
  @apply rounded-lg
    inline-block px-4 py-2
    text-base md:text-lg text-white no-underline
    bg-$c-brand border-2px border-$c-brand transition-colors
    xs:(text-xl px-5 py-2.8)
    hover:(bg-$c-brand-light border-$c-brand-light);
}
.link-btn.alt {
  @apply bg-transparent text-primary hover:text-primary-light;
}
</style>
