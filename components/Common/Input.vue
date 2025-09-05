<script setup lang="ts">
import ArrowIcon from "~/assets/icons/ArrowIcon.vue";

const model = defineModel<string | undefined>();
const { withAccessory, placeholder, type = undefined } = defineProps<{
  withAccessory: boolean;
  placeholder: string;
  type?: string | undefined;
}>();
</script>

<template>
  <div class="input-container" :class="{ withAccessory: withAccessory }">
    <input
      v-model="model"
      class="input"
      :placeholder="placeholder"
      :type="type"
    />
    <ArrowIcon v-if="withAccessory" />
  </div>
</template>

<style scoped>
.input-container {
  border-bottom: 1px solid var(--border-color);
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
