<script setup lang="ts">
import ArrowIcon from "~/assets/icons/ArrowIcon.vue";

const data = defineModel<string>();
const { withAccessory, placeholder } = defineProps<{
  withAccessory: boolean;
  placeholder: string;
}>();
</script>

<template>
  <div class="container" :class="{ withAccessory: withAccessory }">
    <input class="input" :placeholder="placeholder" :model="data" />
    <ArrowIcon v-if="withAccessory" />
  </div>
</template>

<style scoped>
.container {
  border-bottom: 1px solid #d8d8d8;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
}

.input {
  height: 2.4375rem;
  border: none;
  outline: none;
  padding-bottom: 0.5rem;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 400;
  flex-grow: 2;
  color: var(--font-color);
}

.input::placeholder {
    color: var(--font-tertiary-color);
}

.withAccessory {
  border-bottom: 1px solid black;
}
</style>
