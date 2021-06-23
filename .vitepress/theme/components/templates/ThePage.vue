<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({})

</script>

<template>
  <TheHeader />
  <AppLayout class="content">
    <TheSidebar />
    <ContentLayout>
      <HomeHero />
      <div class="prose min-w-0">
        <Content />
      </div>
      <PageFooter />
    </ContentLayout>
    <TheRightSidebar />
  </AppLayout>
</template>

<style scoped lang="postcss">
.content {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  gap: 0px 12px;
}

@screen lg {
  .content {
    grid-template-columns: 250px 1fr 250px;
  }
}
</style>
