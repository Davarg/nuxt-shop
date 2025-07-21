<script setup lang="ts">
import type { NuxtError } from "#app";
import { ButtonStyle } from "./components/Common/ButtonStyle";

const { error } = defineProps<{
  error: NuxtError;
}>();
</script>

<template>
  <div class="container">
    <div class="content">
      <div class="header">
        <div v-if="error.statusCode == 404" class="title">404 ошибка</div>
        <div v-else class="title">418 ошибка</div>
        <div class="subtitle">
          Страница не найдена, попробуйте перейти на главную страницу
        </div>
      </div>
      <NuxtLink to="/">
        <CommonButton
          :style="ButtonStyle.Light"
          title="Главная страница"
          class="error-button"
        />
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
a {
  text-decoration: none;
}

.container {
  width: 100vw;
  height: 100vh;
  background-color: var(--background-color);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: max(16px, 5vw);
  box-sizing: border-box;
}

.content {
  height: 247px;
  max-width: 436px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}

.title {
  font-size: 2.0625rem;
  font-weight: 500;
  color: var(--font-color);
}

.subtitle {
  font-size: 1.25rem;
  font-weight: 400;
  color: var(--font-tertiary-color);
  text-align: center;
}

.error-button {
  width: 11.6875rem;
  height: 3.3125rem;
}
</style>
