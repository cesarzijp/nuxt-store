<template>
  <div>
    <h1>This is product index</h1>
    <div class="fiets-grid">
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

<style scoped>
.fiets-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10px;
}

.fiets-grid > div {
  width: calc(33.33% - 10px);

  box-sizing: border-box;
  background: white;
}

.fiets-grid a {
  color: gray;
  border: 1px solid #80808063;
  border-radius: 25px;
  display: block;
  text-decoration: none;
  transition: 0.4s ease;
  padding: 9px 31px !important;
}

.fiets-grid a:hover {
  color: black;
}
</style>
