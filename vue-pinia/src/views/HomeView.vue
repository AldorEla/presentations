<template>
  <component :is="layout">
    <main>
      <TheWelcome />
    </main>
  </component>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import TheWelcome from '../components/TheWelcome.vue'

const route = useRoute()
const layout = computed(() => {
  const layout = route?.meta?.layout
  if (layout) {
    return layout
  }
  return 'div'
})
</script>
