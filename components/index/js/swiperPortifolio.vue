<template>
  <div class="portifolio_content">
    <hooper :settings="hooperSettings">
      <slide v-for="(res, i) in allPortfolio.portfolio" :key="i">
        <div class="portifolio_item">
          <v-row class="hooperRow">
            <v-col cols="12" md="6" lg="6">
              <div class="portifolio_content_">
                <h3>{{ $t(res.title) }}</h3>
                <p>{{ $t(res.description) }}</p>
              </div>
            </v-col>

            <v-col cols="12" md="6" lg="6">
              <div class="portifolioImg_">
                <nuxt-img
                  :alt="res.title"
                  width="280"
                  height="280"
                  loading="lazy"
                  format="webp"
                  :src="res.image"
                  preload
                />
              </div>
            </v-col>
          </v-row>
        </div>
      </slide>
      <hooper-pagination slot="hooper-addons"></hooper-pagination>
    </hooper>
  </div>
</template>

<script>
import allPortfolio from "../../../data/allPortfolio.json";

import { Hooper, Slide, Pagination as HooperPagination } from "hooper";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    Hooper,
    Slide,
    HooperPagination,
  },
  data() {
    return {
      allPortfolio: allPortfolio,
      hooperSettings: {
        infiniteScroll: false,
        wheelControl: false,
        autoPlay: false,
        rtl: this.$i18n.locale == "ar" ? true : false,
        playSpeed: 3500,
      },
    };
  },

  computed: {
    // ...mapGetters(["allPortfolio"]),
  },

  methods: {
    // ...mapActions(["getPortfolio"]),
  },
  mounted() {
    // this.getPortfolio();
  },
};
</script>

<style lang="scss">
@import "./styles/swiperPortifolio.scss";
</style>
