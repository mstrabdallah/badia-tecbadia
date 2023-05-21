<template>
  <div class="orderCard">
    <div class="tec">
      <v-row>
        <v-col cols="12" sm="6">
          <div class="flex_ header_">
            <nuxt-img
              :alt="data.tec ? data.tec.title : 'services'"
              loading="lazy"
              :src="data.tec.image"
            />
            <div class="tecInfo">
              <div class="tecName">{{ data.tec && data.tec.title }}</div>
            </div>
          </div>
        </v-col>

        <v-col class="colReight" cols="12" sm="6">
          <div>
            <div class="price">{{ data.final_price }} {{ $t(allAuth.country) }}</div>
            <div class="id">#2567852</div>
          </div>
        </v-col>
      </v-row>

      <div class="statusAndDate">
        <v-row>
          <v-col cols="12" sm="6">
            <div class="status" :class="data.status">{{ $t(data.status) }}</div>
          </v-col>
          <v-col class="colReight" cols="12" sm="6">
            <div class="date flex__">{{ data.date_2 }}</div>
          </v-col>
        </v-row>
      </div>
      <div class="des">
        {{ data.tec.description }}
      </div>

      <div class="ActiveUrl" v-if="data.status === 'Accepted'">
        <p>{{ $t("Click Here To Check Your Service") }}</p>
        <a
          :href="'https://' + data.domain + '.tecbadia.com'"
          target="_blank"
          rel="noopener"
          >{{ data.domain }}.tecbadia.com<button>{{ data.domain }}</button></a
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: ["data"],
  computed: {
    ...mapGetters(["allAuth"]),
  },
};
</script>
