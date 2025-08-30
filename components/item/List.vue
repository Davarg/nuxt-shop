<script setup lang="ts">
import type { Item } from "~/models/Item";

const config = useRuntimeConfig();

const { item, isFavorite, to } = defineProps<{
  item: Item;
  isFavorite: boolean;
  to: string | undefined;
}>();

const price = computed(() => {
  if (item.discount > 0) {
    const oldPrice = Array.from(`${item.price} ₽`)
      .map((char) => char + "\u0336")
      .join("");

    return `\u00A0\u0336${oldPrice}\u00A0\u00A0\u00A0${
      item.price * (1 - item.discount / 100)
    } ₽`;
  } else {
    return `${item.price} ₽`;
  }
});

const imageStyle = computed(() => ({
  backgroundImage: `url(${config.public.imgBase}${item.images[0]})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  width: "100%",
  height: "300px",
  borderRadius: "8px",
  display: "flex",
  flexDirection: "row",
  justifyContent: item.discount > 0 ? "space-between" : "flex-end",
  padding: "16px",
}));
</script>

<template>
  <NuxtLink :to="to" :class="$style.container">
    <div :style="imageStyle">
      <div v-if="item.discount > 0" :class="$style.discount">
        {{ `- ${item.discount}%` }}
      </div>
      <Icon v-if="isFavorite" :class="$style.favorite" name="custom:favorite" />
    </div>
    <div :class="$style.title">{{ item.short_description }}</div>
    <div :class="$style.price">{{ price }}</div>
  </NuxtLink>
</template>

<style module>
.container {
  width: 300px;
  aspect-ratio: 1 / 1.3;
  background-color: var(--bg-color);
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.title {
  font-weight: 400;
  font-size: 1.25rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
}

.price {
  color: var(--accent-light-color);
  font-weight: 500;
  font-size: 1.25rem;
}

.favorite {
  color: var(--accent-light-color);
  height: 18px;
}

.discount {
  background-color: var(--accent-light-color);
  color: var(--bg-color);
  border-radius: 4px;
  width: 2.875rem;
  height: 1.5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 0.75rem;
}
</style>
