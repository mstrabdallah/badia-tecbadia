<template>
  <section data-aos="fade-up">
    <SecPrice />
  </section>
</template>
<script>
import { mapActions } from "vuex";
import SecPrice from "../../pricing/sections/secPrice.vue";
export default {
  components: {
    SecPrice,
  },
  methods: {
    ...mapActions(["getPricings"]),
  },
  mounted() {
    this.getPricings();
  },
};
</script>
