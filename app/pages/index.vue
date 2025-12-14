<script setup lang="ts">

</script>

<template>
    <!-- banner  -->
    <HomeBanner />

    <!-- =========================== about section ============== -->
    <!-- ===== About Section (Bootstrap 5 + SCSS | Home Page) ===== -->
    <section class="about-section py-5">
        <div class="container">
            <div class="row align-items-center g-4">
                <!-- Left Content -->
                <div class="col-lg-6">
                    <span class="about-subtitle">ABOUT ME</span>
                    <h2 class="about-title">I Build Modern & Scalable Web Applications</h2>
                    <p class="about-text">
                        I’m a passionate web developer specializing in Laravel and modern frontend
                        technologies like Vue and Nuxt. I focus on writing clean, maintainable code
                        and building user-friendly digital products.
                    </p>
                    <p class="about-text">
                        From small business websites to complex web applications, I enjoy turning
                        ideas into real-world solutions that are fast, secure, and scalable.
                    </p>

                    <div class="about-stats">
                        <div class="stat-item">
                            <h4>3+</h4>
                            <span>Years Experience</span>
                        </div>
                        <div class="stat-item">
                            <h4>50+</h4>
                            <span>Projects Done</span>
                        </div>
                        <div class="stat-item">
                            <h4>30+</h4>
                            <span>Happy Clients</span>
                        </div>
                    </div>

                    <a href="#" class="btn btn-primary mt-3">More About Me</a>
                </div>

                <!-- Right Visual -->
                <div class="col-lg-6">
                    <div class="about-card">
                        <ul>
                            <li>✔ Clean & Maintainable Code</li>
                            <li>✔ Responsive & Mobile-First Design</li>
                            <li>✔ REST API & Backend Logic</li>
                            <li>✔ Performance & SEO Friendly</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- ===== Skills / Tech Stack (Bootstrap 5 + SCSS | Category Cards) ===== -->
    <section class="skills-section py-5">
        <div class="container">
            <div class="row mb-5">
                <div class="col text-center">
                    <h2 class="section-title">Skills & Tech Stack</h2>
                    <p class="section-desc">Tools & technologies I work with on a regular basis</p>
                </div>
            </div>

            <div class="row g-4">
                <!-- Frontend -->
                <div class="col-md-6 col-lg-3">
                    <div class="skill-category-card">
                        <h5 class="category-title">Frontend</h5>
                        <div class="skill-list">
                            <span class="skill-badge">HTML5</span>
                            <span class="skill-badge">CSS3 / SCSS</span>
                            <span class="skill-badge">JavaScript</span>
                            <span class="skill-badge">Vue.js</span>
                            <span class="skill-badge">Nuxt.js</span>
                            <span class="skill-badge">Bootstrap 5</span>
                        </div>
                    </div>
                </div>

                <!-- Backend -->
                <div class="col-md-6 col-lg-3">
                    <div class="skill-category-card">
                        <h5 class="category-title">Backend</h5>
                        <div class="skill-list">
                            <span class="skill-badge">PHP</span>
                            <span class="skill-badge">Laravel</span>
                            <span class="skill-badge">REST API</span>
                            <span class="skill-badge">Authentication</span>
                        </div>
                    </div>
                </div>

                <!-- Database -->
                <div class="col-md-6 col-lg-3">
                    <div class="skill-category-card">
                        <h5 class="category-title">Database</h5>
                        <div class="skill-list">
                            <span class="skill-badge">MySQL</span>
                            <span class="skill-badge">Schema Design</span>
                            <span class="skill-badge">Query Optimization</span>
                            <span class="skill-badge">Migration</span>
                        </div>
                    </div>
                </div>

                <!-- Tools -->
                <div class="col-md-6 col-lg-3">
                    <div class="skill-category-card">
                        <h5 class="category-title">Tools</h5>
                        <div class="skill-list">
                            <span class="skill-badge">Git</span>
                            <span class="skill-badge">GitHub</span>
                            <span class="skill-badge">VS Code</span>
                            <span class="skill-badge">Postman</span>
                            <span class="skill-badge">Figma</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <HomeOffer />




    <!-- ===== Project Types / What I Build Section ===== -->
    <section class="project-types-section py-5 position-relative overflow-hidden">
        <div class="container position-relative z-1">
            <div class="row mb-5 text-center">
                <div class="col">
                    <span class="section-caption">My Expertise</span>
                    <h2 class="section-title">What I Build</h2>
                    <p class="section-desc">From sleek corporate sites to custom applications, these are the types of
                        projects I deliver with modern design & innovation.</p>
                </div>
            </div>

            <div class="row g-4">
                <div class="col-6 col-md-4 col-lg-3">
                    <div class="project-type-card">
                        <div class="card-icon">🏢</div>
                        <h5>Corporate Website</h5>
                        <p>Professional websites for businesses and organizations.</p>
                    </div>
                </div>

                <div class="col-6 col-md-4 col-lg-3">
                    <div class="project-type-card">
                        <div class="card-icon">🛒</div>
                        <h5>E‑commerce Website</h5>
                        <p>Online stores with seamless payment and product management.</p>
                    </div>
                </div>

                <div class="col-6 col-md-4 col-lg-3">
                    <div class="project-type-card">
                        <div class="card-icon">🏥</div>
                        <h5>Hospital / Clinic Website</h5>
                        <p>Healthcare portals with appointment scheduling and info management.</p>
                    </div>
                </div>

                <div class="col-6 col-md-4 col-lg-3">
                    <div class="project-type-card">
                        <div class="card-icon">📝</div>
                        <h5>Blog Website</h5>
                        <p>Engaging blogs with responsive design and CMS integration.</p>
                    </div>
                </div>

                <div class="col-6 col-md-4 col-lg-3">
                    <div class="project-type-card">
                        <div class="card-icon">🌍</div>
                        <h5>Tourism Website</h5>
                        <p>Travel and tourism sites with booking and showcase features.</p>
                    </div>
                </div>

                <div class="col-6 col-md-4 col-lg-3">
                    <div class="project-type-card">
                        <div class="card-icon">💼</div>
                        <h5>Job / Career Portal</h5>
                        <p>Job portals with listings, applications, and employer dashboards.</p>
                    </div>
                </div>

                <div class="col-6 col-md-4 col-lg-3">
                    <div class="project-type-card">
                        <div class="card-icon">🎨</div>
                        <h5>Portfolio Website</h5>
                        <p>Showcase personal or professional projects with style.</p>
                    </div>
                </div>

                <div class="col-6 col-md-4 col-lg-3">
                    <div class="project-type-card">
                        <div class="card-icon">⚙️</div>
                        <h5>Custom Web Application</h5>
                        <p>Tailored web apps with specific business logic and features.</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="background-shape position-absolute top-0 start-0 w-100 h-100"
            style="background: linear-gradient(135deg, #6366f1 0%, #0d6efd 100%); clip-path: polygon(0 0, 100% 0, 100% 75%, 0 100%); opacity: 0.1;">
        </div>
    </section>

    <!-- ===========  what type website i build end here ======== -->

    <!-- ===== CTA Section / Call to Action ===== -->
    <section class="cta-section py-5 text-center position-relative overflow-hidden">
        <div class="container position-relative z-1">
            <h2 class="cta-title mb-3">Ready to Start Your Project?</h2>
            <p class="cta-desc mb-4">Let's work together to build something amazing. I provide custom web solutions
                tailored to your needs.</p>
            <a href="#contact" class="btn btn-primary btn-lg">Get in Touch</a>
        </div>


        <div class="background-shape position-absolute top-0 start-0 w-100 h-100"
            style="background: linear-gradient(135deg, #0d6efd 0%, #6366f1 100%); clip-path: polygon(0 0, 100% 0, 100% 70%, 0 100%); opacity: 0.15;">
        </div>
    </section>



    <!-- ===== Blog / Articles Section (Modern + card_6) ===== -->
    <section class="blog-articles-section py-5">
        <div class="container">
            <div class="row mb-5 text-center">
                <div class="col">
                    <span class="section-caption">Latest Insights</span>
                    <h2 class="section-title">Blog / Articles</h2>
                    <p class="section-desc">Read my latest articles on web development, technology trends, and project
                        insights.</p>
                </div>
            </div>


            <div class="row g-4">
                <div class="col-md-6 col-lg-4">
                    <div class="card_6">
                        <div class="card-img">

                            <NuxtImg src="/blog/blog-img-1.jpg" class="img-fluid rounded-top" />
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Understanding Modern Web Design Trends</h5>
                            <p class="card-text">Discover the latest trends in web design that are shaping the digital
                                world in 2026.</p>
                            <a href="#" class="btn btn-outline-primary btn-sm">Read More</a>
                        </div>
                    </div>
                </div>


                <div class="col-md-6 col-lg-4">
                    <div class="card_6">
                        <div class="card-img">
                            <NuxtImg src="/blog/blog-img-1.jpg" class="img-fluid rounded-top" />
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Tips for Optimizing E-commerce Performance</h5>
                            <p class="card-text">Learn essential techniques to boost your online store's performance and
                                conversions.</p>
                            <a href="#" class="btn btn-outline-primary btn-sm">Read More</a>
                        </div>
                    </div>
                </div>


                <div class="col-md-6 col-lg-4">
                    <div class="card_6">
                        <div class="card-img">
                            <NuxtImg src="/blog/blog-img-1.jpg" class="img-fluid rounded-top" />
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Building Scalable Web Applications</h5>
                            <p class="card-text">Insights into creating web applications that can grow efficiently with
                                your business needs.</p>
                            <a href="#" class="btn btn-outline-primary btn-sm">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>







    <HomeAchivment />

    <!-- ===== Testimonial2 Section / Google Review Style ===== -->
    <section class="testimonial2 py-5">
        <div class="container">
            <div class="row mb-5 text-center">
                <div class="col">
                    <span class="section-caption">Clients Feedback</span>
                    <h2 class="section-title">What My Clients Say</h2>
                    <p class="section-desc">Hear from clients who have trusted me to deliver amazing web projects.</p>
                </div>
            </div>


            <div class="row g-4 justify-content-center">
                <div class="col-md-6 col-lg-4">
                    <div class="testimonial2-card p-4 rounded shadow-sm bg-white">
                        <div class="d-flex align-items-center mb-3">
                            <img src="https://via.placeholder.com/50" alt="Client 1" class="rounded-circle me-3">
                            <div>
                                <h6 class="mb-0">John Doe</h6>
                                <small class="text-muted">CEO, Company</small>
                            </div>
                        </div>
                        <p class="testimonial-text">⭐⭐⭐⭐⭐<br>Excellent service! The website exceeded our expectations
                            and performance is amazing.</p>
                    </div>
                </div>


                <div class="col-md-6 col-lg-4">
                    <div class="testimonial2-card p-4 rounded shadow-sm bg-white">
                        <div class="d-flex align-items-center mb-3">
                            <img src="https://via.placeholder.com/50" alt="Client 2" class="rounded-circle me-3">
                            <div>
                                <h6 class="mb-0">Jane Smith</h6>
                                <small class="text-muted">Founder, Startup</small>
                            </div>
                        </div>
                        <p class="testimonial-text">⭐⭐⭐⭐⭐<br>Highly recommend! The project was delivered on time and
                            quality was top-notch.</p>
                    </div>
                </div>


                <div class="col-md-6 col-lg-4">
                    <div class="testimonial2-card p-4 rounded shadow-sm bg-white">
                        <div class="d-flex align-items-center mb-3">
                            <img src="https://via.placeholder.com/50" alt="Client 3" class="rounded-circle me-3">
                            <div>
                                <h6 class="mb-0">Michael Lee</h6>
                                <small class="text-muted">Manager, TechCorp</small>
                            </div>
                        </div>
                        <p class="testimonial-text">⭐⭐⭐⭐⭐<br>Professional and responsive. I am extremely satisfied with
                            the results.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>




    <HomeInspair />

</template>