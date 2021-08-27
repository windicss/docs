<template>
  <TheHeader />
  <AppLayout class="content">
    <TheSidebar class="lg:hidden" />
    <ContentLayout class="!pt-0">
      <HomeHero />
      <div class="prose min-w-0">
        <Content />
      </div>
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
