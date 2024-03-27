<template>
  <div>
    <h1>Checkout</h1>
    <div class="checkout-page-container">
      <div class="checkout-left">
        <p>Form komt hier...</p>
        <button @click="handleAfrekenen">Afrekenen</button>
      </div>
      <div class="checkout-right">
        <h2>Cart</h2>
        <p>{{ items }}</p>
        <CartItem v-for="item in items" :itemData="item" />
        <button @click="handleCartReset">Reset cart</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import CartItem from "~/components/cart/CartItem.vue";
import { useCartStore } from "~/stores/cartstore";

const router = useRouter();

const cartStore = useCartStore();
const { items } = storeToRefs(cartStore);

const handleCartReset = () => {
  cartStore.$reset();
  router.push("/");
};

const handleAfrekenen = async () => {
  const payment = await $fetch("/api/payment", {
    method: "post",
    body: {
      value: items.value[0].price,
      description: `${items.value[0].name}, kleur: ${items.value[0].kleur} `,
    },
  });
  console.log(payment);
  window.location.href = payment._links.checkout.href;
};
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
