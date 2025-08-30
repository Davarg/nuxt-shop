<script setup lang="ts">
import type { Category } from "~/models/Category";
import type { Item } from "~/models/Item";

const selectedCategory = ref<Category | undefined>();

const config = useRuntimeConfig();

const itemsQuery = computed(() => {
  if (selectedCategory.value) {
    return {
      category_id: selectedCategory.value.id,
    };
  } else {
    return "";
  }
});

const { data: categoriesData } = await useFetch<{
  categories: Category[];
}>(config.public.apiBase + "/categories");

const { data: itemsData, refresh: itemsRefresh } = await useFetch<{
  products: Item[];
}>(config.public.apiBase + "/products", {
  query: itemsQuery,
});

const categoriesNames = computed(() => {
  return categoriesData.value?.categories.map((item) => item.name);
});

watch(
  selectedCategory,
  async () => {
    itemsRefresh();
  },
  { immediate: true }
);

function onCategorySelected(index: number) {
  if (categoriesData.value) {
    if (index >= categoriesData.value.categories.length) {
      return;
    }

    selectedCategory.value = categoriesData.value.categories[index];
  }
}
</script>

<template>
  <div :class="$style.main">
    <h1>Каталог товаров</h1>
    <div :class="$style.container">
      <div :class="$style.filters">
        <CommonSelect
          :class="$style.categories"
          :options="categoriesNames"
          default-value="Категория"
          @item-selected="onCategorySelected"
        />
      </div>
      <div :class="$style.content">
        <ItemList
          v-for="(item, index) in itemsData?.products"
          :key="index"
          :item="item"
          :is-favorite="false"
          :to="`/catalog/${item.id}`"
        />
      </div>
    </div>
  </div>
</template>

<style module>
.main {
  flex-grow: 1;
}

.container {
  margin-top: 39px;
  display: flex;
  flex-direction: row;
  gap: 35px;
}

.filters {
  display: flex;
  flex-direction: column;
}

.content {
  display: grid;
  grid-template-columns: 300px 1fr 300px;
  grid-template-rows: 372px;
  row-gap: 70px;
  column-gap: 24px;
  margin-bottom: 32px;
}

.categories {
  width: 16.3125rem;
}
</style>
