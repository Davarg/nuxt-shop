<script setup lang="ts">
const model = defineModel<string | undefined>();
const { placeholder } = defineProps<{
  placeholder: string;
}>();
</script>

<template>
  <div :class="$style.input_container">
    <input v-model="model" :class="$style.input" :placeholder="placeholder" />
    <Icon name="simple-line-icons:magnifier" size="1.125rem" />
  </div>
</template>

<style module>
.input_container {
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
</style>
