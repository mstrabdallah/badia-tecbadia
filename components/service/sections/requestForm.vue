<template>
  <div>
    <div class="requestForm container__" v-if="AllListOforder.stepCreate === 1">
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

          <v-col class="col-12">
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

          <v-col class="col-12">
            <div class="reqProducts">
              <h4>{{ $t("Which Products Do You Need ?") }}</h4>

              <div v-if="allServices.loading">{{ $t("loading") }}</div>

              <div
                class="checkBox_ flex__"
                v-else
                v-for="(res, i) in allServices.serviceData.services"
                :key="i"
              >
                <v-checkbox
                  v-model="data.services"
                  :label="res.title"
                  :value="res.id"
                  @click="totalPriceFunction()"
                  :rules="[$rules.required]"
                  required
                ></v-checkbox>

                <!-- <div class="priceCheckBox price">
                  {{ res.default_price }} <span>{{ $t(allAuth.country) }}</span>
                </div> -->
              </div>

              <div class="priceContainer">
                <!-- <div class="priceLabel">{{ $t("Total") }} :</div>
                <div class="price">
                  {{ TotalPrice }} <span>{{ $t(allAuth.country) }}</span>
                </div> -->

                <Msg api="register" />

                <div class="buttons">
                  <v-btn
                    @click="RegisterFunction"
                    :disabled="
                      !valid ||
                      AllListOforder.registerLoading ||
                      AllListOforder.loadingCheckDomain
                    "
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

    <div v-else>
      <SecPrice sub="show" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Msg from "../../tools/msgApi.vue";
import SecPrice from "../../pricing/sections/secPrice.vue";
export default {
  components: {
    Msg,
    SecPrice,
  },

  data() {
    return {
      valid: false,
      showPassword: false,
      showPasswordConfirmation: false,
      TotalPrice: 0,
      arrayServ: [],

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
        tec_id: this.$route.params.id,
        domain: "",
        services: [],
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

  mounted() {
    this.setStepCreateOrder(1);
  },
  computed: {
    ...mapGetters(["allAuth", "allServices", "AllListOforder"]),
  },

  methods: {
    ...mapActions([
      "register",
      "orderCreate",
      "checkDomain",
      "setStepCreateOrder",
    ]),

    RegisterFunction(e) {
      e.preventDefault();
      if (this.$refs.form.validate() === false) return false;
      if (this.allAuth.checkAuth) this.orderCreate(this.data);
      else this.register(this.data);
    },

    totalPriceFunction(e) {
      this.TotalPrice = 0;
      for (let i = 0; i < this.data.services.length; i++) {
        if (this.data.services[i]) {
          var findItem = this.allServices.serviceData.services.find(
            (res) => res.id === this.data.services[i]
          );
          this.TotalPrice += parseInt(findItem.default_price);
        }
      }
    },

    checkDomainFunction() {
      this.checkDomain(this.data.domain);
    },
  },
};
</script> 