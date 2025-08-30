<script setup lang="ts">
import Footer from './footer.vue';
import Header from './header.vue';

</script>

<template>
  <div :class="$style.container">
    <Header />
    <slot />
    <Footer />
  </div>
</template>

<style module>
.container {
    height: calc(100vh - max(16px, 5vw));
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: max(8px, 1.5vw);
    margin-bottom: max(4px, 0.75vw);
}
</style>
