<template>
  <section
    class="OurClients"
    data-aos="fade-up"
    data-aos-duration="1000"
  >
    <div class="zindex1">
      <div class="OurClients_head">
        <h1 class="h1">{{ $t("Our Clients") }}</h1>
      </div>
      <div class="container2__">
        <div class="OurClients_content">
          <OurClients />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import OurClients from "../js/swiperOurClients.vue";
export default {
  components: {
    OurClients,
  },
};
</script>
