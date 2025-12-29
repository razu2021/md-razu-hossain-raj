<template>
 <section class="section1" id="sectiontest">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <h1> Hello , this container in only for testing </h1>
          <h2>{{ appConfig.siteName }}</h2>
        </div>
      </div>
    </div>
 </section>
  
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useNuxtApp , onPrehydrate} from "#app";
import appConfig from "~/plugins/app.config";
 

 onPrehydrate(() => {
  document
    .getElementById('sectiontest')
    ?.classList.add('section2')
})


// onMounted(()=>{
//    onPrehydrate(() => {
//   document
//     .getElementById('sectiontest')
//     ?.classList.add('section1')
// })
// })

</script>

<style scoped>
.section1{
  background-color: red;
  padding: 20px;

}
.section2{
  opacity: 50%;
}
</style>
