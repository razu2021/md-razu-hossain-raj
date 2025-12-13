<!-- ========  script section start her ====== -->
<script setup lang="ts">

</script>

<!-- =====  template section start here ========= -->
<template>
    <CommonBreadcrumb />

    <!-- filter section  -->
    <section class="section-padding">
        <div class="container">
            <div class="row">
                <div class="col-12 mb-5">
                    <div class="project-filter">
                        <select class="form-control mt-4" name="project_filter" id="project_filter">
                            <option value="">Filter Projects </option>
                            <option value="">Frontend</option>
                            <option value="">Backend</option>
                            <option value="">Full-Stack</option>
                            <option value="">Laravel </option>
                            <option value="">Nuxt</option>
                            <option value="">Prectice Project</option>
                            <option value="">Other</option>
                        </select>
                    </div>
                </div>
                <!-- col end  -->
                <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 mb-5">
                    <div class="project_showcase_area">
                        <div class="card_5">
                            <div class="card_5_image">
                                <NuxtImg src="/image3.png"></NuxtImg>
                            </div>
                            <div class="card_5_content">
                                <h2>project title </h2>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore quibusdam illo
                                    ea. Repellat aliquid adipisci, maiores placeat natus dolor consectetur.</p>
                                <hr>
                                <div class="card_5_button">
                                    <NuxtLink to="/project_details"> View more </NuxtLink>
                                    <a href="#"> View Demo </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- col end  -->
                <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 mb-5">
                    <div class="project_showcase_area">
                        <div class="card_5">
                            <div class="card_5_image">
                                <NuxtImg src="/image3.png"></NuxtImg>
                            </div>
                            <div class="card_5_content">
                                <h2>project title </h2>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore quibusdam illo
                                    ea. Repellat aliquid adipisci, maiores placeat natus dolor consectetur.</p>
                                <hr>
                                <div class="card_5_button">
                                    <NuxtLink to="/project_details"> View more </NuxtLink>
                                    <a href="#"> View Demo </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- col end  -->
                <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 mb-5">
                    <div class="project_showcase_area">
                        <div class="card_5">
                            <div class="card_5_image">
                                <NuxtImg src="/image3.png"></NuxtImg>
                            </div>
                            <div class="card_5_content">
                                <h2>project title </h2>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore quibusdam illo
                                    ea. Repellat aliquid adipisci, maiores placeat natus dolor consectetur.</p>
                                <hr>
                                <div class="card_5_button">
                                    <NuxtLink to="/project_details"> View more </NuxtLink>
                                    <a href="#"> View Demo </a>
                                </div>
                            </div>
                        </div>
                        <!-- card 5 end here  -->
                    </div>
                </div>
                <!-- col end  -->

                <!--======================= Pagination ========================== -->
                <div class="col-12">
                    <nav aria-label="Page navigation example">
                        <ul class="pagination justify-content-center flex-wrap gap-2">
                            <li class="page-item disabled">
                                <a class="page-link" href="#" tabindex="-1">Previous</a>
                            </li>
                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                            <li class="page-item active" aria-current="page">
                                <a class="page-link" href="#">2</a>
                            </li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item"><a class="page-link" href="#">4</a></li>
                            <li class="page-item"><a class="page-link" href="#">5</a></li>
                            <li class="page-item">
                                <a class="page-link" href="#">Next</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <!-- ========= pagination end here =========================== -->

            </div>
        </div>
    </section>

    <!-- ============  future projects start here ============ -->
    <section class="future_projects_area">
        <div class="container">
            <div class="section_header">
                <h2>Future Projects</h2>
                <p>These are some upcoming ideas I'm planning to develop soon</p>
            </div>

            <div class="row">
                <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 mb-5">
                    <div class="project_showcase_area">
                        <div class="card_5">
                            <div class="card_5_image">
                                <NuxtImg src="/image3.png"></NuxtImg>
                            </div>
                            <div class="card_5_content">
                                <h2>project title </h2>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore quibusdam illo
                                    ea. Repellat aliquid adipisci, maiores placeat natus dolor consectetur.</p>
                                <hr>
                                <div class="card_5_button">
                                    <NuxtLink to="/project_details"> View more </NuxtLink>
                                    <a href="#"> View Demo </a>
                                </div>
                            </div>
                        </div>
                        <!-- card 5 end here  -->
                    </div>
                </div>
                <!-- col end  -->
            </div>
        </div>
    </section>

    <template>

    </template>

</template>

<!-- ======== style section start here ========== -->
<style scoped>

</style>