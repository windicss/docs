<script setup lang="ts">
import { computed } from 'vue'
import { useData, withBase } from 'vitepress'
const { site, frontmatter } = useData()

const showHero = computed(() => {
  const {
    heroImage,
    heroText,
    tagline,
    actionLink,
    actionText,
  } = frontmatter.value
  return heroImage || heroText || tagline || (actionLink && actionText)
})
const heroText = computed(() => frontmatter.value.heroText || site.value.title)
</script>

<template>
  <header v-if="showHero" class="flex items-center justify-center h-$full-header md:px-6">
    <div>
      <div class="space-y-2 mb-12 md:mb-14">
        <figure v-if="frontmatter.heroImage">
          <img
            class="mx-auto max-w-full w-auto max-h-120px block select-none"
            :src="withBase(frontmatter.heroImage)"
            :alt="frontmatter.heroAlt"
          >
        </figure>

        <div class="text-center">
          <h1 v-if="heroText" id="main-title" class="text-3xl leading-10 font-semibold sm:(text-5xl leading-16)">
            {{ heroText }}
          </h1>
          <p v-if="frontmatter.tagline || site.description" class="m-0 mt-1 text-lg opacity-75 leading-6 px-4 sm:(text-xl)">
            {{ frontmatter.tagline || site.description }}
          </p>

          <div class="flex space-x-4 mt-8 justify-center">
            <AppButton v-if="frontmatter.actionLink && frontmatter.actionText" size="lg" :href="frontmatter.actionLink">
              {{ frontmatter.actionText }}
            </AppButton>
            <AppButton v-if="frontmatter.altActionLink && frontmatter.altActionText" size="lg" :href="frontmatter.altActionLink" outline>
              {{ frontmatter.altActionText }}
            </AppButton>
          </div>
        </div>
      </div>
      <HomeNews />
    </div>
  </header>
</template>
