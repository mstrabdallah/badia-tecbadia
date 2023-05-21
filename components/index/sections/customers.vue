<template>
  <section
    class="Isec IsecImg customers"
    data-aos="fade-up"
    data-aos-duration="1000"
  >
    <div class="container__ zindex1">
      <div class="ISechead">
        <h1 class="h1_">{{ $t("What Our Customers Think") }}</h1>
      </div>
      <div class="des">
        {{
          $t(
            "Here are some of our customers thoughts about our products, take a peek and tell us what you think too"
          )
        }}
      </div>

      <div class="customers_content">
        <SwiperCustomers />
      </div>
    </div>
  </section>
</template>
<script>
import SwiperCustomers from "../js/swiperCustomers.vue";
export default {
  props: ["bg"],
  components: {
    SwiperCustomers,
  },
};
</script>
