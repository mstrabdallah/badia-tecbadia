<template>
  <div class="modelBox" :class="!allSidebar.boxZoom && 'hide'">
    <div class="close_" @click="setBoxZoom_(false)">
      <div class="close"></div>
    </div>

    <div class="modelBox_content">
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
        :class="allSidebar.done && 'hideForm'"
      >
        <header>
          <h3>{{ $t("Schedule Zoom Meeting") }}</h3>
        </header>

        <div class="content">
          <div class="input">
            <v-text-field
              v-model="data.name"
              :rules="[$rules.required]"
              :label="$t('Name')"
              required
              outlined
              dense
            ></v-text-field>
          </div>

          <div class="input">
            <v-text-field
              v-model="data.email"
              :rules="[$rules.required, $rules.email]"
              :label="$t('E-mail')"
              required
              outlined
              dense
            ></v-text-field>
          </div>

          <div class="input">
            <v-text-field
              v-model="data.phone"
              :rules="[$rules.required]"
              :label="$t('Phone')"
              required
              outlined
              dense
            ></v-text-field>
          </div>

          <div class="input date">
            <v-date-picker v-model="data.date"></v-date-picker>
          </div>
        </div>

        <footer>
          <v-btn
            text
            @click="sendEmailFunction"
            :disabled="!valid || allSidebar.loading"
            :loading="allSidebar.loading"
            type="submit"
          >
            <div class="btn_icon"></div
          ></v-btn>
        </footer>
      </v-form>

      <div class="done" :class="allSidebar.done && ' show'">
        <v-icon>mdi-check</v-icon>
        <h4
          v-html="
            $t(
              'We received your message now, we will contact you as soon as possible'
            )
          "
        ></h4>
      </div>
    </div>
  </div>
</template>


<script>
import { mapActions, mapGetters } from "vuex";
import Msg from "../../../components/tools/msgApi.vue";
export default {
  data() {
    return {
      valid: false,
      data: {
        name: "",
        email: "",
        phone: "",
        type: "zoom",
        // message: "",
        date: "",
      },
    };
  },
  computed: {
    ...mapGetters(["allSidebar"]),
  },
  methods: {
    ...mapActions(["setBoxZoom", "sendEmail"]),

    setBoxZoom_(payload) {
      this.$refs.form.reset();
      this.setBoxZoom(payload);
    },

    sendEmailFunction(e) {
      e.preventDefault();
      if (this.$refs.form.validate() === false) return false;
      this.data.date = this.data.date + " 00:00";
      this.sendEmail(this.data);
    },
  },
};
</script>
