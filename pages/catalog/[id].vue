<script setup lang="ts">
import type { Item } from "~/models/Item";

const route = useRoute();
const id = ref(route.params.id);
const config = useRuntimeConfig();

const { product } = await $fetch<{ product: Item }>(
  `${config.public.apiBase}/products/${id.value}`
);

useSeoMeta({
  title: `Купить - ${product.short_description}`,
  description: `Котаны, не жмотись, покупай ${product.short_description}`,
  ogDescription: `Котаны, не жмотись, покупай ${product.short_description}`,
});
</script>

<template>
  <div>Hello {{ product.short_description }}</div>
</template>
