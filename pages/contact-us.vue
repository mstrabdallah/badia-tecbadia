<template>
  <ContactUs />
</template>

<script>
import { mapGetters } from 'vuex';
import ContactUs from "../components/contactUs/contactUs.vue";
export default {
  components: {
    ContactUs,
  },
  head() {
    return {
      title: this.allMeta?.contactUs?.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.allMeta?.contactUs?.meta_desc,
        },
        {
          hid: "keywords",
          name: "keywords",
          content: this.allMeta?.contactUs?.meta_keys,
        },
      ],
    };
  },
  computed: {
    ...mapGetters(["allMeta"]),
  },
};
</script>
 