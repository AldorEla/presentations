<template>
  <component :is="layout">
    <div class="pinia">
      <h1>Pinia page is using the DefaultLayout.</h1>
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
  .pinia {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
