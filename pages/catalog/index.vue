<script setup lang="ts">
import type { Category } from "~/models/Category";

const config = useRuntimeConfig();
const { data } = await useFetch<{
  categories: Category[];
}>(config.public.apiBase + "/categories");

const categoriesNames = computed(() => {
  return data.value?.categories.map((item) => item.name);
});

function onCategorySelected(index: number) {
  console.log(index);
}
</script>

<template>
  <div>
    <div>Catalog</div>
    <CommonSelect
      :class="$style.categories"
      :options="categoriesNames"
      default-value="Категория"
      @item-selected="onCategorySelected"
    />
  </div>
</template>

<style module>
.categories {
  width: 16.3125rem;
}
</style>
