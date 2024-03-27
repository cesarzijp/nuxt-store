<template>
  <div>
    <h1>This is product {{ id }}</h1>
    <div class="product-page-container">
      <div class="product-page-left">
        <FietsAfbeelding />
      </div>

      <div class="product-page-sidebar">
        <h3>Configure your bike</h3>
        <h4>Color</h4>
        <KiesFietsKleur />
        <h4>Power</h4>
        <KiesFietsPower />
        <h4>Connectivity</h4>
        <KiesFietsConnectivity />
        <h4>Slot</h4>
        <KiesFietsSlot />
        <br />
        <p>{{ items }}</p>
        <button @click="handleAddToCart">Add to cart</button>
        <button @click="cartStore.$reset()">Reset cart</button>
        <ChildTest />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useFietsStore } from "~/stores/fietsstore";
import { useCartStore } from "~/stores/cartstore";
import ChildTest from "../../components/ChildTest.vue";
import FietsAfbeelding from "../../components/configurator/FietsAfbeelding.vue";
import KiesFietsKleur from "../../components/configurator/KiesFietsKleur.vue";
import KiesFietsSlot from "../../components/configurator/KiesFietsSlot.vue";
import KiesFietsPower from "~/components/configurator/KiesFietsPower.vue";
import KiesFietsConnectivity from "~/components/configurator/KiesFietsConnectivity.vue";
import { useRouter } from "vue-router";

const router = useRouter();
const { id } = useRoute().params;
const store = useFietsStore();
const cartStore = useCartStore();
const { st, cross, classic } = storeToRefs(store);
const { items } = storeToRefs(cartStore);
const { addToCart } = cartStore;

console.log("st", st.value);

const handleAddToCart = () => {
  // add to cart
  items.value.push(st.value);
  store.$reset();
  router.push({ path: "/checkout" });
};
</script>

<style lang="css" scoped>
.product-page-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
}

.product-page-left {
  width: 100%;
  position: relative;
}

.product-page-sidebar {
  width: 300px;
}
</style>
../../components/configurator/KiesFietsSlot.vue
