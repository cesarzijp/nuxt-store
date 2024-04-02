<template>
  <div class="nav-bar">
    <Container>
      <nav class="nav-inner">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/checkout">Checkout</NuxtLink>
      </nav>
    </Container>
  </div>
</template>

<script setup>
import Container from "../Container.vue";
</script>

<style scoped>
nav.nav-inner {
  display: flex;
  gap: 20px;
}

nav.nav-inner a {
  text-decoration: none;
}
</style>
