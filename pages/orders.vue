<template>
  <Orders />
</template>

<script>
import { mapGetters } from 'vuex';
import Orders from "../components/orders/orders.vue";
export default {
  head() {
    return {
      title: this.$i18n.t("List Orders"),
    };
  },
  components: {
    Orders,
  },
  head() {
    return {
      title: this.allMeta?.orders?.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.allMeta?.orders?.meta_desc,
        },
        {
          hid: "keywords",
          name: "keywords",
          content: this.allMeta?.orders?.meta_keys,
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
