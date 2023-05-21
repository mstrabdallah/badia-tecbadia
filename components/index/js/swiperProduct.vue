<template>
  <div class="loading" v-if="allProducts.loadingProduct"></div>
  <hooper v-else :settings="hooperSettings">
    <slide v-for="(res, i) in allProducts.products" :key="i">
      <div class="product_">
        <div class="img_">
          <nuxt-img
            :alt="res.name"
            loading="lazy"
            format="webp"
            :src="res.image"
            width="185"
            height="124"
          />
        </div>
        <div class="title_">{{ res.title }}</div>
        <div class="des_">{{ res.description }}</div>
        <v-rating
          v-model="res.rate"
          background-color="#FFD687"
          color="#FFD687"
          large
        ></v-rating>
        <p>
          <span>{{ res.default_price }}</span> {{ $t(allAuth.country) }}
        </p>
        <div>
          <NuxtLink :to="localePath(`/product/${res.id}`)"
            ><button class="button product_btn">
              {{ $t("View Product") }}
            </button></NuxtLink
          >
        </div>
      </div>
    </slide>
    <hooper-navigation slot="hooper-addons"></hooper-navigation>
  </hooper>
</template>

<script>
import { Hooper, Slide, Navigation as HooperNavigation } from "hooper";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    Hooper,
    Slide,
    HooperNavigation,
  },
  data() {
    return {
      hooperSettings: {
        infiniteScroll: false,
        wheelControl: false,
        centerMode: false,
        autoPlay: false,
        rtl: this.$i18n.locale == "ar" ? true : false,
        playSpeed: 3500,
        breakpoints: {
          500: {
            itemsToShow: 1,
          },
          700: {
            itemsToShow: 2,
          },

          1023: {
            itemsToShow: 2,
          },
          1100: {
            itemsToShow: 3,
          },
        },
      },
    };
  },
  mounted() {
    this.getproducts();
  },
  computed: {
    ...mapGetters(["allProducts", "allAuth"]),
  },
  methods: {
    ...mapActions(["getproducts"]),
  },
};
</script>
