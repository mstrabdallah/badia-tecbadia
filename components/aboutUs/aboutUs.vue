<template>
  <div class="aboutUsPage page">
    <div class="headPages">
      <div class="headPages_content">
        <h4>{{ $t("About us") }}</h4>
        <h3>{{ $t("Experience You Can Trust") }}</h3>
        <p>{{ $t("tecBadiaAbout_") }}</p>
      </div>
    </div>

    <div class="Customers_about">
      <Customers />
    </div>

    <div class="Place_about">
      <Place />
    </div>

    <div class="Portifolio_about">
      <Portifolio />
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  components: {
    Customers: () => import("../index/sections/customers.vue"),
    Place: () => import("../index/sections/place.vue"),
    Portifolio: () => import("../index/sections/portifolio.vue"),
  },
};
</script>
<style lang="scss">
@import "./styles/aboutUs.scss";
</style>
