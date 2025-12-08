<!-- ========  script section start her ====== -->
<script setup lang="ts">
    const isDark = ref(false)

    const toggleBg = () => {
        isDark.value = !isDark.value

        document.body.classList.toggle("dark-mode", isDark.value)
        document.body.classList.toggle("light-mode", !isDark.value)
    }

</script>




<!-- =====  template section start here ========= -->
<template>
   <section class="header_top">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="top_menu">
                    <div class="marketplace">
                        <ul>
                            <li><a href="">Fiver</a></li>
                            <li><a href="">UpWork</a></li>
                            <li><a href="">Envato</a></li>
                            <li><a href="">Codecanyon</a></li>
                        </ul>
                    </div>
                    <!-- end market place -->
                     <div class="social_media">
                        <ul>
                            <li><a href=""><i class="bi bi-facebook"></i></a></li>
                            <li><a href=""><i class="bi bi-twitter"></i></a></li>
                            <li><a href=""><i class="bi bi-linkedin"></i></a></li>
                            <li><a href=""><i class="bi bi-instagram"></i></a></li>
                            <li><a href=""><i class="bi bi-youtube"></i></a></li>
                            <li><a href=""><i class="bi bi-github"></i></a></li>
                            <li><a href="#" @click="toggleBg"><i class="bi bi-moon"></i></a></li>
                        </ul>
                     </div>
                </div>
            </div>
        </div>
    </div>
   </section>
</template>

<!-- ======== style section start here ========== -->
 <style scoped>

</style>