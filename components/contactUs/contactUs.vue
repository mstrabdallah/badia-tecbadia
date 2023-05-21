<template>
  <div class="aboutUsPage page">
    <div class="headPages">
      <div class="headPages_content">
        <h4>{{ $t("Contact Us") }}</h4>
        <h3>{{ $t("We Are Here To Help you") }}</h3>
        <p>{{ $t("We have support at all times, Just contact us.") }}</p>
      </div>
    </div>

    <div class="">
      <SecContactUs />
    </div>
  </div>
</template>
<script>
export default {
  components: {
    SecContactUs: () => import("./sections/secContactUs.vue"),
  },
 
};
</script>
