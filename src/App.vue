<script setup>
import Navbar from './components/Navbar.vue';
import { RouterView } from 'vue-router';


</script>

<template>
  <!-- Navbar -->
  <Navbar />

  <!-- route based content -->
  <RouterView />

</template>

<style scoped></style>