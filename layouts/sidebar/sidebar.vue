<template>
  <div>
    <SecModelEmail />
    <SecModelZoom />
    <div
      class="menuFixed"
      :class="
        allSidebar.boxZoom === false && allSidebar.boxEmail === false
          ? 'show'
          : 'hide'
      "
    >
      <v-speed-dial
        v-model="fab"
        :top="top"
        :bottom="bottom"
        :right="right"
        :left="left"
        :direction="direction"
        :open-on-hover="hover"
        :transition="transition"
      >
        <template v-slot:activator>
          <v-btn icon text class="menuIcon" v-model="fab"> </v-btn>
        </template>

        <v-btn icon>
          <div class="icons_" @click="setBoxEmail(true)">
            <nuxt-img
              loading="lazy"
              alt="mail"
              src="/icons/mail.png"
              format="webp"
              width="44"
              height="38"
            />
          </div>
        </v-btn>

        <v-btn icon>
          <a target="_balnk" href="https://wa.me/+966534537573">
            <div class="icons_">
              <nuxt-img
                loading="lazy"
                alt="whatsapp"
                src="/icons/whatsapp.png"
                format="webp"
                width="40"
                height="40"
              />
            </div>
          </a>
        </v-btn>

        <v-btn icon>
          <div class="icons_" @click="setBoxZoom(true)">
            <nuxt-img
              loading="lazy"
              alt="zoom"
              src="/icons/zoom.png"
              format="webp"
              width="40"
              height="40"
            />
          </div>
        </v-btn>
      </v-speed-dial>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import SecModelEmail from "./sections/secModelEmail.vue";
import SecModelZoom from "./sections/secModelZoom.vue";
export default {
  components: {
    SecModelEmail,
    SecModelZoom,
  },
  data() {
    return {
      direction: "top",
      fab: false,
      fling: false,
      hover: false,
      tabs: null,
      top: false,
      right: this.$i18n.locale === "en" && true,
      bottom: true,
      left: this.$i18n.locale === "ar" && true,
      transition: "slide-y-reverse-transition",
    };
  },
  computed: {
    ...mapGetters(["allSidebar"]),
  },
  methods: {
    ...mapActions(["setBoxEmail", "setBoxZoom"]),
  },
};
</script>
<style lang="scss">
@import "./styles/sidebar.scss";
</style>
