<script setup lang="ts">
import { useRoute } from 'vitepress'

import type { Header } from '@/types'
import type { DefaultTheme } from '@/config'
import { computed } from 'vue'

interface HeaderWithChildren extends Header {
  children?: Header[]
}

const route = useRoute()

const headers = computed(() => {
  return route.data.headers ? resolveHeaders(route.data.headers) : null
})

function resolveHeaders(headers: Header[]): DefaultTheme.SideBarItem[] {
  return mapHeaders(groupHeaders(headers))
}

function groupHeaders(headers: Header[]): HeaderWithChildren[] {
  headers = headers.map(h => Object.assign({}, h))
  let lastH2: HeaderWithChildren
  headers.forEach((h) => {
    if (h.level === 2)
      lastH2 = h

    else if (lastH2)
      (lastH2.children || (lastH2.children = [])).push(h)
  })
  return headers.filter(h => h.level === 2)
}

function mapHeaders(headers: HeaderWithChildren[]): DefaultTheme.SideBarItem[] {
  return headers.map(header => ({
    text: header.title,
    link: `#${header.slug}`,
    children: header.children ? mapHeaders(header.children) : undefined,
  }))
}

const hasHeaders = computed(() => headers.value && headers.value?.length > 0)

</script>

<template>
  <ul v-if="hasHeaders" class="py-4 pl-4 lg:pt-10">
    <li>
      <SidebarLinkItem
        :item="{
          text: 'Table of Content',
        }"
        class="px-2"
        header
      />
      <ul class="mb-2">
        <li v-for="child in headers" :key="child.text">
          <SidebarLinkItem :item="child" table />
        </li>
      </ul>
    </li>
  </ul>
</template>
