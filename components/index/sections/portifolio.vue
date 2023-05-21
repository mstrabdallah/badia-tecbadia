<template>
  <section
    class="Isec IsecImg portifolio"
    data-aos="fade-up"
    data-aos-duration="1000"
  >
    <div class="container__ zindex1">
      <div class="ISechead">
        <h1 class="h1">{{ $t("Portfolio") }}</h1>
        <div class="LearnMore">
          <NuxtLink :to="localePath('/Portfolio')">{{
            $t("Learn More")
          }}</NuxtLink>
        </div>
      </div>

      <div class="des">
        {{ $t("desPor") }}
      </div>

      <SwiperPortifolio />
    </div>
  </section>
</template>
<script>
import SwiperPortifolio from "../js/swiperPortifolio.vue";
export default {
  components: {
    SwiperPortifolio,
  },
};
</script>
