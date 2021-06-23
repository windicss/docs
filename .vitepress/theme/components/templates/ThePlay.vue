<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({})

</script>

<template>
  <ThePlayHeader />
  <AppLayout class="content">
    <ContentLayout>
      <Playground />
    </ContentLayout>
  </AppLayout>
  <HomeFooter />
</template>

<style scoped lang="postcss">
.content {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  gap: 0px 12px;
}
</style>
