<!-- ========= script start here ========== -->
<script setup lang="ts">

    /**============ use Scroll Smoother ======= */
    const {smoother} = useScrollSmoother()

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
 <style scoped>

</style>