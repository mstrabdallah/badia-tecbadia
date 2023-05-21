<template>
  <div class="myCompanys">
    <div class="container2__">
      <div v-if="allPartners.loadingPartners">
        <Loading />
      </div>
      <v-row v-else>
        <v-col class="col-12 col-md-4">
          <div
            class="companys_item"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <h2 class="h1">{{ $t("Our Parteners") }}</h2>
          </div>
        </v-col>
        <v-col
          v-for="(partner, i) in allPartners.partners"
          :key="i"
          class="col-12 col-md-4"
        >
          <div
            class="companys_item"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <nuxt-img
              :alt="partner.title"
              loading="lazy"
              :src="partner.image"
              format="webp"
            />
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Loading from "../../tools/loadingP.vue";
export default {
  components: {
    Loading,
  },
  computed: {
    ...mapGetters(["allPartners"]),
  },
  methods: {
    ...mapActions(["getParteners"]),
  },
  mounted() {
    this.getParteners();
  },
};
</script>
