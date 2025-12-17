<!-- ========= script start here ========== -->
<script setup lang="ts">
 import { onMounted,onBeforeUnmount } from "vue";

let smoother:any;






const showTop = ref(false);


//=======  use onmount .. its word after loaded all content 
onMounted(()=>{
    // --- import gsap plugin 
    const { $gsap, $SplitText,$ScrollTrigger,$ScrollSmoother } = useNuxtApp();
  
    const smoother = $ScrollSmoother.create({
        wrapper:"#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1.5,        // scroll smoothness (1–2 ideal)
        effects: true,      // data-speed / data-lag enable
        smoothTouch: 0.1    // mobile smooth
    })
    





})


// ========== use onBefore Mount 
onBeforeUnmount(()=>{
    smoother?.kill();
})




</script>


<!-- ========== Main Layouts  ============ -->
<template>
<div id="smooth-wrapper">
    <div id="smooth-content">

<!-- ============== hader top & main header import here ==========  -->
 <common-header-top/>
 <common-main-header/>



<!-- =================   main content load here ========== -->

<main>
<slot />
</main>
    
   
<!-- =================   main content load here ========== -->
 
 
<!-- =========== main footer load here ======= -->
 <common-main-footer/>
<!-- =========== main footer load here ======= -->

    </div>
</div>



</template>


<!-- ==========  style ==================== -->
 <style >


</style>