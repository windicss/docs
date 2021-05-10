<template>
  <a
    class="nav-bar-title"
    :href="$withBase($localePath)"
    :aria-label="`${$siteByRoute.title}, back to home`"
  >
    <img
      v-if="$themeConfig.logo"
      class="mr-2 align-bottom h-30px"
      height="30"
      width="30"
      :src="$withBase($themeConfig.logo)"
      alt="Logo"
    >
    {{ $site.title }}
  </a>
</template>

<style scoped lang="postcss">
.nav-bar-title {
  @apply
    text-xl md:text-1.3rem font-semibold text-$c-text
    inline-flex items-center whitespace-nowrap mr-4
    hover:no-underline;
}
</style>
