<template>
  <main aria-labelledby="main-title">
    <HomeHero />
    <slot name="hero" />
    <!-- <HomeFeatures /> -->

    <div class="max-w-62rem mx-auto py-6 md:p-0">
      <Content />
    </div>
    <slot name="features" />
    <HomeFooter />
    <slot name="footer" />
  </main>
</template>
