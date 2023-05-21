<template>
  <div class="modelBox" :class="!allSidebar.boxEmail && 'hide'">
    <div class="close_" @click="setBoxEmail_(false)">
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
          <h3>{{ $t("Chat With E-mail") }}</h3>
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

          <div class="input">
            <v-textarea
              v-model="data.message"
              :rules="[$rules.required]"
              required
              outlined
              dense
              rows="3"
              :label="$t('Write Your Message ..')"
            ></v-textarea>
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

      <div class="done"  :class="allSidebar.done && ' show'">
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
        type: "contact",

        message: "",
        // subject: "",
        // date: "",
      },
    };
  },
  computed: {
    ...mapGetters(["allSidebar"]),
  },
  methods: {
    ...mapActions(["setBoxEmail", "sendEmail"]),
    setBoxEmail_(payload) {
      this.$refs.form.reset();
      this.setBoxEmail(payload);
    },
    sendEmailFunction(e) {
      e.preventDefault();
      if (this.$refs.form.validate() === false) return false;
      this.sendEmail(this.data);
    },
  },
};
</script>
