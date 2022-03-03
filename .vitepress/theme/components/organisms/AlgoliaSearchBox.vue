<script setup lang="ts">
import { useSearchBox } from '@/logics/search'
import type { DefaultTheme } from '@/config'

import '@docsearch/css/dist/style.css'

const props = defineProps<{
  options: DefaultTheme.AlgoliaSearchOptions
  multilang?: boolean
  id?: string
}>()

const { searchId } = useSearchBox(props)
</script>

<template>
  <div :id="searchId" class="algolia-search-box" />
</template>

<style lang="postcss">
.algolia-search-box {
  @apply pt-1px;
}

:root {
  --docsearch-container-background: rgba(173, 181, 189, 0.7);

  --docsearch-modal-background: theme("colors.white");
  --docsearch-modal-shadow: none;

  --docsearch-footer-background: transparent;
  --docsearch-footer-shadow: rgba(125, 125, 125, 0.1);

  --docsearch-hit-color: theme("colors.gray.800");
  --docsearch-hit-background: rgba(125, 125, 125, 0.1);
  --docsearch-hit-shadow: none;
  --docsearch-hit-height: 3.5rem;

  --docsearch-primary-color: theme("colors.primary.600");
  --docsearch-highlight-color: var(--docsearch-primary-color);

  /* --docsearch-searchbox-background: theme('colors.gray.100');
  --docsearch-searchbox-focus-background: theme('colors.gray.200'); */
  --docsearch-searchbox-background: transparent;
  --docsearch-searchbox-focus-background: transparent;
  --docsearch-searchbox-shadow: none;
  --docsearch-searchbox-height: 3.5rem;

  --docsearch-text-color: theme("colors.gray.600");
  --docsearch-muted-color: theme("colors.gray.400");

  --docsearch-key-gradient: transparent;
  --docsearch-key-shadow: none;
}

html.dark {
  --docsearch-container-background: rgba(12, 12, 12, 0.9);

  --docsearch-modal-background: theme("colors.dark.800");
  --docsearch-modal-shadow: none;

  --docsearch-hit-color: theme("colors.gray.200");

  /* --docsearch-searchbox-background: theme('colors.dark.400');
  --docsearch-searchbox-focus-background: theme('colors.dark.300'); */
  --docsearch-searchbox-background: transparent;
  --docsearch-searchbox-focus-background: transparent;

  --docsearch-text-color: theme("colors.gray.200");
  --docsearch-muted-color: theme("colors.gray.400");

  --docsearch-key-gradient: transparent;
  --docsearch-key-shadow: none;
}

.DocSearch-Button {
  @apply rounded-lg ml-0 h-auto px-3 py-2;
}
.DocSearch-Button-Keys {
  @apply justify-between min-w-12;
}
.DocSearch-Button-Key {
  @apply static w-5 h-5 pb-0 border border-$docsearch-muted-color m-0 top-0;
}
.DocSearch-Button-Placeholder {
  @apply pl-3 font-normal pr-0 xl:pr-12;
}

.DocSearch-Button:hover .DocSearch-Button-Key {
  @apply text-$docsearch-text-color border-$docsearch-text-color;
}
.DocSearch-Form,
.DocSearch-Hit a {
  @apply rounded-lg;
}
.DocSearch-Form {
  @apply bg-gray-100 dark:bg-dark-500;
}
.DocSearch-Modal {
  @apply rounded-lg;
}
.DocSearch-Footer {
  @apply border-t dark:border-dark-300;
}
.DocSearch-Search-Icon {
  @apply h-20px w-20px stroke-2;
}
.DocSearch-Button:hover .DocSearch-Search-Icon {
  @apply text-$docsearch-text-color;
}
.DocSearch-Input {
  padding-left: 1rem;
  font-size: 1em;
}
.DocSearch-StartScreen {
  padding-top: 4rem;
  padding-bottom: 4rem;
}

@screen -lg {
  .DocSearch-Button-Key,
  .DocSearch-Button-KeySeparator,
  .DocSearch-Button-Placeholder {
    display: none;
  }
}

@screen -xl {
  .DocSearch-Button-Key {
    display: none;
  }
}
</style>
