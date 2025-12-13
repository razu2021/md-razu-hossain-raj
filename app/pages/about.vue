<!-- ========  script section start her ====== -->
<script setup lang="ts">

</script>



<!-- =====  template section start here ========= -->
<template>
 <!-- ======== about section start here ======= -->
  <section class="about_section">
  <div class="container">
    <div class="about_wrapper">
      
      <!-- Left : Image -->
      <div class="about_image">
        <NuxtImg src="/5.png" alt="About Image" />
      </div>

      <!-- Right : Content -->
      <div class="about_content">
        <span class="about_tag">About Me</span>
        <h2>I Build Modern & Scalable Web Solutions</h2>
        <p>
          I am a passionate web developer specializing in modern web technologies.
          I help businesses and individuals build fast, user-friendly and scalable websites.
        </p>

        <ul class="about_points">
          <li>✔ Clean & modern UI design</li>
          <li>✔ SEO-friendly development</li>
          <li>✔ Fast loading & responsive layout</li>
          <li>✔ Long-term support</li>
        </ul>

        <div class="about_buttons">
          <NuxtLink to="/contact">Hire Me</NuxtLink>
          <NuxtLink to="/projects">View Projects</NuxtLink>
        </div>
      </div>

    </div>
  </div>
</section>
 <!-- ======== about section start here ======= -->
  <section class="skills_section">
  <div class="container">

    <div class="section_header">
      <span>Expertise</span>
      <h2>My Skills & Technologies</h2>
      <p>Technologies and tools I use to build modern, scalable and user-friendly products.</p>
    </div>

    <div class="skills_grid">

      <div class="skill_item">
        <h3>Web Design</h3>
        <p>Modern UI, UX focused design using Figma & responsive systems.</p>
        <span>UI / UX</span>
      </div>

      <div class="skill_item">
        <h3>Web Development</h3>
        <p>Fast, scalable websites using Nuxt, Vue & backend integration.</p>
        <span>Frontend</span>
      </div>

      <div class="skill_item">
        <h3>SEO Optimization</h3>
        <p>Search-engine friendly structure with performance optimization.</p>
        <span>Marketing</span>
      </div>

      <div class="skill_item">
        <h3>WordPress</h3>
        <p>Custom themes, plugins & business websites.</p>
        <span>CMS</span>
      </div>

      <div class="skill_item">
        <h3>Shopify</h3>
        <p>High-converting ecommerce stores & custom UI.</p>
        <span>E-commerce</span>
      </div>

      <div class="skill_item">
        <h3>Wix</h3>
        <p>Quick, clean websites for startups & small businesses.</p>
        <span>Builder</span>
      </div>

    </div>

  </div>
</section>
<!-- ============ skill end expertise section end here ======= -->
<section class="why_choose_compact">
  <div class="container">

    <div class="why_wrapper">

      <!-- Left Content -->
      <div class="why_content">
        <span class="section_tag">Why Choose Me</span>
        <h2>Focused on Quality, Performance & Results</h2>
        <p>
          I don’t just build websites — I build fast, scalable and user-focused digital experiences
          that help businesses grow.
        </p>

        <div class="why_list">
          <div class="why_item">
            <span>01</span>
            <div>
              <h4>Clean & Scalable Code</h4>
              <p>Well-structured, maintainable code following modern standards.</p>
            </div>
          </div>

          <div class="why_item">
            <span>02</span>
            <div>
              <h4>Performance First</h4>
              <p>Optimized loading speed, SEO & best practices.</p>
            </div>
          </div>

          <div class="why_item">
            <span>03</span>
            <div>
              <h4>Client-Friendly Communication</h4>
              <p>Clear updates, honest feedback and long-term support.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Visual -->
      <div class="why_visual">
        <div class="visual_box">
          <h3>3+</h3>
          <p>Years Experience</p>
        </div>
        <div class="visual_box">
          <h3>50+</h3>
          <p>Projects Done</p>
        </div>
        <div class="visual_box">
          <h3>100%</h3>
          <p>Client Satisfaction</p>
        </div>
      </div>

    </div>

  </div>
</section>
<!-- =========  why choose section end here  -->
 <section class="testimonial_section">
  <div class="container">

    <div class="section_header">
      <span>Testimonials</span>
      <h2>What Clients Say</h2>
      <p>Real feedback from people I’ve worked with on different projects.</p>
    </div>

    <div class="testimonial_grid">

      <div class="testimonial_card">
        <p class="quote">
          “Amazing experience! The project was delivered on time with outstanding quality.
          Communication was clear and professional.”
        </p>

        <div class="client_info">
          <NuxtImg src="/image1.png" alt="client" />
          <div>
            <h4>John Smith</h4>
            <span>Startup Founder</span>
          </div>
        </div>
      </div>

      <div class="testimonial_card highlight">
        <p class="quote">
          “Very skilled developer. Clean code, modern UI and strong understanding
          of performance and SEO.”
        </p>

        <div class="client_info">
          <NuxtImg src="/6.png" alt="client" />
          <div>
            <h4>Sarah Williams</h4>
            <span>Marketing Manager</span>
          </div>
        </div>
      </div>

      <div class="testimonial_card">
        <p class="quote">
          “Highly recommended! Fast delivery, great support and excellent attention to detail.”
        </p>

        <div class="client_info">
          <NuxtImg src="/image8.png" alt="client" />
          <div>
            <h4>David Lee</h4>
            <span>E-commerce Owner</span>
          </div>
        </div>
      </div>

    </div>

  </div>
</section>
<!-- ========  testimonial section end here  -->
<section class="cta_section">
  <div class="cta_container">

    <div class="cta_content">
      <span class="cta_badge">Let’s Work Together</span>
      <h2>
        Have a project in mind?  
        <br />
        Let’s build something great.
      </h2>
      <p>
        I help businesses and individuals create modern, fast and scalable
        digital products. Let’s discuss your idea.
      </p>

      <div class="cta_actions">
        <NuxtLink to="/contact" class="btn_primary">
          Get Free Consultation
        </NuxtLink>
        <NuxtLink to="/projects" class="btn_secondary">
          View Projects
        </NuxtLink>
      </div>
    </div>

  </div>
</section>
<!--  ======== Cta Section design  -->
<section class="section-padding">
    <div class="container">
    <!-- section heading  -->
     <CommonSectionHeading/>

    <!-- section heading  -->
<div class="accordion custom_accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the first item’s accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the second item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the third item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
    </div>
</section>
<!-- === faq or accordion section end here ======== -->
<section class="partner_section">
  <div class="container">
    <div class="partner_grid">

      <div class="partner_logo">
        <NuxtImg src="/image7.png" alt="Partner 1" />
      </div>

      <div class="partner_logo">
        <NuxtImg src="/image7.png" alt="Partner 2" />
      </div>

      <div class="partner_logo">
        <NuxtImg src="/image7.png" alt="Partner 3" />
      </div>

      <div class="partner_logo">
        <NuxtImg src="/image7.png" alt="Partner 4" />
      </div>

      <div class="partner_logo">
        <NuxtImg src="/image7.png" alt="Partner 5" />
      </div>

    </div>
  </div>
</section>
<!-- ======== partner or customer section end here=============== -->




</template>

<!-- ======== style section start here ========== -->
 <style scoped>

</style>