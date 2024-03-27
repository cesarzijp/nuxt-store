<template>
  <div class="cart-item-container">
    <img
      class="cart-item-img"
      width="100px"
      :src="'/' + itemData.imgPrefix + itemData.kleur + '.png'"
    />
    <div class="cart-info">
      <h4>{{ itemData.name }} {{ itemData.kleur }}</h4>

      <span>{{ itemData.priceCurrency }} {{ itemData.price }}</span>
    </div>
  </div>
</template>

<script setup>
defineProps(["itemData"]);
</script>

<style lang="css" scoped>
.cart-item-container {
  display: flex;
  flex-direction: row;
  align-content: flex-start;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  padding: 10px;
  border: 1px solid #0000002e;
  border-radius: 10px;
}

img.cart-item-img {
  width: 100px;
  height: auto;
  display: block;
}

.cart-item-container h4 {
  margin-bottom: 5px;
  margin-top: 0;
}

.cart-item-container span {
  color: gray;
}
</style>
