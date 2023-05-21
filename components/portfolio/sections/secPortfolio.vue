<template>
  <div class="PSeccontactUS">
    <div class="container2__" style="padding: 100px 7px">
      <v-row justify="space-around">
        <v-col cols="12" md="4">
          <div class="PSeccontactUS_i">
            <div class="iconCall_">
              <div class="iconCall"></div>
            </div>
            <p>+1 386-688-3295</p>
            <p>+1 386-688-3295</p>
          </div>
        </v-col>

        <v-col cols="12" md="4">
          <div class="PSeccontactUS_i">
            <div class="iconCall_">
              <div class="iconCall iconEmail"></div>
            </div>
            <p>Ourstudio@hello.com</p>
            <p>Ourstudio@hello.com</p>
          </div>
        </v-col>

        <v-col cols="12" md="4">
          <div class="PSeccontactUS_i">
            <div class="iconCall_">
              <div class="iconCall iconLocation"></div>
            </div>
            <p>8819 Ohio St. South Gate,</p>
            <p>CA 90280</p>
          </div>
        </v-col>
      </v-row>
    </div>
    <div class="form_">
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              :label="$t('Enter your name')"
              required
              outlined
              dense
              class="input"
              v-model="data.name"
              :rules="[$rules.required]"
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              :label="$t('Your E-mail')"
              required
              dense
              outlined
              class="input"
              type="email"
              v-model="data.email"
              :rules="[$rules.required, $rules.email]"
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              :label="$t('Subject')"
              required
              outlined
              dense
              class="input"
              type="text"
              v-model="data.subject"
              :rules="[$rules.required]"
            ></v-text-field>
          </v-col>

          <v-col cols="12">
            <v-textarea
              outlined
              dense
              name="input-7-4"
              :label="$t('Your Message')"
              v-model="data.message"
              type="text"
              :rules="[$rules.required]"
            ></v-textarea>
          </v-col>
        </v-row>

        <button
          @click="contactFunction"
          :disabled="!valid"
          :loading="allContact.loading"
          class="send"
          type="submit"
        >
          {{ $t("Send Message") }}
        </button>

        <Msg api="contact" />
      </v-form>
    </div>
  </div>
</template>
 
 <script>
import { mapActions, mapGetters } from "vuex";
import Msg from "../../tools/msgApi.vue";

export default {
  components: {
    Msg,
  },
  data() {
    return {
      valid: false,
      data: { name: "", email: "", phone: "", subject: "", message: "" },
      msg: "",
    };
  },
  computed: { ...mapGetters(["allContact"]) },
  methods: {
    ...mapActions(["contactAction"]),
    contactFunction(e) {
      e.preventDefault();
      if (this.$refs.form.validate() === false) return false;

      this.contactAction(this.data);
    },
  },
};
</script>


 