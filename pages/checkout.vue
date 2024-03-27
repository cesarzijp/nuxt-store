<template>
  <div>
    <h1>Checkout</h1>
    <div class="checkout-page-container">
      <div class="checkout-left">
        <p>Form komt hier...</p>
      </div>
      <div class="checkout-right">
        <h2>Cart</h2>
        <p>{{ items }}</p>
        <CartItem v-for="item in items" :itemData="item" />
      </div>
    </div>
  </div>
</template>

<script setup>
import CartItem from "~/components/cart/CartItem.vue";
import { useCartStore } from "~/stores/cartstore";

const cartStore = useCartStore();
const { items } = storeToRefs(cartStore);
</script>

<style scoped>
.checkout-page-container {
  display: flex;
}

.checkout-left {
  width: 100%;
}

.checkout-right {
  width: 400px;
}
</style>
