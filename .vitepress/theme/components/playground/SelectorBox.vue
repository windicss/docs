<script setup lang="ts">
import { triggerRef, defineProps, defineEmit } from 'vue'
import type { PropType } from 'vue'
import { useVModel } from '@vueuse/core'

const emit = defineEmit()
const props = defineProps({
  modelValue: {
    type: Array as PropType<string[]>,
    default: () => [],
  },
  normalize: {
    default: false,
  },
  mode: {
    default: 'all',
  },
})

const directions = useVModel(props, 'modelValue', emit, { passive: true })

function includes(str: string) {
  return directions.value.includes(str)
}

function has(str: string) {
  if (includes('ALL'))
    return true
  if (str.length === 2) {
    return includes(str)
      || includes(str.slice(0, 1))
      || includes(str.slice(1, 2))
  }
  return includes(str)
}

function toggle(str: string) {
  remove('ALL')

  if (directions.value.includes(str)) {
    remove(str)
  }
  else {
    expand()
    if (has(str))
      remove(str)
    else
      add(str)
    normalize()
    normalize()
  }

  triggerRef(directions)
}

function remove(...strs: string[]) {
  for (const str of strs) {
    const index = directions.value.indexOf(str)

    if (index >= 0)
      directions.value.splice(index, 1)
  }
}

function add(...strs: string[]) {
  for (const str of strs) {
    const index = directions.value.indexOf(str)

    if (index < 0)
      directions.value.push(str)
  }
}

const map = [
  ['r', ['tr', 'br']],
  ['t', ['tr', 'tl']],
  ['b', ['br', 'bl']],
  ['l', ['tl', 'bl']],
  ['ALL', ['r', 't', 'b', 'l']],
] as const

function normalize() {
  const c = Array.from(directions.value)

  for (const [n, r] of map) {
    if (c.includes(n) || r.every(i => c.includes(i))) {
      remove(...r)
      add(n)
    }
  }
}

function expand() {
  let c = Array.from(directions.value)

  if (c.includes('ALL'))
    c = ['r', 't', 'b', 'l']

  c.forEach((i) => {
    for (const [n, r] of map) {
      if (i === n) {
        remove(i)
        add(...r)
        break
      }
    }
  })
}

function toggleAll() {
  const hasAll = directions.value.includes('ALL')

  directions.value.splice(0, directions.value.length)
  if (!hasAll)
    directions.value.push('ALL')

  triggerRef(directions)
}
</script>

<template>
  <div class="w-24 h-24 relative ring-4 ring-gray-400 ring-opacity-10 ring-inset rounded-xl">
    <!-- Corners -->
    <template
      v-if="['all', 'corners'].includes(mode)"
    >
      <div
        class="item rounded-tl-xl border-t-4 border-l-4"
        :class="{ active: includes('tl'), has: has('tl') }"
        @click="toggle('tl')"
      />
      <div
        class="item rounded-tr-xl border-t-4 border-r-4 right-0"
        :class="{ active: includes('tr'), has: has('tr') }"
        @click="toggle('tr')"
      />
      <div
        class="item rounded-bl-xl border-b-4 border-l-4 bottom-0"
        :class="{ active: includes('bl'), has: has('bl') }"
        @click="toggle('bl')"
      />
      <div
        class="item rounded-br-xl border-b-4 border-r-4 right-0 bottom-0"
        :class="{ active: includes('br'), has: has('br') }"
        @click="toggle('br')"
      />
    </template>
    <!-- Edges -->
    <template
      v-if="['all', 'edges'].includes(mode)"
    >
      <div
        class="item transform border-t-4 left-1/2 -translate-x-1/2"
        :class="{ active: includes('t'), has: has('t') }"
        @click="toggle('t')"
      />
      <div
        class="item transform border-b-4 bottom-0 left-1/2 -translate-x-1/2"
        :class="{ active: includes('b'), has: has('b') }"
        @click="toggle('b')"
      />
      <div
        class="item transform border-l-4 top-1/2 -translate-y-1/2"
        :class="{ active: includes('l'), has: has('l') }"
        @click="toggle('l')"
      />
      <div
        class="item transform border-r-4 right-0 top-1/2 -translate-y-1/2"
        :class="{ active: includes('r'), has: has('r') }"
        @click="toggle('r')"
      />
    </template>
    <!-- all -->
    <div
      class="
        button absolute w-6 h-6 transform border-dashed border-2 rounded
        border-gray-400 border-opacity-25
        left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2
      "
      @click="toggleAll()"
    />
  </div>
</template>

<style scoped>
.button {
  @apply hover:(bg-gray-400 bg-opacity-20) cursor-pointer;
}
.item {
  @apply absolute w-6.2 h-6.2
    border-gray-300 border-opacity-40
    hover:(bg-gray-400 bg-opacity-20) cursor-pointer
    transition-all duration-200;
  ;
}
.item.active {
  @apply border-light-blue-500 border-opacity-100;
}
.item.has:not(.active) {
  @apply border-light-blue-400 border-opacity-70;
}
</style>
