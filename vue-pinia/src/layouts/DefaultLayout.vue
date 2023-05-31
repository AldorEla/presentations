<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <MainNavigation />
    </div>
  </header>

  <slot></slot>
</template>

<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import MainNavigation from './parts/MainNavigation.vue'
import { computed } from 'vue'

const route = useRoute()
/**
 *  This is a computed property that will return the name
 *  of the current route
 */
const layout = computed(() => {
  const layout = route?.meta?.layout

  if (layout) {
    return layout.component
  }
  return 'div'
})
</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
