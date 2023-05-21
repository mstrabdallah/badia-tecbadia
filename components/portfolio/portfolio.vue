<template>
  <div class="portfolioPage page">
    <div class="headPages">
      <div class="headPages_content">
        <h4>{{ $t("Portfolio") }}</h4>
        <h3>{{ $t("Get to know our work better") }}</h3>
        <p>{{ $t("All the projects you could think of, we created it.") }}</p>
      </div>
    </div>

    <div class="Portifolio container__">
      <Portifolio />
    </div>
  </div>
</template>
<script>
import SecPortfolio from "./sections/secPortfolio.vue";
import Portifolio from "../index/js/swiperPortifolio.vue";
import { mapActions } from "vuex";
export default {
  components: {
    SecPortfolio,
    Portifolio,
  },
  head() {
    return {
      title: this.$i18n.t("portfolio"),
    };
  },
  methods: {
    ...mapActions(["getPortfolio"]),
  },
  mounted() {
    this.getPortfolio();
  },
};
</script>

<style lang="scss">
@import "./styles/portfolio.scss";
</style>
 