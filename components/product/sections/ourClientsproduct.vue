<template>
  <section
    class="OurClientsProduct"
    data-aos="fade-up"
    data-aos-duration="1000"
  >
    <div class="zindex1">
      <div class="OurClients_head">
        <h2 class="h1">{{ $t("Clients that used our product") }}</h2>
      </div>
      <div class="container2__">
        <div class="OurClients_content">
          <OurClients :itemsToShow="3" />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import OurClients from "../../index/js/swiperOurClients.vue";
export default {
  components: {
    OurClients,
  },
};
</script>
