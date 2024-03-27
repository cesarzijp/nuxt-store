import { defineStore } from "pinia";

export const useCartStore = defineStore("cartstore", {
  state: () => {
    return {
      items: reactive([]),
    };
  },
  actions: {
    addToCart(item) {
      this.items = [item, ...this.items];
    },
  },
  persist: true,
});
