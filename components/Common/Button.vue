<script setup lang="ts">
import { ButtonStyle } from './ButtonStyle';

const { style, title } = defineProps<{
  style: ButtonStyle;
  title: string;
}>();
</script>

<template>
  <div
    class="button"
    :class="{
      light: style == ButtonStyle.Light,
      dark: style == ButtonStyle.Dark,
    }"
  >
    {{ title }}
  </div>
</template>

<style scoped>
.button {
  border: 1px solid var(--bg-inverse-color);
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
}

.light {
  background-color: var(--bg-color);
  color: var(--bg-inverse-color);
}

.light:hover{
  background-color: var(--bg-hover-color);
}

.dark {
  background-color: var(--bg-inverse-color);
  color: var(--bg-color);
}

.dark:hover{
  background-color: var(--bg-hover-inverse-color);
}
</style>
