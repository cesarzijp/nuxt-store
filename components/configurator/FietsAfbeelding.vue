<template>
  <div class="colour-switcher" :data-colour="st.kleur">
    <Transition>
      <img
        v-if="st.kleur === 'black'"
        :src="stblack"
        class="product-page-img"
      />
    </Transition>
    <Transition>
      <img v-if="st.kleur === 'sand'" :src="stsand" class="product-page-img" />
    </Transition>
    <Transition>
      <img v-if="st.kleur === 'clay'" :src="stclay" class="product-page-img" />
    </Transition>
  </div>
</template>

<script setup>
import stblack from "../../assets/cruiserst__black.png";
import stsand from "../../assets/cruiserst__sand.png";
import stclay from "../../assets/cruiserst__clay.png";
import { useFietsStore } from "~/stores/fietsstore";

const store = useFietsStore();
const { st, cross, classic } = storeToRefs(store);
</script>

<style lang="css" scoped>
.colour-switcher {
  width: 100%;
  position: relative;
}

img.product-page-img {
  position: absolute;
  width: 100%;
  height: auto;
  max-width: 100%;
}

.colour-switcher {
  min-height: 100vh;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.75s linear;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
