const state = {
  checkAuth: false,
  step: 1,
  token: "",
  user: [],
  UserName: "",
  cart: {},
  register: [],
  domain: "",
  loading: false,
  loadingReg: true,
  errors: [],
  forgotStep: 1,
  forgotP: [],
  country: "SA",
  countryState: false,
  getUserDataLoading: true
};

const getters = {
  allAuth: (state) => state,
};

const actions = {
  //----
  async setApp({ state }, payload) {

    if (
      !state.checkAuth &&
      [
        "/orders",
        "/ar/orders",
        "/orders/",
        "/ar/orders/",
        "/account/change-password",
        "/ar/account/change-password",

        "/account/change-password/",
        "/ar/account/change-password/",

      ].includes(payload)
    ) {
      // dispatch("routerTo");
      // console.log('no vister')
    }

    if (state.checkAuth && ["/login", "/ar/login", "/login/", "/ar/login/"].includes(payload)) {
      // dispatch("routerTo");
      // console.log('no users')
    }
  },

  //----
  async setApi({ state }) {

    if (this.$router.app.context.$cookies.get("token")) {
      state.checkAuth = true;


      state.token = this.$router.app.context.$cookies.get("token");
      state.user = this.$router.app.context.$cookies.get("user");
      state.UserName = state.user?.name;
      await this.$axios.setHeader("Authorization", "Bearer " + this.$router.app.context.$cookies.get("token"));
    }


    if (this.$cookies.get("lang")) {
      await this.$i18n.setLocale(this.$cookies.get("lang"));
      await this.$axios.setHeader("lang", this.$cookies.get("lang"));
    } else {
      await this.$axios.setHeader("lang", this.$i18n.locale);
    }

    // if (this.$cookies.get("country_code")) {
    //   state.country = this.$cookies.get("country_code")
    // }

    await this.$axios.setHeader("country_code", state.country);



    //
  },

  //
  async changeCountry({ state }, payload) {
    await this.$cookies.set("country_code", payload, { path: "/", maxAge: 365 * 24 * 60 * 60, });
    location.reload();


  },
  //
  async setCountry({ state }, payload) {
    await this.$axios.setHeader("country_code", payload);
    state.country = payload

  },


  async changeLanguage(data) {
    await this.$cookies.set("lang", data, {
      path: "/",
      maxAge: 365 * 24 * 60 * 60,
    });
    location.reload();
  },

  //----

  before({ state, dispatch }) {
    state.loading = true;
    dispatch("setMsg", { msg: "", errors: [] });
  },

  //----

  routerTo() {
    if (this.$i18n.locale === "en") {
      this.$router.app.context.redirect("/");
    } else {
      this.$router.app.context.redirect("/ar");
    }
  },

  routerToPage({ state }, payload) {
    if (this.$i18n.locale === "en") {
      window.location.href = `${payload.url}`;
    } else {
      window.location.href = `/ar${payload.url}`;
    }
  },

  router({ state }, payload) {
    if (this.$i18n.locale === "en") {
      this.$router.app.context.redirect(payload.url);
    } else {
      this.$router.app.context.redirect(`/ar${payload.url}`);
    }
  },
  //----

  Logout() {
    this.$cookies.remove("token");
    this.$cookies.remove("user");

    if (this.$i18n.locale === "en") {
      window.location.href = "/";
    } else {
      window.location.href = "/ar";
    }
  },

  //----
  LoginAction({ state, dispatch }, arrayData) {
    var data = new FormData();
    data.append("email", arrayData.email);
    data.append("password", arrayData.password);
    //
    state.loading = true;
    dispatch("setMsg", { msg: "", errors: [], api: "login", type: "error" });
    //

    this.$axios
      .post("api/login", data)
      .then((res) => {
        state.loading = false;
        if (res.data.success === true) {
          this.$cookies.set("token", res.data.token, {
            path: "/",
            maxAge: 365 * 24 * 60 * 60,
          });

          dispatch("routerToPage", { url: "/" });
        } else {
          dispatch("setMsg", {
            msg: res.data.message,
            errors: res.data.errors,
            api: "login",
            type: "error",
          });
        }
      })
      .catch((error) => {
        state.registerLoading = false;
      });
  },

  //
  async getUserData({ state }) {
    if (state.checkAuth === false) return false;
    state.data = [];
    state.getUserDataLoading = true;
    await this.$axios.get("/api/user/info").then((res) => {
      state.getUserDataLoading = false;
      state.user = res.data?.user;
      this.$cookies.set("user", res.data?.user, { path: "/", maxAge: 365 * 24 * 60 * 60, });
      state.UserName = res.data.user?.name;
    }).catch((error) => {
      state.getUserDataLoading = false;

    });
  },
  //----
  addToCart({ state }, dataobj) {
    state.cart = dataobj;
  },

  //----
  orderAction({ state, dispatch }, arrayData) {
    var data = new FormData();
    data.append("tec id", arrayData.tech_id);
    data.append("services", JSON.stringify(arrayData.services));
    data.append("domain", arrayData.domain);

    this.$axios.post("api/tecs/chooseTec", data).then((res) => {
      state.loading = false;
      if (res.data.status === 200) {
        if (this.$i18n.locale === "en") {
          window.location.href = "/orders";
        } else {
          window.location.href = "/ar/orders";
        }
      } else {
        dispatch("setMsg", {
          msg: res.data.msg,
          errors: res.data.errors,
          api: "order",
          type: "error",
        });
      }
    });
  },
  //----

  forgotPassword({ state, dispatch }, arrayData) {
    if (arrayData.email) state.forgotP.push({ email: arrayData.email });
    if (arrayData.otp) state.forgotP.push({ otp: arrayData.otp });
    if (arrayData.password)
      state.forgotP.push({ password: arrayData.password });

    var data = new FormData();
    data.append("email", arrayData.email);
    data.append("otp", arrayData.otp);
    data.append("password", arrayData.password);

    state.loading = true;

    var Url = "api/password/forget";
    if (state.forgotStep === 2) Url = "api/password/reset/check";
    else if (state.forgotStep === 3) Url = "api/password/reset";

    this.$axios
      .post(Url, data)
      .then((res) => {
        state.loading = false;

        if (res.data.status !== "fail") {
          if (state.forgotStep === 1) state.forgotStep = 2;
          else if (state.forgotStep === 2) state.forgotStep = 3;
          else state.forgotStep = 4;
        } else {
          dispatch("setMsg", {
            msg: res.data.mgs,
            errors: res.data.errors,
            api: "forget",
            type: "error",
          });
        }
      })
      .catch((error) => {
        state.loading = false;
      });
  },
};

const mutations = {};
export default {
  state,
  getters,
  actions,
  mutations,
};
