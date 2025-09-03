import { defineStore } from "pinia";

export const useFavoritesStore = defineStore(
  "favorites",
  () => {
    const items = ref<number[]>([]);

    function addItem(id: number) {
      if (!items.value.includes(id)) {
        items.value.push(id);
      }
    }

    function removeItem(id: number) {
      items.value = items.value.filter((item) => item != id);
    }

    function toggleItem(id: number) {
      if (items.value.includes(id)) {
        removeItem(id);
      } else {
        addItem(id);
      }
    }

    return { items, addItem, removeItem, toggleItem };
  },
  {
    persist: true,
  }
);
