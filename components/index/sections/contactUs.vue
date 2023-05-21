<template>
  <section
    class="IsecContactUs"
    data-aos="fade-up"
    data-aos-duration="1000"
  >
    <div class="zindex1">
      <div class="IsecContactUs_head">
        <h1 class="h1">{{ $t("We Are Here To Help You") }}</h1>
      </div>
      <div class="des">
        {{ $t("We have support at all times, Just contact us.") }}
      </div>

      <div class="IsecContactUs_content">
        <SecContactUs />
      </div>
    </div>
  </section>
</template>
<script>
import SecContactUs from "../../contactUs/sections/secContactUs.vue";
export default {
  components: {
    SecContactUs,
  },
};
</script>
