<template>
  <div>
    <div class="requestForm container__">
      <h1
        style="text-align: center; margin-bottom: 60px"
        v-html="$t('Register to order our product now!')"
      ></h1>
      <v-form ref="form" v-model="valid" lazy-validation class="formS1">
        <v-row>
          <v-col class="col-12 col-sm-6" v-if="!allAuth.checkAuth">
            <div class="input">
              <v-text-field
                :label="$t('Name')"
                type="text"
                v-model="data.name"
                :rules="[$rules.required]"
                outlined
                dense
              >
              </v-text-field>
            </div>
          </v-col>

          <v-col class="col-12 col-sm-6">
            <div class="input">
              <v-text-field
                :label="$t('Facility Name')"
                v-model="data.facility_name"
                :rules="[$rules.required]"
                outlined
                dense
              ></v-text-field>
            </div>
          </v-col>

          <v-col class="col-12 col-sm-6" v-if="!allAuth.checkAuth">
            <div class="input">
              <v-text-field
                :label="$t('E-mail')"
                type="email"
                v-model="data.email"
                :rules="[$rules.email]"
                required
                outlined
                dense
              ></v-text-field>
            </div>
          </v-col>

          <v-col class="col-12 col-sm-6" v-if="!allAuth.checkAuth">
            <div class="input">
              <v-text-field
                :label="$t('Phone Number')"
                v-model="data.phone"
                :rules="[$rules.required]"
                required
                outlined
                dense
              ></v-text-field>
            </div>
          </v-col>

          <v-col class="col-12 col-sm-6" v-if="!allAuth.checkAuth">
            <div class="input">
              <v-text-field
                v-model="data.password"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                :type="showPassword ? 'text' : 'password'"
                :label="$t('Password')"
                :rules="[$rules.required, $rules.password]"
                @click:append="showPassword = !showPassword"
                required
                outlined
                dense
              ></v-text-field>
            </div>
          </v-col>

          <v-col class="col-12 col-sm-6" v-if="!allAuth.checkAuth">
            <div class="input">
              <v-text-field
                v-model="data.password_confirmation"
                :append-icon="
                  showPasswordConfirmation ? 'mdi-eye' : 'mdi-eye-off'
                "
                :type="showPasswordConfirmation ? 'text' : 'password'"
                :rules="[
                  $rules.required,
                  $rules.confirmPassword(
                    data.password_confirmation,
                    data.password
                  ),
                ]"
                :label="$t('Re-enter the password')"
                @click:append="
                  showPasswordConfirmation = !showPasswordConfirmation
                "
                outlined
                dense
                required
              ></v-text-field>
            </div>
          </v-col>

          <v-col class="col-12 col-sm-6" v-if="!allAuth.checkAuth">
            <div class="input">
              <v-select
                :items="position"
                required
                :label="$t('position')"
                type="text"
                v-model="data.position"
                :rules="[$rules.required]"
                item-text="name"
                item-value="value"
                outlined
                dense
              ></v-select>
            </div>
          </v-col>

          <v-col class="col-12 col-sm-6">
            <div class="input">
              <v-text-field
                :label="$t('Activity Type')"
                type="text"
                v-model="data.activity_type"
                :rules="[$rules.required]"
                outlined
                dense
              >
              </v-text-field>
            </div>
          </v-col>

          <v-col class="col-12 col-sm-6">
            <div class="input">
              <v-select
                :items="employees"
                required
                item-text="name"
                item-value="value"
                outlined
                dense
                :label="$t('Employees No.')"
                v-model="data.employee_numbers"
                :rules="[$rules.required]"
              ></v-select>
            </div>
          </v-col>

          <v-col class="col-12 col-sm-6">
            <div class="input">
              <v-select
                :items="activityType"
                required
                :rules="[$rules.required]"
                item-text="name"
                item-value="value"
                def
                outlined
                dense
                :label="$t('Do you have an accountant?')"
                v-model="data.has_accountant"
              ></v-select>
            </div>
          </v-col>

          <v-col col="12">
            <div class="input inputDomain" style="direction: ltr">
              <v-text-field
                v-model="data.domain"
                :label="$t('Domain')"
                :rules="[
                  $rules.required,
                  $rules.checkDomain('', AllListOforder.domainExists),
                ]"
                suffix=".tecbadia.com"
                @keyup="checkDomainFunction"
                :loading="AllListOforder.loadingCheckDomain"
                outlined
                dense
              ></v-text-field>
            </div>
          </v-col>
          <v-col cols="12">
            <p style="padding: 0px 35px; color: #999999">
              {{
                $t(
                  " Note : This sub domain allows you to see your choosen service after it’s been processed and accepted."
                )
              }}
            </p></v-col
          >
          <v-col cols="12">
            <div class="reqProducts">
              <div class="priceContainer">
                <Msg api="productRegister" />

                <div class="buttons">
                  <v-btn
                    @click="RegisterFunction"
                    :disabled="!valid || AllListOforder.registerLoading || AllListOforder.loadingCheckDomain"
                    :loading="AllListOforder.registerLoading"
                    class="submit"
                    type="submit"
                  >
                    {{ $t("NEXT") }}
                  </v-btn>
                </div>
                <div class="Note">
                  {{
                    $t(
                      "Note : you won’t be charged for any money until your trial ends."
                    )
                  }}
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
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
      showPassword: false,
      showPasswordConfirmation: false,
      TotalPrice: 10,

      position: [
        {
          name: this.$i18n.t("employer"),
          value: "employer",
        },
        {
          name: this.$i18n.t("Executive Director"),
          value: "Executive Director",
        },
        {
          name: this.$i18n.t("Chief Financial Officer"),
          value: "Chief Financial Officer",
        },
        {
          name: this.$i18n.t("Technical Director"),
          value: "Technical Director",
        },
        {
          name: this.$i18n.t("Operating Manger"),
          value: "Operating Manger",
        },
        {
          name: this.$i18n.t("Human Resources Manager"),
          value: "Human Resources Manager",
        },
        {
          name: this.$i18n.t("Director of Marketing"),
          value: "Director of Marketing",
        },

        {
          name: this.$i18n.t("Project manager"),
          value: "Project manager",
        },
        {
          name: this.$i18n.t("Sales manager"),
          value: "Sales manager",
        },
        {
          name: this.$i18n.t("Other"),
          value: "Other",
        },
      ],

      employees: [
        {
          name: "1 – 5",
          value: "5",
        },
        {
          name: "6 – 49",
          value: "49",
        },
        {
          name: "50- 249",
          value: "5",
        },
        {
          name: `${this.$i18n.t("more than")} 255`,
          value: "255",
        },
      ],
      activityType: [
        {
          name: this.$i18n.t("yes"),
          value: "yes",
        },
        {
          name: this.$i18n.t("no"),
          value: "no",
        },
      ],
      data: {
        tec_id: null,
        services: [this.$route.params.id],
        domain: "",
        name: "",
        facility_name: "",
        position: "",
        activity_type: "",
        employee_numbers: "",
        has_accountant: "yes",
        phone: "",
        email: "",
        password: "",
      },
    };
  },

  computed: {
    ...mapGetters(["allAuth", "allServices", "AllListOforder"]),
  },
  methods: {
    ...mapActions(["productRegister", "productCreate", "checkDomain"]),

    RegisterFunction(e) {
      e.preventDefault();
      if (this.$refs.form.validate() === false) return false;
      if (this.allAuth.checkAuth) this.productCreate(this.data);
      else this.productRegister(this.data);
      
    },

    checkDomainFunction() {
      this.checkDomain(this.data.domain);
    },
  },
};
</script>
