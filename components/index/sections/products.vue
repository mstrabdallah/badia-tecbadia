<template>
  <section
    class="Isec IsecImg products"
    data-aos="fade-up"
    data-aos-duration="1000"
  >
    <div class="container__ zindex1">
      <div class="ISechead">
        <h1 class="h1_">{{ $t("Our Badia products") }}</h1>
      </div>

      <div class="products_content">
        <SwiperProducts />
      </div>
    </div>
  </section>
</template>
<script>
import SwiperProducts from "../js/swiperProduct.vue";
export default {
  components: {
    SwiperProducts,
  },
};
</script>
