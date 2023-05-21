<template>
  <Pricing />
</template>

<script>
import { mapGetters } from 'vuex';
import Pricing from "../components/pricing/pricing.vue";
export default {
  components: { Pricing },
  head() {
    return {
      title: this.allMeta?.pricing?.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.allMeta?.pricing?.meta_desc,
        },
        {
          hid: "keywords",
          name: "keywords",
          content: this.allMeta?.pricing?.meta_keys,
        },
      ],
    };
  },
  computed: {
    ...mapGetters(["allMeta"]),
  },
};
</script>

<style></style>
