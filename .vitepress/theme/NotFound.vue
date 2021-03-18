<template>
  <div class="theme flex flex-col items-center">
    <h1 class="text-6xl">
      404
    </h1>
    <p>
      {{ getMsg() }}
    </p>
    <a :href="$site.base" aria-label="go to home">Take me home.</a>
  </div>
</template>

<script setup lang="ts">
const msgs = [
  'There\'s nothing here.',
  'How did we get here?',
  'That\'s a Four-Oh-Four.',
  'Looks like we\'ve got some broken links.',
]

function getMsg() {
  return msgs[Math.floor(Math.random() * msgs.length)]
}
</script>
