<script setup lang="ts">
import { ref, computed, onServerPrefetch, onMounted } from 'vue'
import axios from 'axios'

const sponsors = ref([])

const fetchSponsor = async() => {
  const res = await axios.get('.netlify/functions/sponsor')
  sponsors.value = res.data
}

onServerPrefetch(() => fetchSponsor())
onMounted(() => fetchSponsor())

const viewData = computed(() => {
  return [
    {
      title: 'Special Sponsor',
      data: sponsors.value.filter((i: any) => i.totalAmountDonated >= 1000),
    },
    {
      title: 'Sponsors',
      data: sponsors.value.filter((i: any) => i.totalAmountDonated < 1000),
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
      <div class="flex flex-wrap justify-center px-4 md:px-16 mt-10 mb-10">
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
          <img v-else-if="image" :src="image" :alt="name" class="!m-0 w-full h-full rounded-full">
          <div v-else class="w-full h-full bg-gray-100 dark:bg-dark-400 flex items-center justify-center p-1 rounded-full">
            <span class="text-$c-text text-xs">{{ name }}</span>
          </div>
        </a>
      </div>
    </template>
    <span class="text-sm">
      Become a sponsor on
      <a href="https://opencollective.com/windicss" target="_blank" rel="noopener">Open Collective</a>
    </span>
  </div>
</template>
