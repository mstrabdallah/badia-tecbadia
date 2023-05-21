<template>
  <div class="page ordersPage">
    <div class="headPages">
      <div class="headPages_content">
        <h4>{{ $t("Your Orders") }}</h4>
        <h3>{{ $t("Your Order details, Order List.") }}</h3>
      </div>
    </div>

    <div class="text-center" v-if="AllListOforder.loading">
      <Loading />
    </div>

    <div class="container2__" v-else>
      <div v-if="AllListOforder.data.orders.length === 0">
        <div class="noData">
          <h3>{{ $t("You have no requests yet") }}</h3>
        </div>
      </div>
      <div v-else>
        <v-row>
          <v-col
            cols="12"
            sm="6"
            v-for="(res, i) in AllListOforder.data.accepted_orders"
            :key="i"
          >
            <SecCardOrder :data="res" />
          </v-col>
        </v-row>
        <div class="borderTop"></div>

        <v-row>
          <v-col
            cols="12"
            sm="6"
            v-for="(res, i) in AllListOforder.data.pending_orders"
            :key="i"
          >
            <SecCardOrder :data="res" />
          </v-col>
        </v-row>

        <SecTable :data="AllListOforder.data.orders" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Loading from "../tools/loadingP.vue";
import Msg from "../tools/msgApi.vue";
import SecCardOrder from "./sections/secCardOrder.vue";
import SecTable from "./sections/secTable.vue";

export default {
  head() {
    return {
      title: this.$i18n.t("Order List"),
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.$i18n.t(
            "We have support at all times, Just contact us."
          ),
        },
      ],
    };
  },
  components: {
    Loading,
    Msg,
    SecCardOrder,
    SecTable,
  },
  data() {
    return {};
  },

  computed: {
    ...mapGetters(["AllListOforder"]),
  },
  methods: {
    ...mapActions(["ListOfOrder", "DeleteCart", "UpdateCart","setListOfOrder"]),
  },
  mounted() {
    this.ListOfOrder();
  },

};
</script>

<style lang="scss">
@import "./styles/order.scss";
</style>
