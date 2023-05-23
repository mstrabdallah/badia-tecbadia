<template>
  <section class="servicePage page">
    <div class="headPages">
      <div class="headPages_content">
        <h4>{{ $t("Request Form") }}</h4>
        <h3>{{ $t("Free Trial Request Form") }}</h3>
        <p>
          {{
            $t(
              "Please fill out this form to continue your free trial to our services."
            )
          }}
        </p>
      </div>
    </div>
    <RequestFrom />
  </section>
</template>

<script>
import Msg from "../tools/msgApi.vue";
import { mapGetters, mapActions } from "vuex";
import RequestFrom from "./sections/requestForm.vue";
export default {
  head() {
    return {
      title: this.allServices.serviceData.title,
    };
  },
  components: {
    Msg,
    RequestFrom,
  },

  mounted() {
    // this.getservice(this.$route.params.id);
    // this.getPricings();
  },
  computed: {
    ...mapGetters(["allServices", "allAuth"]),
  },
  methods: {
    // ...mapActions(["getservice", "getPricings"]),
  },
};
</script>
<style lang="scss">
@import "./styles/service.scss";
</style>
