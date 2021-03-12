<template>
  <header v-if="showHero" class="home-hero">
    <figure v-if="$frontmatter.heroImage" class="px-6">
      <img
        class="block w-auto mx-auto max-w-full max-h-120px"
        :src="$withBase($frontmatter.heroImage)"
        :alt="$frontmatter.heroAlt"
      >
    </figure>

    <h1 v-if="hasHeroText" id="main-title" class="text-2xl xs:(text-5xl leading-16) md:(mt-8)">
      {{ heroText }}
    </h1>
    <p v-if="hasTagline" class="m-0 mt-1 text-xl leading-5 text-$c-text-light xs:(text-2xl)">
      {{ tagline }}
    </p>

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
  margin: 2.5rem 0 2.75rem;
  padding: 0 1.5rem;
  text-align: center;
}

@media (min-width: 420px) {
  .home-hero {
    margin: 3.5rem 0;
  }
}

@media (min-width: 720px) {
  .home-hero {
    margin: 4rem 0 4.25rem;
  }
}

.action {
  margin-top: 1.5rem;
  display: inline-block;
}

.action.alt {
  margin-left: 1.5rem;
}

@media (min-width: 420px) {
  .action {
    margin-top: 2rem;
    display: inline-block;
  }
}

.action :deep(.item) {
  display: inline-block;
  border-radius: 6px;
  padding: 0 20px;
  line-height: 44px;
  font-size: 1rem;
  font-weight: 500;
  color: #ffffff;
  background-color: var(--c-brand);
  border: 2px solid var(--c-brand);
  transition: background-color 0.1s ease;
}

.action.alt :deep(.item) {
  background-color: transparent;
  color: var(--c-brand);
}

.action :deep(.item:hover) {
  text-decoration: none;
  color: #ffffff;
  background-color: var(--c-brand-light);
}

@media (min-width: 420px) {
  .action :deep(.item) {
    padding: 0 24px;
    line-height: 52px;
    font-size: 1.2rem;
    font-weight: 500;
  }
}
</style>
