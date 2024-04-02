<template>
  <div>
    <MenuNav />
    <Container>
      <slot></slot>
    </Container>

    <!-- <div>Dit is de footer</div> -->
  </div>
</template>

<script setup>
import Container from "~/components/Container.vue";
import MenuNav from "../components/configurator/MenuNav.vue";
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
  background-color: #f7f7f7;
}

.nav-bar {
  padding: 24px 0;
  background: #232323;
}

.nav-bar a {
  color: white;
  opacity: 0.5;
}

a.router-link-active {
  opacity: 1;
}

.container {
  max-width: 1100px;
  padding: 0 20px;
  display: block;
  margin: 0 auto;
}
</style>
