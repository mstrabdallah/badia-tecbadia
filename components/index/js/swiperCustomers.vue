<template>
  <div class="loading" v-if="allIndex.loadingOpinion"></div>
  <hooper v-else :settings="hooperSettings">
    <slide v-for="(res, i) in allIndex.opinion" :key="i">
      <div class="customer_" :class="i % 2 ? 'customer_bg' : ''">
        <div class="img_">
          <nuxt-img
            width="77"
            height="77"
            :alt="res.name"
            loading="lazy"
            :src="res.image"
            format="webp"
          />
        </div>
        <p>{{ res.comment }}</p>
        <div class="name_">{{ res.name }}</div>
        <!-- <div class="type_">{{ res.position }}</div> -->
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
    this.getOpinion();
  },
  computed: {
    ...mapGetters(["allIndex"]),
  },
  methods: {
    ...mapActions(["getOpinion"]),
  },
};
</script>
