<template>
  <div class="page ServicesPage">
    <div class="ServicesPageScroll"></div>
    <div class="container__">
      <div class="ServicesPage_">
        <div class="Services_head">
          <h1 class="h1">{{ $t("CATEGORIES") }}</h1>
          <h3
            class="h1"
            v-html="$t('Explore Our services <br /> Categories')"
          ></h3>

          <v-text-field
            v-model="search"
            outlined
            :label="$t('Find Categories')"
            append-icon="mdi-magnify"
            class="searchServ"
            @change="getservicesSearch_"
          ></v-text-field>
        </div>

        <div class="Services_Active">
          <div v-if="allServices.loading" class="skeleton">
            <v-skeleton-loader type="article"></v-skeleton-loader>
          </div>

          <div v-else class="content_ flex_">
            <div class="Services_A_img">
              <nuxt-img
                :src="allServices.serviceActive.image"
                :alt="allServices.serviceActive.title"
                loading="lazy"
              />
            </div>

            <div class="content">
              <h2>
                {{ allServices.serviceActive.title }}
              </h2>

              <p>
                {{ allServices.serviceActive.description }}
              </p>
            </div>
            <div class="Services_A_btn">
              <NuxtLink
                :to="localePath('/services/' + allServices.serviceActive.id)"
              >
                <v-btn class="button">{{ $t("TRY NOW") }}</v-btn>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
      <Service />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Loading from "../tools/loadingP.vue";
import Service from "./sections/secServices.vue";
export default {
  components: {
    Loading,
    Service,
  },
  data() {
    return {
      search: "",
    };
  },
  computed: {
    ...mapGetters(["allServices"]),
  },
  methods: {
    ...mapActions(["getservicesSearch", "getservices"]),

    getservicesSearch_() {
      this.getservicesSearch(this.search);
    },
  },
  async mounted() {
    // await this.getservices();
  },
};
</script>

<style lang="scss">
@import "./styles/services.scss";
</style>
