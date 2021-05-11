<script setup lang="ts">
import { computed } from 'vue'
import { useAxios } from '@vueuse/integrations'

const corsProxyUrl = 'https://cors.maint.workers.dev/?'
const memberUrl = 'https://opencollective.com/windicss/members.json'

const { data, finished } = useAxios<any[]>(corsProxyUrl + memberUrl)

const base = computed(() => {
  const cache: any = []
  return data.value
    ? data.value
      .filter(i => i.totalAmountDonated !== 0)
      .filter((i) => {
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
    : []
})
const viewData = computed(() => {
  return [
    {
      title: 'Special Sponsor',
      data: base.value.filter(i => i.totalAmountDonated >= 1000),
    },
    {
      title: 'Sponsors',
      data: base.value.filter(i => i.totalAmountDonated < 1000),
    },
  ]
})
</script>

<template>
  <div class="text-$c-text text-center mt-4 mb-24">
    <template v-for="item in viewData" :key="item.title">
      <h2 class="border-none text-2xl">
        {{ item.title }}
      </h2>
      <div v-if="finished" class="flex flex-wrap justify-center px-4 md:px-16 mt-10 mb-10">
        <a
          v-for="{ profile, image, name, MemberId } of item.data"
          :key="name"
          :href="profile"
          target="_blank"
          rel="noopener"
          aria-label="sponsor-img"
          class="inline-block w-60px h-60px md:(w-80px h-80px) overflow-hidden m-1.5 hover:no-underline"
          :class="{'!w-280px': item.title === 'Special Sponsor' }"
        >
          <logos:nuxt v-if="MemberId === 180034" class="w-full h-full" />
          <img v-else-if="image" :src="image" :alt="name" class="w-full h-full rounded-full">
          <div v-else class="w-full h-full bg-gray-100 dark:bg-dark-400 flex items-center p-1 rounded-full">
            <span class="text-$c-text text-xs">{{ name }}</span>
          </div>
        </a>
      </div>
    </template>
    <a href="https://opencollective.com/windicss" target="_blank" rel="noopener" class="text-gray-500 dark:text-gray-300 text-sm">Become a sponsor on Open Collective</a>
  </div>
</template>
