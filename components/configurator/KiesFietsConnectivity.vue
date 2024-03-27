<template>
  <input type="checkbox" id="connectivity" v-model="st.extraConnectivity" />
  <label for="connectivity">Extra Connectivity</label>
</template>

<script setup>
import { useFietsStore } from "~/stores/fietsstore";

const store = useFietsStore();
const { st, cross, classic } = storeToRefs(store);
</script>

<style lang="scss" scoped></style>
