<template>
  <TheHeader />
  <AppLayout class="grid-leyout">
    <TheSidebar />
    <ContentLayout>
      <HomeHero />
      <div class="content prose min-w-0">
        <Content />
      </div>
      <PageFooter />
    </ContentLayout>
    <TheRightSidebar />
  </AppLayout>
</template>

<style scoped lang="postcss">
.grid-leyout {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  gap: 0px 12px;
}

@screen lg {
  .grid-leyout {
    grid-template-columns: 250px 1fr 250px;
  }
}
</style>
