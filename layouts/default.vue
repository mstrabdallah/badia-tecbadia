<template>
  <div class="app">
    <v-app>
      <Header />
      <div class="pages">
        <Nuxt />
      </div>
      <Footer />
      <Menu />
      <Overlays />
      <Sidebar />
    </v-app>

    <!-- Google Tag Manager (noscript) --->
    <noscript
      ><iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-KN8ZJ8X"
        height="0"
        width="0"
        style="display: none; visibility: hidden"
      ></iframe
    ></noscript>
    <!-- End Google Tag Manager (noscript) -->
  </div>
</template>
<script>
import Header from "./header/header.vue";
import Footer from "./footer/footer.vue";
import Menu from "./header/menu.vue";
import Sidebar from "./sidebar/sidebar.vue";
import Overlays from "../components/tools/overlays.vue";
import { mapActions } from "vuex";
import AOS from "aos";
import "aos/dist/aos.css";
export default {
  head() {
    return this.$nuxtI18nHead({
      addSeoAttributes: true,
      title: this.$i18n.t("TecBadia"),
      htmlAttrs: {
        lang: this.$cookies.get("lang"),
      },
      meta: [
        {
          hid: "description",
          name: "description",
          content: "",
        },
        {
          hid: "keywords",
          name: "keywords",
          content: "",
        },
      ],
    });
  },

  components: {
    Header,
    Footer,
    Menu,
    Overlays,
    Sidebar,
  },
  async beforeCreate() {
    this.$vuetify.rtl = this.$cookies.get("lang") === "ar" ? true : false;
  },

  async mounted() {
    await this.setApi();
    await this.setApp(this.$route.path);
    this.getUserData();
    AOS.init({ once: true });
  },

  async fetch() {
    if (this.$cookies.get("lang")) {
      await this.$axios.setHeader("lang", this.$cookies.get("lang"));
    } else {
      await this.$axios.setHeader("lang", this.$i18n.locale);
    }

    await this.$axios
      .get("https://api.tecbadia.com/api/page_metas")
      .then((res) => {
        this.setPageMetas(res.data.page_metas);
      });
  },

  methods: {
    ...mapActions([
      "setApp",
      "setApi",
      "getUserData",
      "setCountry",
      "setPageMetas",
    ]),
  },
};
</script>

<style></style>
