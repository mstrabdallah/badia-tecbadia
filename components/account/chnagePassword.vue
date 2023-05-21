<template>
  <div class="page changePassword">
    <div class="headPages">
      <div class="headPages_content">
        <h4>{{ $t("Change password") }}</h4>
        <h3>{{ $t("Change password") }}</h3>
        <p>{{ $t("Please write the new password in the fields below.") }}</p>
      </div>
    </div>

    <div class="forgotContent inputS1" v-if="allUsers.changePasswordStep === 1">
      <div class="form_login_cc">
        <div class="form_login">
          <div class="form">
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field
                v-model="data.password"
                :append-icon="showOldPasswordLogin ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[$rules.required, $rules.password]"
                :type="showOldPasswordLogin ? 'text' : 'password'"
                :label="$t('Enter the Old password')"
                @click:append="showOldPasswordLogin = !showOldPasswordLogin"
                outlined
              ></v-text-field>

              <v-text-field
                v-model="data.newPassword"
                :append-icon="showPasswordLogin ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[$rules.required, $rules.password]"
                :type="showPasswordLogin ? 'text' : 'password'"
                :label="$t('Enter the new password')"
                @click:append="showPasswordLogin = !showPasswordLogin"
                outlined
              ></v-text-field>

              <v-text-field
                v-model="data.new_password_confirmation"
                :append-icon="showPasswordLogin ? 'mdi-eye' : 'mdi-eye-off'"
                :type="showPasswordLogin ? 'text' : 'password'"
                :label="$t('Re-enter The new Password')"
                @click:append="showPasswordLogin = !showPasswordLogin"
                :rules="[
                  $rules.required,
                  $rules.confirmPassword(
                    data.new_password_confirmation,
                    data.newPassword
                  ),
                ]"
                outlined
              ></v-text-field>

              <Msg api="changePassword" />

              <v-btn
                :disabled="!valid"
                class="submit"
                @click="forgotPasswordFunction"
                :loading="allUsers.loading"
                type="submit"
              >
                {{ $t("Change Password") }}
              </v-btn>
            </v-form>
          </div>
        </div>
      </div>
    </div>

    <div class="changePasswordDone" v-else>
      <nuxt-img
        alt="password"
        loading="lazy"
        src="/images/changePasswordDone.svg"
      />

      <h3>{{ $t("your password was changed successfully") }}</h3>
      <p>
        {{ $t("You can go back to home page to explore more in our website.") }}
      </p>
      <NuxtLink :to="localePath('/')">
        <v-btn class="button_">{{ $t("Go Back To Home Page") }}</v-btn>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    Msg: () => import("../../components/tools/msgApi.vue"),
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
      valid: false,
      showPasswordLogin: false,
      showOldPasswordLogin: false,

      data: {
        password: "",
        newPassword: "",
        new_password_confirmation: "",
      },
    };
  },
  computed: {
    ...mapGetters(["allUsers"]),
  },

  methods: {
    ...mapActions(["changePassword"]),

    forgotPasswordFunction(e) {
      e.preventDefault();
      if (this.$refs.form.validate() === false) return false;
      this.changePassword(this.data);
    },
  },
};
</script>

<style lang="scss">
@import "./styles/account.scss";
</style>
