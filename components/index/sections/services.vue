<template>
  <section
    class="Iservices Isec IsecServ"
    data-aos="fade-up"
    data-aos-duration="1000"
  >
    <div class="container__ zindex1">
      <div class="ISechead">
        <h2 class="h1">{{ $t("Our Services") }}</h2>
        <div class="LearnMore">
          <NuxtLink :to="localePath('/services')">{{
            $t("Learn More")
          }}</NuxtLink>
        </div>
      </div>

      <div class="des">
        {{ $t("servicesDes") }}
      </div>

      <div class="services_content">
        <Services />
      </div>
    </div>
  </section>
</template>
<script>
import Services from "../../services/sections/service.vue";
export default {
  components: { Services },
};
</script>
