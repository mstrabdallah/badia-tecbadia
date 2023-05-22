<template>
  <div v-if="allServices.loading"><Loading /></div>

  <div v-else class="services_content">
    <v-row class="serv_row">
      <v-col
        v-for="(service, i) in allServices.data"
        :key="service.id"
        cols="6"
        sm="4"
        md="4"
        :style="$vuetify.breakpoint.mdAndUp ? ' flex: 1 0 18%;' : ''"
      >
        <div
          class="service"
          @click="setserviceActive_(service)"
          :key="i"
          v-scroll-to="'.ServicesPageScroll'"
          :class="allServices.serviceActive.id == service.id ? ' active' : ''"
        >
          <nuxt-img
            loading="lazy"
            class="rounded-circle"
            :alt="service.title"
            :src="`${service.image}`"
            max-width="100"
            max-height="100"
          />
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import allServices from "../../../data/allServices.json";

import { mapActions, mapGetters } from "vuex";
import Loading from "../../tools/loadingP.vue";

export default {
  components: {
    Loading,
  },
  computed: {
    // ...mapGetters(["allServices"]),
  },
  methods: {
    // ...mapActions(["getservices", "setserviceActive"]),
    // setserviceActive_(payload) {
    //   this.$scrollTo("Services_Active");
    //   this.setserviceActive(payload);
    // },
  },
  async mounted() {
    // await this.getservices();
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/service.scss";
</style>


