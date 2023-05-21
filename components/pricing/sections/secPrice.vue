<template>
  <section class="business">
    <div class="container2__ zindex1">
      <div class="head_">
        <h2 class="h1_">{{ $t("Choose the right plan for your business") }}</h2>
        <p v-if="tec">{{ tec }} {{ $t("for all kinds of businesses") }}</p>
      </div>

      <div class="bunch_type">
        <div
          class="BillMonthly"
          :class="Bill === 'monthly' && 'active'"
          @click="changeBill('monthly')"
        >
          {{ $t("Bill Monthly") }}
        </div>
        <div
          class="BillYearly"
          :class="Bill === 'yearly' && 'active'"
          @click="changeBill('yearly')"
        >
          {{ $t("Bill Yearly") }}
        </div>

        <div
          class="BillYearly"
          :class="Bill === 'forever' && 'active'"
          @click="changeBill('forever')"
        >
          {{ $t("Bill complete") }}
        </div>
      </div>

      <v-row
        class="zindex1 justify-content-between"
        v-if="allPricings.pricings && allPricings.pricings.length > 0"
      >
        <v-col
          cols="12"
          sm="12"
          md="4"
          lg="4"
          v-for="(res, i) in allPricings.pricings"
          :key="res.id"
        >
          <div class="bunch" data-aos="fade-up" data-aos-duration="1000">
            <div class="bunch_head" v-if="i === 1">{{ $t("Recommended") }}</div>
            <div class="bunch_">
              <h3>{{ res.title }}</h3>
              <div class="price">
                <strong v-if="Bill === 'monthly'">
                  {{ res.price }} <span>{{ $t(allAuth.country) }}</span>
                </strong>

                <strong v-if="Bill === 'yearly'">
                  {{ res.yearly_price }} <span>{{ $t(allAuth.country) }}</span>
                </strong>
                <strong v-if="Bill === 'forever'">
                  {{ res.forever_price }} <span>{{ $t(allAuth.country) }}</span>
                </strong>

                <span>/{{ $t("mo") }}</span>
                <p>{{ res.discount_description }}</p>
              </div>

              <div class="bunch_content">
                <h4>{{ $t("Includes") }}:</h4>
                <ul>
                  <li v-for="item in res.properties" :key="item.id">
                    {{ item.title }}
                  </li>
                </ul>
                <v-btn
                  :disabled="
                    AllListOforder.loadingCreate ||
                    AllListOforder.registerLoading
                  "
                  :loading="
                    AllListOforder.loadingCreate ||
                    AllListOforder.registerLoading
                  "
                  type="submit"
                  v-if="sub === 'show'"
                  :class="i === 1 ? ' show' : ''"
                  @click="submit({ pricing_id: res.id, pricing_type: Bill })"
                  >{{ $t("Start My Free Trial") }}</v-btn
                >
              </div>
            </div>
          </div>
        </v-col>
      </v-row>

      <div v-else>
        <Loading />
      </div>
    </div>
  </section>
</template>
<script>
import Loading from "../../tools/loadingP.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      Bill: "yearly",
    };
  },
  props: ["sub", "tec"],
  components: {
    Loading,
  },
  computed: {
    ...mapGetters(["allPricings", "AllListOforder", "allAuth"]),
  },
  methods: {
    ...mapActions(["orderCreate", "register"]),
    changeBill(payload) {
      this.Bill = payload;
    },

    submit(payload) {
      if (this.allAuth.checkAuth) this.orderCreate(payload);
      else this.register(payload);
    },
  },
  async mounted() {},
};
</script>
 