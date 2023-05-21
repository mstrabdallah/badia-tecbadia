<template>
  <Portfolio />
</template>

<script>
import { mapGetters } from 'vuex';
import Portfolio from "../components/portfolio/portfolio.vue";
export default {
  components: {
    Portfolio,
  },
  head() {
    return {
      title: this.allMeta?.portfolio?.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.allMeta?.portfolio?.meta_desc,
        },
        {
          hid: "keywords",
          name: "keywords",
          content: this.allMeta?.portfolio?.meta_keys,
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
