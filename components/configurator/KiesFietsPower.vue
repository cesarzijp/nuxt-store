<template>
  <input type="checkbox" id="extrapower" v-model="st.extraPower" />
  <label for="extrapower">Extra Power</label>
</template>

<script setup>
import { useFietsStore } from "~/stores/fietsstore";

const store = useFietsStore();
const { st, cross, classic } = storeToRefs(store);
</script>

<style lang="scss" scoped></style>
