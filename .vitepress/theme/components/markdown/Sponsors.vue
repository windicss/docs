<script setup lang="ts">
import { computed } from '@vue/runtime-core'
import { useAxios } from '@vueuse/integrations'

const corsProxyUrl = 'https://cors.maint.workers.dev/?'
const memberUrl = 'https://opencollective.com/windicss/members.json'

const { data, finished } = useAxios<any[]>(corsProxyUrl + memberUrl)

const sponsors = computed(() => {
  const cache: any = []
  return data.value
    ?.filter(i => i.totalAmountDonated !== 0).filter((i) => {
      if (cache.includes(i.profile)) {
        return false
      }
      else {
        cache.push(i.profile)
        return true
      }
    })
    .sort((a, b) => (
      b.totalAmountDonated - a.totalAmountDonated
    ))
})
</script>

<template>
  <div class="text-$c-text text-center mt-4 mb-24">
    <h2 class="border-none text-2xl">
      Sponsors
    </h2>
    <div v-if="finished" class="flex flex-wrap justify-center px-16 mb-6">
      <a
        v-for="{ profile, image, name } of sponsors"
        :key="name"
        :href="profile"
        target="_blank"
        rel="noopener"
        aria-label="sponsor-img"
        class="inline-block w-80px h-80px rounded-full overflow-hidden m-1 hover:no-underline"
      >
        <img v-if="image" :src="image" :alt="name" class="w-full h-full">
        <div v-else class="w-full h-full bg-gray-100 dark:bg-dark-300 flex items-center p-1">
          <span class="text-$c-text text-xs">{{ name }}</span>
        </div>
      </a>
    </div>
    <br>
    <a href="https://opencollective.com/windicss" target="_blank" rel="noopener" class="text-$c-text text-sm">Become a sponsor on Open Collective</a>
  </div>
</template>
