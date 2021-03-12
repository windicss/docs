<template>
  <div v-if="hasFeatures" class="home-features">
    <div class="wrapper">
      <div class="container">
        <div class="features">
          <section
            v-for="(feature, index) in features"
            :key="index"
            class="feature space-y-2"
          >
            <h2 v-if="feature.title" class="title">
              {{ feature.title }}
            </h2>
            <p v-if="feature.details" class="details">
              {{ feature.details }}
            </p>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useFrontmatter } from 'vitepress'

const data = useFrontmatter()

const hasFeatures = computed(() => {
  return data.value.features && data.value.features.length > 0
})

const features = computed(() => {
  return data.value.features ? data.value.features : []
})
</script>

<style scoped lang="postcss">
.home-features {
  @apply
    mx-auto pt-10 pb-11 max-w-960px
    xs:(pt-13 pb-14)
    md:(px-6);
}
.home-hero + .home-features {
  @apply pt-0;
}
.wrapper {
  @apply px-6 md:px-0;
}
.home-hero + .home-features .wrapper {
  @apply
    pt-10 pb-13
    border-b border-t border-$c-divider
    xs:pt-13;
}
.container {
  @apply max-w-392px mx-auto md:max-w-960px;
}
.features {
  @apply flex flex-wrap -my-5 -mx-6;
}
.feature {
  @apply w-full py-5 px-6 flex-shrink-0 md:w-1/3;
}
.title {
  @apply
    m-0 border-b-0 leading-6rem text-xl font-medium xs:(text-1.4rem leading-7);
}
.details {
  @apply m-0 leading-1.6rem text-base text-$c-text-light;
}
</style>
