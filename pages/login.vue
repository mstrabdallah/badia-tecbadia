<template>
  <Login />
</template>

<script>
import { mapGetters } from 'vuex';
import Login from "../components/login/login.vue";
export default {
  head() {
    return {
      title: this.$i18n.t("Login"),
    };
  },
  components: {
    Login,
  },
  head() {
    return {
      title: this.allMeta?.login?.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.allMeta?.login?.meta_desc,
        },
        {
          hid: "keywords",
          name: "keywords",
          content: this.allMeta?.login?.meta_keys,
        },
      ],
    };
  },
  computed: {
    ...mapGetters(["allMeta"]),
  },
};
</script>

<style scoped></style>
