<template>
  <div id="app">
    <h1>Calendrier de l'Avent</h1>
    <CalendarComponent />
  </div>
</template>

<script setup>
import CalendarComponent from './components/CalendarComponent.vue';
</script>

<style>
#app {
  text-align: center;
  margin-top: 20px;
}
.app {
  background-image: url(../src/assets/images/christmas-tree-6883263_1920.jpg);
  width: 100%;
  height: 100%;
}
</style>

