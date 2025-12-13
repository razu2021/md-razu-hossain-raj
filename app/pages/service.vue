<!-- ========  script section start her ====== -->
<script setup lang="ts">

</script>

<!-- =====  template section start here ========= -->
<template>
    <CommonBreadcrumb />

    <!-- service section  -->
    <section class="service_section">
        <div class="container">
            <div class="section_header">
                <h2>Our Services</h2>
                <p>We provide a wide range of professional digital services to help your business grow.</p>
            </div>

            <div class="service_cards_grid">
                <div class="service_card"
                    v-for="service in ['Web Design', 'Web Development', 'SEO', 'Wix', 'WordPress', 'Shopify']"
                    :key="service">
                    <div class="service_icon">
                        <!-- You can replace with real icon -->
                        <NuxtImg src="/blog/blog-img-3.jpg"></NuxtImg>
                    </div>
                    <h3>{{ service }}</h3>
                    <p>Professional {{ service }} service tailored for your business needs.</p>
                </div>
            </div>
        </div>
    </section>
    <!-- service section end here  -->
<section class="course_section">
  <div class="container">
    <div class="section_header">
      <h2>Our Courses</h2>
      <p>Explore our professional courses designed to help you master digital skills.</p>
    </div>

    <div class="course_cards_grid">
      <div class="course_card" v-for="course in ['Web Design', 'Web Development', 'SEO', 'WordPress', 'Shopify']" :key="course">
        <div class="course_icon">
          <NuxtImg src="/image7.png" alt="course icon" />
        </div>
        <h3>{{ course }}</h3>
        <p>Learn the essentials of {{ course }} with hands-on projects and expert guidance.</p>
      </div>
    </div>
  </div>
</section>
<!-- =========  course section end here ======== -->
<section class="why_choose_section_alt">
  <div class="container">
    <div class="section_header">
      <h2>Why Choose Us</h2>
      <p>Our clients love us because we focus on quality, efficiency, and support.</p>
    </div>

    <div class="benefits_list">
      <div class="benefit_item" v-for="benefit in [
        {title: 'Expert Team', icon: '/icons/team.png', desc: 'Skilled professionals delivering top-notch services.', color: '#007bff'},
        {title: 'Affordable Pricing', icon: '/icons/price.png', desc: 'High quality solutions at competitive rates.', color: '#28a745'},
        {title: 'Fast Delivery', icon: '/icons/fast.png', desc: 'Timely project completion every single time.', color: '#ffc107'},
        {title: '24/7 Support', icon: '/icons/support.png', desc: 'We are always available for your support needs.', color: '#fd7e14'}
      ]" :key="benefit.title">
        <div class="benefit_icon" :style="{backgroundColor: benefit.color}">
          <NuxtImg :src="benefit.icon" alt="icon" />
        </div>
        <div class="benefit_text">
          <h3>{{ benefit.title }}</h3>
          <p>{{ benefit.desc }}</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ============why chosse section start here ========== -->

</template>

<!-- ======== style section start here ========== -->
<style scoped>

</style>