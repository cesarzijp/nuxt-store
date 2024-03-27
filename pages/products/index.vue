<template>
  <div>
    <h1>This is product index</h1>
    <div>
      <div v-for="bike in productData">
        <NuxtLink :to="`/products/${bike.id}`">
          <div>
            <img :src="bike.img" width="200px" height="auto" />
            <h3>{{ bike.name }}</h3>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import cbike from "../../assets/cbike1.jpg";

const productData = ref([
  { name: "Cowboy Bike 1", img: cbike, id: "1" },
  { name: "Cowboy Bike 2", img: cbike, id: "2" },
  { name: "Cowboy Bike 3", img: cbike, id: "3" },
  { name: "Cowboy Bike 4", img: cbike, id: "4" },
]);
</script>

<style lang="scss" scoped></style>
