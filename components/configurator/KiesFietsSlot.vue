<template>
  <input type="radio" value="geen" id="geen" v-model="st.slot" />
  <label for="geen">Geen</label>

  <input type="radio" value="abus" id="abus" v-model="st.slot" />
  <label for="abus">Abus</label>

  <input type="radio" value="abuspro" id="abuspro" v-model="st.slot" />
  <label for="abuspro">Abuspro</label>
</template>

<script setup>
import { useFietsStore } from "~/stores/fietsstore";

const store = useFietsStore();
const { st, cross, classic } = storeToRefs(store);
</script>

<style lang="scss" scoped></style>
