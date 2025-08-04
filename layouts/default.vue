<script setup lang="ts">
import Footer from './footer.vue';

</script>

<template>
  <div class="layout-container">
    <div>Шапка</div>
    <slot />
    <Footer />
  </div>
</template>

<style scoped>
.layout-container {
    height: calc(100vh - max(16px, 5vw));
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: max(8px, 2.5vw);
}
</style>
