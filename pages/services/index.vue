<template>
  <Services />
</template>
<script>
import { mapGetters } from "vuex";
import Services from "../../components/services/services.vue";
export default {
  components: { Services },
  head() {
    return {
      title: this.allMeta.services?.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.allMeta.services?.meta_desc,
        },
        {
          hid: "keywords",
          name: "keywords",
          content: this.allMeta.services?.meta_keys,
        },
      ],
    };
  },
  computed: {
    ...mapGetters(["allMeta"]),
  },
};
</script>
