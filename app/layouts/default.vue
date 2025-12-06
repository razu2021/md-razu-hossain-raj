<!-- ========= script start here ========== -->
<script setup lang="ts">

    const isDark = ref(false)

    const toggleBg = () => {
        isDark.value = !isDark.value

        document.body.classList.toggle("dark-mode", isDark.value)
        document.body.classList.toggle("light-mode", !isDark.value)
    }


</script>


<!-- ========== Main Layouts  ============ -->
<template>
<!-- ============== hader top & main header import here ==========  -->
 <common-header-top/>
 <common-main-header/>



<!-- =================   main content load here ========== -->
    <slot />
   
<!-- =================   main content load here ========== -->
 
 <button @click="toggleBg">Switch Background</button>

<!-- =========== main footer load here ======= -->
 <common-main-footer/>
<!-- =========== main footer load here ======= -->
</template>


<!-- ==========  style ==================== -->
 <style scoped>


</style>