<!-- ========  script section start her ====== -->
<script setup lang="ts">
    import { onMounted } from "vue";
    import Typed from 'typed.js';


    // --- import gsap for animation 
    const { $gsap, $SplitText,$ScrollTrigger } = useNuxtApp();

    onMounted(() => {
        const typed = new Typed("#typedEl", {
            strings: [
            "a Web Developer",
            "a Designer",
            "a Nuxt.js Expert",
            "a UI/UX Enthusiast"
            ],
            typeSpeed: 30,
            backSpeed: 20,
            backDelay: 1000,
            loop: true,
            smartBackspace: true,
            showCursor: false,
            cursorChar: "|"

        });



        // ======= text animation 
const element = document.querySelectorAll(".animate1, .animate2, .animate3, .animate4") ;

$SplitText.create(element, {
  type: "lines, words, chars",
  mask: "lines",
  autoSplit: true,
  onSplit(self) {
    const tl = $gsap.timeline({ repeat: -1, repeatDelay: 0.5 }); // infinite loop
    tl.from(self.words, {
      duration: 1,
      y: 100,
      autoAlpha: 0,
      stagger: {
    from: "random",
    axis: "x",
    ease: "power2.in",
    amount: 0.5
  }
   
    });
    tl.to(self.words, {
      duration: 1,
      y: -100,
      autoAlpha: 0,
      
      ease: "power1.in",
      delay: 1,
            stagger: {
    grid: [7,15],
    from: "random",
    axis: "x",
    ease: "power2.in",
    amount: 1.5
  }
    });
  }
});


// ========= scroll  Triger 
    const box = document.querySelectorAll(".box1, .box2");
    $gsap.from(box,{
    y: 100,
    autoAlpha: 0,
    scale: 0.25,
    stagger: 0.10,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".container",
        start: "top 100%",
        end:"bottom 10%",
        toggleActions: "play none none reverse",
        markers: true
    }
    });




      
    });


</script>


<!-- =====  template section start here ========= -->
<template>
    <section class="index_banner box3" >
        <div class="container" >
            <div class="row align-items-center">
                <div class="col-lg-7 col-md-7 col-12">
                    <div class="banner_content">
                        <h4 class="animate1" >Thank's for your <span>Kind</span></h4>
                        <h1>
                            HI, I'm Md Razu Hossain Raj <br />
                            <span id="typedEl"></span>
                        </h1>
                        <p class="animate2">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure commodi
                            officiis suscipit voluptatibus corporis rerum quos adipisci rem earum.
                        </p>
                            <div class="button1_nuxt">
                                <NuxtLink to="/about" class="animate4">About me</NuxtLink>
                            </div>
                    </div>
                </div>

                <div class="col-lg-5 col-md-5 col-12">
                    <div class="banner_image " >
                        <NuxtImg src="/6.png" class="image box1" />
                        <p class="animate3">I am a passionate Full-Stack Developer who transforms ideas into fast, scalable, and user-friendly digital experiences. I specialize in creating clean, modern UI on the front-end and building powerful, secure, and optimized systems on the back-end.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>





<!-- ======== style section start here ========== -->
 <style scoped>

</style>