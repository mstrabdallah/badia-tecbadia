const state = {
  loading: true,
  data: [],
  DateMessage: "",
  msg: "",
  registerLoading: false,
  array: [],
  stepCreate: 1,
  domainExists: false,
  loadingCheckDomain: false,
};

const getters = {
  AllListOforder: (state) => state,
};

const actions = {

  setListOfOrder({ state }, payload) {
    state.data = payload.data;
    state.loading = false;
  },


  ListOfOrder({ state }) {
    state.loading = true;
    this.$axios.get("api/orders/myorders").then((res) => {
      state.data = res.data;
      state.loading = false;
    });
  },


  setStepCreateOrder({ state }, payload) {
    state.stepCreate = payload
  },
  register({ state, dispatch }, arrayData) {
    if (state.stepCreate === 1) {
      state.array.push(arrayData);
      var data = arrayData;
    }
    else {
      state.array.push(arrayData);
      var data = { ...state.array[0], ...state.array[1] };
    }
    //
    state.registerLoading = true;
    dispatch("setMsg", { msg: '', errors: null, api: "register", type: "error", });

    //
    this.$axios
      .get("api/register", { params: data })
      .then((res) => {
        state.registerLoading = false;
        if (res.data.status !== "fail") {

          if (state.stepCreate === 1) {
            state.stepCreate = 2;
          } else {


            this.$cookies.set("token", res.data.token, {
              path: "/",
              maxAge: 365 * 24 * 60 * 60,
            });
            dispatch("routerToPage", { url: "/orders" });
          }

        } else {
          dispatch("setMsg", { msg: res.data.message, errors: res.data.errors, api: "register", type: "error", });

        }
      })
      .catch((error) => {
        state.registerLoading = false;
      });

  },

  orderCreate({ state, dispatch }, arrayData) {

    if (state.stepCreate === 1) {
      state.array.push(arrayData);
      var data = arrayData;
    }
    else {
      state.array.push(arrayData);
      var data = { ...state.array[0], ...state.array[1] };
    }
    //
    state.registerLoading = true;
    dispatch("setMsg", { msg: '', errors: null, api: "register", type: "error", });


    this.$axios.get("api/order/create", { params: data }).then((res) => {
      state.registerLoading = false;

      if (res.data.status === "success") {

        if (state.stepCreate === 1) {
          state.stepCreate = 2;

        } else {
          dispatch("router", { url: "/orders" });
          dispatch("setToast", {
            title: "Order has been requested",
            des: "...",
          });
        }


      } else {
        this.$toast.error({
          title: this.$i18n.t(res.data.errors),
          message: this.$i18n.t(""),
          position: "top center",
          showMethod: "zoomInDown",
          hideMethod: "zoomOutUp",
          timeOut: 7000,
        });
      }
    });
  },



  // pro

  productRegister({ state, dispatch }, arrayData) {
    state.registerLoading = true;
    dispatch("setMsg", { msg: '', errors: null, api: "productRegister", type: "error", });

    this.$axios.get("api/order/create", { params: arrayData }).then((res) => {
      state.registerLoading = false;
      if (res.data.status !== "fail") {
        this.$cookies.set("token", res.data.token, { path: "/", maxAge: 365 * 24 * 60 * 60, });
        dispatch("routerToPage", { url: "/orders" });
      } else {
        dispatch("setMsg", { msg: res.data.message, errors: res.data.errors, api: "productRegister", type: "error", });
      }
    }).catch((error) => {
      state.registerLoading = false;
    });
  },

  productCreate({ state, dispatch }, arrayData) {
    state.array.push(arrayData);

    state.registerLoading = true;

    let data = { ...state.array[0], ...state.array[1] };

    this.$axios.get("api/order/create", { params: data }).then((res) => {
      state.registerLoading = false;

      if (res.data.status === "success") {
        dispatch("setToast", {
          title: this.$i18n.t('Order has been requested'),
          des: "...",
        });
        dispatch("router", { url: "/orders" });
      } else {

        this.$toast.error({
          title: this.$i18n.t(res.data.errors),
          message: this.$i18n.t(""),
          position: "top center",
          showMethod: "zoomInDown",
          hideMethod: "zoomOutUp",
          timeOut: 7000,
        });
      }
    });
  },

  checkDomain({ state, dispatch }, payload) {
    state.loadingCheckDomain = true;
    this.$axios
      .get("api/check_domain", { params: { domain: payload } })
      .then((res) => {
        state.loadingCheckDomain = false;
        state.domainExists = res.data.exists;
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
