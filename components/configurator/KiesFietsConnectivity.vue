<template>
  <input type="checkbox" id="connectivity" v-model="st.extraConnectivity" />
  <label
    class="option-card"
    :data-checked="st.extraConnectivity"
    for="connectivity"
  >
    <div class="option-header">
      <h4>Extra Connectivity</h4>
      <span>€199</span>
    </div>

    <p>Fitness integration, Apple Healthkit and crash detection.</p></label
  >
</template>

<script setup>
import { useFietsStore } from "~/stores/fietsstore";
import { watch } from "vue";

const store = useFietsStore();
const { st, cross, classic } = storeToRefs(store);
</script>

<style lang="css" scoped>
input#connectivity {
  display: none;
}
</style>
