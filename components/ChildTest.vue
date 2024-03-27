<template>
  <div>{{ st }}</div>
</template>

<script setup>
import { useFietsStore } from "~/stores/fietsstore";
const store = useFietsStore();
const { st, cross, classic } = storeToRefs(store);

console.log("st", st.value);
</script>

<style lang="scss" scoped></style>
