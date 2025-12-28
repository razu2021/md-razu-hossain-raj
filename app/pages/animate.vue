<template>
 <h1 :style="{fontSize}" id="testfont"> hello , my name is razu hossain raj </h1>
 
  <p>set font size is : {{ fontSize }}</p>
 <button class="btn btn-success mx-2" @click="changeFontSize('10px')">10px</button>
 <button class="btn btn-success mx-2" @click="changeFontSize('20px')">20px</button>
 <button class="btn btn-success mx-2" @click="changeFontSize('30px')">30px</button>
 <button class="btn btn-success mx-2" @click="changeFontSize('40px')">40px</button>
 <button class="btn btn-success mx-2" @click="changeFontSize('60px')">60px</button>
  
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useNuxtApp , onPrehydrate} from "#app";
 


const fontSize = ref('80px')

onPrehydrate(()=>{
  const size = localStorage.getItem('fontSize') || '80px';
  
})



const changeFontSize = (size : string) =>{
  fontSize.value= size

  // --- save the font size in localstorage 
 

  localStorage.setItem('fontSize',size);
}

</script>

<style scoped>

</style>
