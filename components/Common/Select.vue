<script setup lang="ts">
const { options, defaultValue } = defineProps<{
  options: string[] | undefined;
  defaultValue: string;
}>();

const currentlySelected = ref<string | undefined>();
const isOptionsOpen = ref<boolean>();

const emit = defineEmits<{
  (e: "itemSelected", value: number): void
}>();

function onSelectOption(index: number) {
  if (options) {
    if (index >= options.length) {
      return;
    }

    currentlySelected.value = options[index];
    isOptionsOpen.value = false;
    emit("itemSelected", index);
  }
}

function onSelectOptions() {
  isOptionsOpen.value = !isOptionsOpen.value;
}
</script>

<template>
  <div :class="$style.container">
    <div :class="$style.selection" @click="onSelectOptions">
      {{ currentlySelected == null ? defaultValue : currentlySelected }}
      <Icon class="icon" name="custom:chevron" size="0.5rem" />
    </div>
    <ul :class="[$style.options, isOptionsOpen && $style.opened]">
      <li
        v-for="(item, index) in options"
        :key="index"
        :class="$style.option"
        @click="onSelectOption(index)"
      >
        {{ item }}
        <div :class="$style.separator" />
      </li>
    </ul>
  </div>
</template>

<style module>
.container {
  position: relative;
  display: inline-block;
}

.selection {
  border: 1px solid var(--border-color);
  border-radius: 4px;
  cursor: pointer;
  height: 3.3125rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 12px;
  padding-right: 12px;
  justify-content: space-between;
}

.options {
  display: none;
  position: absolute;
  z-index: 1;
  min-width: 100%;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  padding-left: 12px;
  padding-right: 12px;
  background-color: var(--bg-hover-color);
  list-style: none;
  max-height: 261px;
  overflow-y: auto;
  scrollbar-width: thin;
}

.option {
  cursor: pointer;
  height: 2.3125rem;
  display: flex;
  flex-direction: column;
  justify-content: end;
}

.opened {
  display: block;
}

.separator {
  height: 1px;
  background-color: var(--bg-inverse-color);
  margin-top: 4px;
}

.option:last-child .separator {
  display: none;
}

.option:last-child {
  margin-bottom: 5px;
}
</style>
