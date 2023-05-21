<template>
  <div class="loading" v-if="allIndex.loadingOurClients"></div>

  <div v-else>
    <hooper group="group1" :settings="hooperSettings">
      <slide v-for="(res, i) in allIndex.ourClientsCol1" :key="i">
        <div class="ourClientsItem">
          <nuxt-img
            width="100"
            height="100"
            :alt="res.title"
            loading="lazy"
            :src="res.image"
            format="webp"
            preload
          />
        </div>
      </slide>
    </hooper>

    <hooper group="group1" :settings="hooperSettings">
      <slide v-for="(res, i) in allIndex.ourClientsCol2" :key="i">
        <div class="ourClientsItem">
          <nuxt-img
            width="100"
            height="100"
            :alt="res.title"
            loading="lazy"
            format="webp"
            :src="res.image"
            preload
          />
        </div>
      </slide>
      <hooper-navigation slot="hooper-addons"></hooper-navigation>
    </hooper>
  </div>
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
  props: ["itemsToShow"],
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
          400: {
            itemsToShow: 2,
          },
          600: {
            itemsToShow: 3,
          },

          800: {
            itemsToShow: 4,
          },
          1100: {
            itemsToShow: this.itemsToShow ? this.itemsToShow : 5,
          },
        },
      },
    };
  },
  mounted() {
    this.getHomeOurClients();
  },
  computed: {
    ...mapGetters(["allIndex"]),
  },
  methods: {
    ...mapActions(["getHomeOurClients"]),
  },
};
</script>
