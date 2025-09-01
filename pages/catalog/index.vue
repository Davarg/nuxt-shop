<script setup lang="ts">
import type { Category } from "~/models/Category";
import type { Item } from "~/models/Item";

const selectedCategory = ref<Category | undefined>();
const selectedCategoryTitle = ref<string | undefined>();
const config = useRuntimeConfig();
const route = useRoute();
const router = useRouter();

const query = computed(() => {
  return {
    category_id: route.query.category_id || undefined,
    limit: route.query.limit ?? 20,
    offset: route.query.offset ?? 0,
  };
});

const { data: categoriesData } = await useFetch<{
  categories: Category[];
}>(config.public.apiBase + "/categories");

const { data: itemsData } = await useFetch<{
  products: Item[];
}>(config.public.apiBase + "/products", {
  query,
});

if (route.query.category_id) {
  if (categoriesData.value?.categories.length) {
    const item = categoriesData.value.categories.find((item) => {
      return item.id.toString() == route.query.category_id;
    });

    if (item) {
      selectedCategory.value = item;
      selectedCategoryTitle.value = item.name;
    }
  }
}

watch(
  () => route.query.category_id,
  (id) => {
    if (!id) {
      selectedCategory.value = undefined;
      selectedCategoryTitle.value = undefined;
    }
  }
);

watch(selectedCategory, () => {
  router.replace({ query: { category_id: selectedCategory.value?.id ?? "" } });
});

watch(selectedCategoryTitle, () => {
  selectedCategory.value = categoriesData.value?.categories.find((item) => {
    return item.name === selectedCategoryTitle.value;
  });
});

const categoriesNames = computed(() => {
  return categoriesData.value?.categories.map((item) => item.name);
});
</script>

<template>
  <div :class="$style.main">
    <h1>Каталог товаров</h1>
    <div :class="$style.container">
      <div :class="$style.filters">
        <CommonSelect
          v-model="selectedCategoryTitle"
          :class="$style.categories"
          :options="categoriesNames"
          default-value="Категория"
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
