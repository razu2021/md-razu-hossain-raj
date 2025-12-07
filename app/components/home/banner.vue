<!-- ========  script section start her ====== -->
<script setup lang="ts">
    import { onMounted } from "vue";
    import Typed from 'typed.js';

    onMounted(() => {
        const typed = new Typed("#typed", {
            strings: [
            "a Web Developer",
            "a Designer",
            "a Nuxt.js Expert",
            "a UI/UX Enthusiast"
            ],
            typeSpeed: 60,
            backSpeed: 40,
            backDelay: 1000,
            loop: true,
            smartBackspace: true,
            showCursor: true,
            cursorChar: "|"
        });
    });


</script>



<!-- =====  template section start here ========= -->
<template>
    <section class="index_banner">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-7 col-md-7 col-12">
                    <div class="banner_content">
                        <h4>Thank's for your <span>Kind</span></h4>
                        <h1>
                            HI, I'm Md Razu Hossain Raj <br />
                            <span id="typed"></span>
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure commodi
                            officiis suscipit voluptatibus corporis rerum quos adipisci rem earum.
                        </p>
                            <div class="button1_nuxt">
                                <NuxtLink to="/about">About me</NuxtLink>
                            </div>
                    </div>
                </div>

                <div class="col-lg-5 col-md-5 col-12">
                    <div class="banner_image ">
                        <NuxtImg src="/6.png" class="image" />
                        <p class="">I am a passionate Full-Stack Developer who transforms ideas into fast, scalable, and user-friendly digital experiences. I specialize in creating clean, modern UI on the front-end and building powerful, secure, and optimized systems on the back-end.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<!-- ======== style section start here ========== -->
 <style scoped>

</style>