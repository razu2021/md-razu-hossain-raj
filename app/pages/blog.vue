<!-- ========  script section start her ====== -->
<script setup lang="ts">

</script>



<!-- =====  template section start here ========= -->
<template>
    <CommonBreadcrumb/>



<section class="blog-filter section-padding">
  <div class="container d-flex justify-content-between align-items-center flex-wrap">
    <div class="category-filter">
      <button class="filter-btn active">All</button>
      <button class="filter-btn">Tech</button>
      <button class="filter-btn">Design</button>
      <button class="filter-btn">Marketing</button>
    </div>
    <div class="search-box">
      <input type="text" class="search-input" placeholder="Search articles...">
    </div>
  </div>
</section>

<section class="blog-main section-padding">
  <div class="container">
    <div class="row">

      <!-- Blog Grid -->
      <div class="col-lg-8">
        <div class="row g-4">
          <!-- Blog Card -->
          <div class="col-md-6">
            <div class="blog-card">
              <NuxtImg src="/blog/blog-img-1.jpg"></NuxtImg>
              <div class="blog-content">
                <h3 class="blog-title">Understanding Modern Web Design</h3>
                <p class="blog-excerpt">Learn the principles of modern web design, including UX/UI, responsive layouts, and aesthetics.</p>
                <a href="#" class="read-more">Read More →</a>
              </div>
            </div>
          </div>

          <div class="col-md-6">
            <div class="blog-card">
              <NuxtImg src="/blog/blog-img-1.jpg"></NuxtImg>
              <div class="blog-content">
                <h3 class="blog-title">Top 10 UI/UX Tips</h3>
                <p class="blog-excerpt">Discover essential UI/UX tips to make your website more user-friendly and visually appealing.</p>
                <a href="#" class="read-more">Read More →</a>
              </div>
            </div>
          </div>
          <!-- end  -->
          <div class="col-md-6">
            <div class="blog-card">
              <NuxtImg src="/blog/blog-img-1.jpg"></NuxtImg>
              <div class="blog-content">
                <h3 class="blog-title">Top 10 UI/UX Tips</h3>
                <p class="blog-excerpt">Discover essential UI/UX tips to make your website more user-friendly and visually appealing.</p>
                <a href="#" class="read-more">Read More →</a>
              </div>
            </div>
          </div>
          <!-- end  -->
          <div class="col-md-6">
            <div class="blog-card">
              <NuxtImg src="/blog/blog-img-1.jpg"></NuxtImg>
              <div class="blog-content">
                <h3 class="blog-title">Top 10 UI/UX Tips</h3>
                <p class="blog-excerpt">Discover essential UI/UX tips to make your website more user-friendly and visually appealing.</p>
                <a href="#" class="read-more">Read More →</a>
              </div>
            </div>
          </div>
          <!-- end  -->

          <!-- Add more blog cards as needed -->
        </div>
      </div>

      <!-- Sidebar -->
      <div class="col-lg-4">
        <div class="sidebar">

          <div class="widget recent-posts">
            <h4>Recent Posts</h4>
            <ul>
              <li><a href="#">How to Improve Website Speed</a></li>
              <li><a href="#">Design Trends 2025</a></li>
              <li><a href="#">SEO Basics for Beginners</a></li>
            </ul>
          </div>

          <div class="widget popular-posts">
            <h4>Popular Posts</h4>
            <ul>
              <li><a href="#">UI/UX Mistakes to Avoid</a></li>
              <li><a href="#">Responsive Design Tips</a></li>
              <li><a href="#">Branding Your Business Online</a></li>
            </ul>
          </div>

          <div class="widget newsletter">
            <h4>Subscribe to Newsletter</h4>
            <input type="email" placeholder="Enter your email" class="newsletter-input">
            <button class="newsletter-btn">Subscribe</button>
          </div>

          <div class="widget social-links">
            <h4>Follow Us</h4>
            <div class="social-wrapper">
              <a href="#" class="social-icon facebook"><i class="bi bi-facebook"></i></a>
              <a href="#" class="social-icon instagram"><i class="bi bi-instagram"></i></a>
              <a href="#" class="social-icon twitter"><i class="bi bi-twitter"></i></a>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
</section>

<section class="blog-pagination text-center section-padding">
  <button class="page-btn">1</button>
  <button class="page-btn">2</button>
  <button class="page-btn">3</button>
  <button class="page-btn">Next →</button>
</section>

<section class="blog-cta section-padding text-center">
  <h2>Stay Updated</h2>
  <p>Subscribe to our newsletter and never miss a post!</p>
  <input type="email" placeholder="Enter your email" class="cta-input">
  <button class="cta-btn">Subscribe</button>
</section>
<!-- ==========  blog section end here ============ -->
</template>

<!-- ======== style section start here ========== -->
 <style scoped>

</style>