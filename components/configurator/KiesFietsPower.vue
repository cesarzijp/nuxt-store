<template>
  <input type="checkbox" id="extrapower" v-model="st.extraPower" />
  <label class="option-card" :data-checked="st.extraPower" for="extrapower">
    <div class="option-header">
      <h4>Extra Power</h4>
      <span>€299</span>
    </div>

    <p>AdaptivePower, wireless phone charging and extra torque.</p></label
  >
</template>

<script setup>
import { useFietsStore } from "~/stores/fietsstore";

const store = useFietsStore();
const { st, cross, classic } = storeToRefs(store);
</script>

<style>
label.option-card input {
  display: none !important;
}

input#extrapower {
  display: none;
}

label.option-card {
  border: 2px solid #00000011;
  display: block;
  opacity: 0.7;
  padding: 10px;
  border-radius: 11px;
  transition: all 0.2s ease-out;
}

label.option-card h4 {
  margin: 0;
}

.option-header {
  display: flex;
  justify-content: space-between;
}

.option-header span {
  opacity: 1;
}

label.option-card p {
  opacity: 0.5;
  margin-top: 5px;
  margin-bottom: 0px;
}

label.option-card[data-checked="true"] {
  border: 2px solid #000000;
  opacity: 1;
  background-color: #fff;
}
</style>
