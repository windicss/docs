<template>
  <footer v-if="$frontmatter.footer" class="mx-auto max-w-960px md:px-6">
    <div class="pt-8 px-6 pb-9 xs:(pt-12 px-6 pb-13)">
      <p class="m-0 text-center leading-6 text-0.9rem text-$c-text-light">
        {{ $frontmatter.footer }}
      </p>
    </div>
  </footer>
</template>
