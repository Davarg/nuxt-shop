<script setup lang="ts">
import type { Item } from "~/models/Item";

useSeoMeta({
  title: "Любимки",
  description: "Котаны, это то, что вы любите",
  ogDescription: "Котаны, это то, что вы любите",
});

const favoritesStore = useFavoritesStore();
const config = useRuntimeConfig();

const { data: itemsData } = await useAsyncData<Item[]>(
  "get-favorites-items",
  async (): Promise<Item[]> => {
    if (!favoritesStore.items.length) {
      return [];
    }

    try {
      const responses = await Promise.all(
        favoritesStore.items.map((id) =>
          $fetch<{
            product: Item;
          }>(`${config.public.apiBase}/products/${id}`)
        )
      );

      return responses.map((response) => response.product);
    } catch (error) {
      console.log(error);
      return [];
    }
  },
  {
    watch: [() => favoritesStore.items],
  }
);
</script>

<template>
  <div :class="$style.main">
    <div :class="$style.container">
      <div :class="$style.content">
        <ItemList
          v-for="(item, index) in itemsData"
          :key="index"
          :item="item"
          :is-favorite="favoritesStore.items.includes(item.id)"
          :to="`/catalog/${item.id}`"
          :class="$style.item"
        />
      </div>
    </div>
  </div>
</template>

<style module>
.item {
  width: 280px;
}

.main {
  flex-grow: 1;
}

.container {
  margin-top: 39px;
  display: flex;
  flex-direction: row;
  gap: 35px;
}

.content {
  display: grid;
  grid-template-columns: 280px 1fr 1fr 280px;
  grid-template-rows: 368px;
  row-gap: 70px;
  column-gap: 24px;
  margin-bottom: 32px;
}

.categories {
  margin-top: 39px;
}
</style>
