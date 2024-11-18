<template>
  <div class="day" :class="{ opened: isOpened }">
    <button :disabled="!isAvailable" @click="openSurprise">
      {{ day }}
    </button>
  </div>
</template>

<script setup>
import { useStorage } from '@vueuse/core';
//import { ref } from 'vue';
import { computed } from 'vue';
/* eslint-disable */
// Props
const props = defineProps({
  day: Number,
  surprise: String
});
const emit = defineEmits(['openSurprise']);

// Check if the day's window has been opened (use localStorage)
const isOpened = useStorage(`opened-${props.day}`, false);

// Check if the day is available based on the current date
const isAvailable = computed(() => {
  const today = new Date();
  return today.getDate() >= props.day && today.getMonth() === 10; // Only for December days
});

// Function to open the surprise
const openSurprise = () => {
  isOpened.value = true; // Mark day as opened
  emit('openSurprise', props.day, props.surprise);
};
/* eslint-disable */
</script>

<style scoped>
.day {
  position: relative;
  padding: 20px;
  text-align: center;
  background-color: #eee;
  border: 1px solid #ddd;
  cursor: pointer;
  width: 100%;
  height: 100%;
}
.day.opened {
  background-color: green; /* Mark opened days */
}
button:disabled {
  cursor: not-allowed;
}
</style>
