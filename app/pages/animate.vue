<template>
  <section class="section hero">
    <h1 class="animate-title">Enterprise Smooth ScrollTrigger</h1>
    <p class="animate-text">Scroll down to see animations</p>
  </section>

  <section class="section about">
    <h2 class="animate-title">About Us</h2>
    <p class="animate-text">Lorem ipsum dolor sit amet...</p>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useNuxtApp } from "#app";

onMounted(() => {
  const { $gsap, $ScrollTrigger } = useNuxtApp();

  // Animate all titles
  const titles = document.querySelectorAll(".animate-title");
  titles.forEach((title) => {
    $gsap.from(title, {
      y: 50,
      autoAlpha: 0,
      duration: 1,
      scrollTrigger: {
        trigger: title,
        start: "top 80%",  // element top when reaches 80% of viewport
        end: "top 30%",
        toggleActions: "play none none reverse"
      }
    });
  });

  // Animate all paragraphs
  const texts = document.querySelectorAll(".animate-text");
  texts.forEach((text) => {
    $gsap.from(text, {
      y: 30,
      autoAlpha: 0,
      duration: 1,
      delay: 0.2,
      scrollTrigger: {
        trigger: text,
        start: "top 85%",
        end: "top 40%",
        toggleActions: "play none none reverse"
      }
    });
  });
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
