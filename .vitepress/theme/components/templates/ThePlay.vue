<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({})

</script>

<template>
  <ThePlayHeader />
  <div class="pt-$header-height">
    <Playground />
  </div>
  <HomeFooter />
</template>
