<script setup lang="ts">
import { onMounted } from "vue";
import { SplitText } from "gsap/SplitText";
/**----- gsap anitamiton start  here ------------- */
onMounted(() => {
  const { $gsap} = useNuxtApp(); 

const split = new SplitText(".splittext1", { type: "words,chars,lines" });
  $gsap.from(split.chars, {
    duration: 1,
    y: 70,
    x:20,
    autoAlpha: 0,
    stagger: 0.05,
    ease: "back.out(1.7)"
  });









    const t1 = $gsap.timeline({
        repeat:-1,
        yoyo:false ,
         ease: "none"
    });

t1.to(".text1", {
  duration: 8,
  text: "Text with Color Change",
  color: "#000",
  opacity: 1,
  ease: "power1.out",
  type: "diff"
});







});


</script>

<template>
   <h1 class="text1">Md Razu Hososain Raj </h1>


   <div>
        <h1 class="splittext1"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet id quis officiis voluptatem tempora dicta qui quas dolore non saepe odio laudantium numquam accusantium architecto, eius ipsum! Error, fugit qui.</h1>
   </div>
</template>


<style scoped>
.text1{
    
    background-color: red;
    padding:10px;
    text-align: center;
    text-transform: uppercase;
    color: white;
}


</style>