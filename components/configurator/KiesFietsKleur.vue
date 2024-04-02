<template>
  <div :data-checked="st.kleur" class="kleur-container">
    <input type="radio" value="black" id="black" v-model="st.kleur" />
    <label class="kleur-item kleur-zwart" for="black">
      <div class="kleur-cirkel"></div>
      Black</label
    >

    <input type="radio" value="sand" id="sand" v-model="st.kleur" />
    <label class="kleur-item kleur-sand" for="sand"
      ><div class="kleur-cirkel"></div>
      Sand</label
    >

    <input type="radio" value="clay" id="clay" v-model="st.kleur" />
    <label class="kleur-item kleur-clay" for="clay"
      ><div class="kleur-cirkel"></div>
      Clay</label
    >
  </div>
</template>

<script setup>
import { useFietsStore } from "~/stores/fietsstore";

const store = useFietsStore();
const { st, cross, classic } = storeToRefs(store);
</script>

<style lang="css" scoped>
.kleur-container input {
  display: none;
}

.kleur-cirkel {
  width: 40px;
  height: 40px;
  background: black;
  border-radius: 100px;
}

.kleur-container {
  display: flex;
  gap: 10px;
}

label.kleur-item {
  display: flex;
  gap: 10px;
  flex-direction: column;
  border: 2px solid #00000011;
  opacity: 0.7;
  padding: 10px 30px;
  border-radius: 11px;
  transition: all 0.2s ease-out;
}

div[data-checked="black"] label.kleur-item.kleur-zwart {
  border: 2px solid #000000;
  opacity: 1;
  background-color: #fff;
}

div[data-checked="sand"] label.kleur-item.kleur-sand {
  border: 2px solid #000000;
  opacity: 1;
  background-color: #fff;
}

div[data-checked="clay"] label.kleur-item.kleur-clay {
  border: 2px solid #000000;
  opacity: 1;
  background-color: #fff;
}

.kleur-sand .kleur-cirkel {
  background-color: #e7deca;
}

.kleur-clay .kleur-cirkel {
  background-color: #b88174;
}
</style>
