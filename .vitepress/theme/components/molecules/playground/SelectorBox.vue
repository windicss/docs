<script setup lang="ts">
import { triggerRef, defineProps, defineEmits } from 'vue'
import { useVModel } from '@vueuse/core'
import type { PropType } from 'vue'

const emit = defineEmits([])
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

const map: readonly [string, readonly string[]][] = [
  ['r', ['tr', 'br']],
  ['t', ['tr', 'tl']],
  ['b', ['br', 'bl']],
  ['l', ['tl', 'bl']],
  ['ALL', ['r', 't', 'b', 'l']],
]

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
  <div class="relative w-24 h-24 ring-4 ring-gray-400 ring-opacity-10 ring-inset rounded-xl">
    <!-- Corners -->
    <template
      v-if="['all', 'corners'].includes(mode)"
    >
      <div
        class="border-t-4 border-l-4 item rounded-tl-xl"
        :class="{ active: includes('tl'), has: has('tl') }"
        @click="toggle('tl')"
      />
      <div
        class="right-0 border-t-4 border-r-4 item rounded-tr-xl"
        :class="{ active: includes('tr'), has: has('tr') }"
        @click="toggle('tr')"
      />
      <div
        class="bottom-0 border-b-4 border-l-4 item rounded-bl-xl"
        :class="{ active: includes('bl'), has: has('bl') }"
        @click="toggle('bl')"
      />
      <div
        class="bottom-0 right-0 border-b-4 border-r-4 item rounded-br-xl"
        :class="{ active: includes('br'), has: has('br') }"
        @click="toggle('br')"
      />
    </template>
    <!-- Edges -->
    <template
      v-if="['all', 'edges'].includes(mode)"
    >
      <div
        class="transform -translate-x-1/2 border-t-4 item left-1/2"
        :class="{ active: includes('t'), has: has('t') }"
        @click="toggle('t')"
      />
      <div
        class="bottom-0 transform -translate-x-1/2 border-b-4 item left-1/2"
        :class="{ active: includes('b'), has: has('b') }"
        @click="toggle('b')"
      />
      <div
        class="transform -translate-y-1/2 border-l-4 item top-1/2"
        :class="{ active: includes('l'), has: has('l') }"
        @click="toggle('l')"
      />
      <div
        class="right-0 transform -translate-y-1/2 border-r-4 item top-1/2"
        :class="{ active: includes('r'), has: has('r') }"
        @click="toggle('r')"
      />
    </template>
    <!-- all -->
    <div
      class="absolute w-6 h-6 transform -translate-x-1/2 -translate-y-1/2 border-2 border-gray-400 border-opacity-25 rounded  button left-1/2 top-1/2"
      @click="toggleAll()"
    />
  </div>
</template>

<style scoped lang="postcss">
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
