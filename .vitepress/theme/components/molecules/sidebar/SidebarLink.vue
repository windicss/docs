<script setup lang="ts">
import type { DefaultTheme } from 'vitepress'
import type { PropType } from 'vue'

const props = defineProps({
  item: {
    type: Object as PropType<DefaultTheme.SideBarItem>,
    required: true,
  },
})

const children = (props.item as DefaultTheme.SideBarGroup).children

</script>

<template>
  <li>
    <SidebarLinkItem :item="item" :header="true" />
    <ul v-if="children" class="mb-2">
      <li v-for="child in children" :key="child.text">
        <SidebarLinkItem :item="child" />
      </li>
    </ul>
  </li>
</template>
