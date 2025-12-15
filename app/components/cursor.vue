<template>
  <div ref="cursor" class="cursor"></div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useNuxtApp } from "#app";

const cursor = ref<HTMLElement | null>(null);

onMounted(() => {
  const { $gsap } = useNuxtApp();

  // Smooth mouse follow
  const pos = { x: 0, y: 0 };
  const mouse = { x: 0, y: 0 };

  window.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  function animate() {
    pos.x += (mouse.x - pos.x) * 0.15;
    pos.y += (mouse.y - pos.y) * 0.15;

    if (cursor.value) {
      $gsap.set(cursor.value, { x: pos.x, y: pos.y });
    }

    requestAnimationFrame(animate);
  }

  animate();

  // Hover effect
  const hoverTargets = document.querySelectorAll("h1,h2,p,a, .hover-target");
  hoverTargets.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      if (cursor.value)
        $gsap.to(cursor.value, {
          scale: 3,
          background: "transparent",
          duration: 0.05,
        color: "#ff0055",
        });
    });
    el.addEventListener("mouseleave", () => {
      if (cursor.value)
        $gsap.to(cursor.value, {
          scale: 1,
          background: "transparent",
          duration: 0.05,
        });
    });
  });



  
});
</script>

<style scoped>
.cursor {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  transform: translate(-50%, -50%) scale(1);
  z-index: 9999;

  /* Neon border */
  border: 2px solid #ff0055;

  /* Semi-transparent glass look */
  background: rgba(255, 0, 85, 0.1);
  backdrop-filter: blur(-10px);

  /* Soft shadow for depth and glow */
box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;

  /* Smooth transform/hover animations */
  transition: transform 0.2s ease, background 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}

/* Hover effect for interactive elements */
.hover-target:hover ~ .cursor {
  transform: translate(-50%, -50%) scale(3);
  border-color: #ff33aa;
  background: rgba(255, 51, 170, 0.2);
  box-shadow: 
    0 0 15px rgba(255,51,170,0.8),
    0 0 30px rgba(255,51,170,0.6),
    0 0 50px rgba(255,51,170,0.4);
}

</style>
