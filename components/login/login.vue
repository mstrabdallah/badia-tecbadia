<template>
  <div class="login page">
    <div class="loginBG"></div>

    <div class="login_form">
      <h2 class="title" v-html="$t('loginTitle')"></h2>

      <div class="form_login_cc">
        <div class="form_login">
          <div class="form">
            <v-form ref="form" v-model="valid" lazy-validation>
              <div class="input">
                <label class="label">{{ $t("Email") }}</label>
                <v-text-field
                  v-model="data.email"
                  :rules="[$rules.required, $rules.email]"
                  :label="$t('Enter your Email')"
                  required
                  outlined
                  solo
                ></v-text-field>
              </div>
              <!-- $rules.number -->

              <div class="input">
                <label class="label">{{ $t("Password") }}</label>
                <v-text-field
                  v-model="data.password"
                  :append-icon="showPasswordLogin ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="[$rules.required]"
                  :type="showPasswordLogin ? 'text' : 'password'"
                  :label="$t('Enter your Password')"
                  @click:append="showPasswordLogin = !showPasswordLogin"
                  required
                  outlined
                  solo
                ></v-text-field>
              </div>

              <NuxtLink :to="localePath('/forgot-password')" class="Forgot">
                {{ $t("Forgot Password?") }}
              </NuxtLink>
              <Msg api="login" />
              <v-btn
                :disabled="!valid"
                class="button_login button"
                @click="OnLogin"
                :loading="allAuth.loading"
                type="submit"
              >
                {{ $t("Login") }}
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
import Msg from "../tools/msgApi.vue";
export default {
  components: {
    Msg,
  },
  data() {
    return {
      loading: false,
      valid: false,
      showPasswordLogin: false,
      data: {
        password: "",
        email: "",
      },
    };
  },
  computed: {
    ...mapGetters(["allAuth"]),
  },
  methods: {
    ...mapActions(["LoginAction"]),

    OnLogin(e) {
      e.preventDefault();
      if (this.$refs.form.validate() === false) return false;

      this.LoginAction(this.data);
    },
  },
};
</script>

<style lang="scss">
@import "./styles/login.scss";
</style>
