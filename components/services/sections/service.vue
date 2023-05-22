<template>
  <div v-if="allServices.loading"><Loading /></div>

  <div v-else class="services_content">
    <v-row class="serv_row">
      <v-col
        v-for="(service, i) in allServices.data"
        :key="service.id"
        cols="6"
        sm="4"
        md="6"
        :style="$vuetify.breakpoint.mdAndUp ? ' flex: 1 0 18%;' : ''"
      >
        <NuxtLink :to="localePath('/services/' + service.id)" v-if="i < 10">
          <div class="service">
            <nuxt-img
              loading="lazy"
              class="rounded-circle"
              :alt="service.title"
              :src="`${service.image}`"
              width="108px"
              height="108px"
            />
          </div>
        </NuxtLink>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import allServices from "../../../data/allServices.json";

import { mapActions, mapGetters } from "vuex";
import Loading from "../../tools/loadingP.vue";
export default {
  data() {
    return {
      allServices: allServices,
    };
  },
  components: {
    Loading,
  },
  computed: {
    // ...mapGetters(["allServices"]),
  },
  methods: {
    // ...mapActions(["getservices"]),
  },
  mounted() {
    // this.getservices();
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/service.scss";
</style>
