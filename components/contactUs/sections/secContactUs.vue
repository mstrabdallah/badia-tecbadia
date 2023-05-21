<template>
  <div class="PSeccontactUS">
    <div class="container2__" style="padding: 100px 7px">
      <v-row v-if="!hide" justify="space-around">
        <v-col cols="12" sm="4" md="4">
          <div class="PSeccontactUS_i">
            <div class="iconCall_">
              <div class="iconCall"></div>
            </div>
            <a
              style="direction: ltr; display: block; margin: auto"
              href="tel:+966534537573"
              >(+966) 534537573</a
            >
          </div>
        </v-col>

        <v-col cols="12" sm="4" md="4">
          <div class="PSeccontactUS_i">
            <div class="iconCall_">
              <div class="iconCall iconEmail"></div>
            </div>
            <a
              style="direction: ltr; display: block; margin: auto"
              href="mailto:info@tecbadia.com"
              >info@tecbadia.com</a
            >
          </div>
        </v-col>

        <v-col cols="12" sm="4" md="4">
          <div class="PSeccontactUS_i">
            <div class="iconCall_">
              <div class="iconCall iconLocation"></div>
            </div>
            <!-- <a href="https://goo.gl/maps/1vR99vmYCEu58dzp9" target="__blank"> -->
              <p>
                
                {{ $t("locationDes") }}
              </p>
            <!-- </a> -->
          </div>
        </v-col>
      </v-row>
    </div>
    <div class="form_">
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-row>
          <v-col cols="12" sm="4" md="4">
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

          <v-col cols="12" sm="4" md="4">
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

export default {
  props: ["hide"],
  components: {
    Msg: () => import("../../tools/msgApi.vue"),
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

<style lang="scss">
@import "~assets/styles/var.scss";

.PSeccontactUS {
  margin-top: 63px;

  form {
    text-align: center;
  }

  .PSeccontactUS_i {
    .iconCall_ {
      background: #ffffff;
      box-shadow: 0px 2px 10px rgb(0 0 0 / 14%);
      width: max-content;
      padding: 16px;
      border-radius: 50%;
      margin: auto;
      margin-bottom: 20px;

      .iconCall {
        width: 20px;
        height: 20px;
        background: url(/icons/phone.svg) no-repeat;
        background-size: 100% 100%;
      }

      .iconEmail {
        background: url(/icons/email.svg) no-repeat;
        background-size: 100% 100%;
      }

      .iconLocation {
        background: url(/icons/location.svg) no-repeat;
        background-size: 100% 100%;
      }
    }

    p,
    a {
      line-height: 150%;
      color: #77808b !important;
      text-align: center;
    }
  }

  .form_ {
    background: url(/images/bg_contactUs.svg) no-repeat;
    background-size: 100% 100%;
    width: 100%;
    height: 558px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 40px;

    .v-input__slot {
      background: #ffffff;
      box-shadow: 0px 2px 15px rgb(0 0 0 / 10%);
      border-radius: 15px;
    }

    fieldset {
      border: none;
    }

    .send {
      background: $c-t;
      border-radius: 15px;
      box-shadow: none;
      color: #fff;
      width: 260px;
      height: 45px;
      margin-top: 20px;
    }

    label {
      padding: 0px 10px;
      color: #d9d9d9;
    }

    .input {
      .v-text-field__slot {
        height: 45px;
      }
    }
  }
}
</style>
