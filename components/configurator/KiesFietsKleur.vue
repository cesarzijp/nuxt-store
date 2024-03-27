<template>
  <input type="radio" value="black" id="black" v-model="st.kleur" />
  <label for="black">Black</label>

  <input type="radio" value="sand" id="sand" v-model="st.kleur" />
  <label for="sand">Sand</label>

  <input type="radio" value="clay" id="clay" v-model="st.kleur" />
  <label for="clay">Clay</label>
</template>

<script setup>
import { useFietsStore } from "~/stores/fietsstore";

const store = useFietsStore();
const { st, cross, classic } = storeToRefs(store);
</script>

<style lang="scss" scoped></style>
