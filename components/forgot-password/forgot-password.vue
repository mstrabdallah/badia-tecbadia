<template>
  <div class="page forgot">
    <div class="headPages">
      <div class="headPages_content">
        <h4>{{ $t("Forgot Password") }}</h4>
        <h3>{{ $t("Forgot your password?") }}</h3>
        <p>{{ $t("No problem, Just send a request and we got you.") }}</p>
      </div>
    </div>

    <div class="forgotContent inputS1">
      <div class="form_login_cc">
        <div class="form_login">
          <div class="form_title">
            <div class="note" v-if="allAuth.forgotStep === 1">
              {{
                $t(
                  "Please write the E-mail address that was used in your registration."
                )
              }}
            </div>
            <div class="note" v-if="allAuth.forgotStep === 2">
              {{ $t("Activation code has been sent, please enter it here") }}
            </div>
            <div class="note" v-if="allAuth.forgotStep === 3">
              {{ $t("Re-enter The new Password") }}
            </div>

            <div class="changePasswordDone" v-if="allAuth.forgotStep === 4">
              <nuxt-img
                alt="Done"
                loading="lazy"
                src="/images/changePasswordDone.svg"
              />

              <h3>{{ $t("your password was changed successfully") }}</h3>
              <p>
                {{
                  $t(
                    "You can go back to home page to explore more in our website."
                  )
                }}
              </p>
              <NuxtLink :to="localePath('/login')">
                <v-btn class="button_">{{ $t("Back To Login") }}</v-btn>
              </NuxtLink>
            </div>
          </div>

          <div class="form">
            <v-form ref="form" v-model="valid" lazy-validation>
              <div v-if="allAuth.forgotStep === 1">
                <div class="input">
                  <v-text-field
                    v-model="data.email"
                    :rules="[$rules.required, $rules.email]"
                    :label="$t('E-mail Address')"
                    required
                    outlined
                  ></v-text-field>
                </div>
              </div>

              <div
                class="ma-auto position-relative"
                style="max-width: 300px"
                v-if="allAuth.forgotStep === 2"
              >
                <v-otp-input
                  style="direction: ltr"
                  v-model="data.otp"
                  :loading="allAuth.loading"
                  @finish="finish"
                  length="4"
                ></v-otp-input>
              </div>

              <div v-if="allAuth.forgotStep === 3">
                <v-text-field
                  v-model="data.password"
                  :append-icon="showPasswordLogin ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="[$rules.required, $rules.password]"
                  :type="showPasswordLogin ? 'text' : 'password'"
                  :label="$t('Enter the new password')"
                  @click:append="showPasswordLogin = !showPasswordLogin"
                  outlined
                ></v-text-field>

                <v-text-field
                  v-model="data.new_password"
                  :append-icon="showPasswordLogin ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="showPasswordLogin ? 'text' : 'password'"
                  :label="$t('Re-enter The new Password')"
                  @click:append="showPasswordLogin = !showPasswordLogin"
                  :rules="[
                    $rules.required,
                    $rules.confirmPassword(data.new_password, data.password),
                  ]"
                  outlined
                ></v-text-field>
              </div>

              <Msg api="forget" />

              <v-btn
                :disabled="!valid"
                class="btnSub"
                @click="forgotPasswordFunction"
                :loading="allAuth.loading"
                v-if="allAuth.forgotStep != 4"
                type="submit"
              >
                {{ $t(inputText) }}
              </v-btn>
            </v-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Msg from "../../components/tools/msgApi.vue";
export default {
  components: {
    Msg,
  },
  head() {
    return {
      title: this.$i18n.t("Forgot Password"),
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
  data() {
    return {
      inputText: "",

      valid: false,
      showPasswordLogin: false,

      data: {
        email: "",
        otp: "",
        password: "",
        new_password: "",
      },
    };
  },
  computed: {
    ...mapGetters(["allAuth"]),
  },
  mounted() {
    this.inputText = this.allAuth.forgotStep == 1 ? "Send OTP" : "NEXT";
  },
  methods: {
    ...mapActions(["forgotPassword"]),

    finish() {
      this.forgotPassword(this.data);
    },

    forgotPasswordFunction(e) {
      e.preventDefault();
      if (this.$refs.form.validate() === false) return false;
      this.forgotPassword(this.data);
    },
  },
};
</script>

<style lang="scss">
@import "./styles/forgot.scss";
</style>
