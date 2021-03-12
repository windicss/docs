<template>
  <footer v-if="$frontmatter.footer" class="mx-auto max-w-960px md:px-6">
    <div class="container">
      <p class="m-0 text-center leading-6 text-0.9rem text-$c-text-light">
        {{ $frontmatter.footer }}
      </p>
    </div>
  </footer>
</template>

<style scoped lang="postcss">
.container {
  padding: 2rem 1.5rem 2.25rem;
}

@screen xs {
  .container {
    padding: 3rem 1.5rem 3.25rem;
  }
}
</style>
