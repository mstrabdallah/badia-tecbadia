<template>
  <section class="productPage page">
    <ProductInfo />
    <OurClients />
    <RequestFrom />
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ProductInfo from "./sections/productInfo.vue";
import OurClients from "./sections/ourClientsproduct.vue";
import RequestFrom from "./sections/requestFormproduct.vue";
export default {
  head() {
    return {
      title: this.allProducts.productData.title,
    };
  },
  components: {
    ProductInfo,
    OurClients,
    RequestFrom,
  },

  mounted() {
    this.getproduct(this.$route.params.id);
  },
  computed: mapGetters(["allProducts"]),
  methods: mapActions(["getproduct"]),
};
</script>

<style lang="scss">
@import "./styles/product.scss";
</style>
