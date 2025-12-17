<template>
 
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useNuxtApp } from "#app";
 


onMounted(() => {
  const { $gsap, $ScrollTrigger,$ScrollSmoother } = useNuxtApp();

 const smoother = $ScrollSmoother.get();
console.log("Wrapper element:", smoother);

});
</script>

<style scoped>
.section {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}

.animate-title {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.animate-text {
  font-size: 1.2rem;
  max-width: 600px;
  text-align: center;
}
</style>
