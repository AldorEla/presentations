<template>
  <component :is="layout">
    <div class="about">
      <h1>This is an about page</h1>
    </div>
  </component>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const layout = computed(() => {
  const layout = route?.meta?.layout
  if (layout) {
    return layout
  }
  return 'div'
})
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
