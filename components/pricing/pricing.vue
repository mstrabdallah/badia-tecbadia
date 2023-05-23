<template>
  <div class="pricePage">
    <div class="page">
      <SecPrice />
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import SecPrice from "./sections/secPrice.vue";
export default {
  head() {
    return {
      title: this.$i18n.t("Pricing"),
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.$i18n.t(
            "We have support at all times, Just contact us."
          ),
        },
      ],
    };
  },
  components: {
    SecPrice,
  },
  methods: {
    // ...mapActions(["getPricings"]),
  },
  async mounted() {
    // await this.getPricings();
  },
};
</script>

<style lang="scss">
@import "./styles/price.scss";
</style>
