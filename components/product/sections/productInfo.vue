<template>
  <div class="container__">
    <div v-if="allProducts.loadingProductId">
      <Loading />
    </div>
    <v-row v-else>
      <v-col cols="12" md="5">
        <div>
          <div class="img_">
            <nuxt-img
              :alt="allProducts.productData.title"
              loading="lazy"
              preload
              :src="allProducts.productData.image"
            />
          </div>
        </div>
      </v-col>
      <v-col cols="12" md="7">
        <div class="infoBoxes">
          <div class="infoBox1">
            <h2>{{ allProducts.productData.title }}</h2>
            <p class="price">
              {{ $t("Starts From") }}
              <span
                >{{ allProducts.productData.default_price }}
                {{ $t(allAuth.country) }}</span
              >
            </p>

            <div class="rate">
              <span>{{ allProducts.productData.rate }}.0</span>
              <v-rating
                v-model="allProducts.productData.rate"
                readonly
                background-color="#FFD687"
                color="#FFD687"
                large
              ></v-rating>
            </div>
          </div>

          <div class="infoBox2">
            <h4>{{ $t("Description") }}</h4>
            <p class="des_">{{ allProducts.productData.description }}</p>
          </div>

          <div class="pro_checkbox">
            <v-checkbox
              :label="$t('24 Month Installment Option.')"
            ></v-checkbox>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Loading from "../../tools/loadingP.vue";
export default {
  components: {
    Loading,
  },
  computed: {
    ...mapGetters(["allProducts", "allAuth"]),
  },
};
</script>


