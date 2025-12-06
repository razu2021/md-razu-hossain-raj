<!-- ========  script section start her ====== -->
<script setup lang="ts">
    const toggleMenu = ref(false)
</script>



<!-- =====  template section start here ========= -->
<template>
   <section class="header">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="main_menu">
                    <div class="logo">
                        <NuxtLink to="/"><h4>Ra<span>zu</span> </h4></NuxtLink>
                    </div>
                    <ul :class="['nav_links', toggleMenu ? 'show' : '']">
                        <li><NuxtLink to="/">Home</NuxtLink></li>
                        <li><NuxtLink to="/about">About</NuxtLink></li>
                        <li><NuxtLink to="/service">Service</NuxtLink></li>
                        <li><NuxtLink to="/project-showcase">Project</NuxtLink></li>
                        <li><NuxtLink to="/resume-of-md-razu-hossain-raj">Resume</NuxtLink></li>
                        <li><NuxtLink to="/blog">Blog</NuxtLink></li>
                        <li><NuxtLink to="/contact">Contact</NuxtLink></li>
                    </ul>
                    <div class="chat-me">
                        <button><a href="#">Let's Talk </a></button>
                    </div>
                    <!-- movile toggler  -->
                    <div class="menu_toggle" @click="toggleMenu = !toggleMenu">
                    <span></span><span></span><span></span>
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