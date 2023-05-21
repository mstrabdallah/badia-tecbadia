<template>
  <div class="partener">
    <h4 class="container_cc partners_head">{{ $t("parteners-head") }}</h4>
    <div v-if="allPartners.loading"><Loading /></div>

    <v-row v-else class="partners">
      <v-col
        cols="12"
        sm="6"
        md="4"
        v-for="partner in allPartners.partners"
        :key="partner.id"
      >
        <v-card>
          <nuxt-img
            :alt="partener.title"
            loading="lazy"
            format="webp"
            :src="partner.image"
          />
          <v-card-title>{{ partner.title }}</v-card-title></v-card
        >
      </v-col>
    </v-row>
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

<style scoped>
.partners_head {
  text-align: center;
  font-size: 44px;
  font-weight: 700;
}
.partener {
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: rgb(240, 240, 240);
}
.partners {
  display: flex;
  justify-content: center;
  width: 80%;
  margin: 0 auto;
}

.v-card {
  margin: 20px 0px;
  padding: 0px;
  transition: transform 0.3s ease-out;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.v-card:hover {
  transform: perspective(500px) translateZ(20px);
}
.v-card__title {
  font-size: 22px;
  padding: 10px 5px;
  color: #4f4f4f;
}
@media (max-width: 570px) {
  .partener .partners_head {
    font-size: 30px;
  }
}
</style>
