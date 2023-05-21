<template>
  <div>
    <Head  />
    <Services  />
    <Capsule  />
    <Portifolio  />
    <Place  />
    <Products  />
    <Customers  />
    <OurClients  />
    <Business  />
    <MyCompanys  />
    <Blog  />
    <ContactUs  />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    Head: () => import("./sections/head.vue"),
    Services: () => import("./sections/services.vue"),
    Capsule: () => import("./sections/capsule.vue"),
    Blog: () => import("./sections/blog.vue"),
    Portifolio: () => import("./sections/portifolio.vue"),
    Place: () => import("./sections/place.vue"),
    Products: () => import("./sections/products.vue"),
    Customers: () => import("./sections/customers.vue"),
    Business: () => import("./sections/business.vue"),
    MyCompanys: () => import("./sections/myCompanys.vue"),
    ContactUs: () => import("./sections/contactUs.vue"),
    OurClients: () => import("./sections/ourClients.vue"),
  },
  head() {
    return {
      title: this.allMeta.index?.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.allMeta.index?.meta_desc,
        },
        {
          hid: "keywords",
          name: "keywords",
          content: this.allMeta.index?.meta_keys,
        },
        {
          hid: "og:site_name",
          name: "og:site_name",
          content: this.allMeta.index?.title,
        },
        {
          hid: "og:type",
          name: "og:type",
          content: "website",
        },

        {
          hid: "og:title",
          name: "og:title",
          content: this.allMeta.index?.title,
        },
        {
          hid: "og:description",
          name: "og:description",
          content: this.allMeta.index?.meta_desc,
        },
      ],
    };
  },

  computed: {
    ...mapGetters(["allIndex", "allMeta"]),
  },
  methods: {
    ...mapActions(["getHomeData"]),
  },
};
</script>
<style lang="scss">
@import "./styles/index.scss";
</style>
