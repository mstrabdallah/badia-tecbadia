const state = {
  loading: true,
  loadingSearch: false,
  data: [],
  dataSearch: [],
  serviceActive: [],
  serviceData: {},
  cart: {},
  total: 0,
  serviceMsg: "",
};
const getters = {
  allServices: (state) => state,
};
const actions = {


  async setLoadingGetservices({ state }, payload) {
    state.loading = payload;

  },

  async setDataGetservices({ state }, payload) {
    state.data = payload;
    state.serviceActive = payload[0]

  },

  async getservices({ state, dispatch }) {
    if (state.data.length > 0) return false;

    state.loading = true;
    state.data = [];
    await this.$axios.get("api/tecs").then((res) => {
      state.serviceMsg = res?.data?.msg;
      state.data = res.data;
      state.loading = false;
      state.serviceActive = res?.data[0]
    })
      .catch((error) => {
        state.loading = false;
        dispatch("setMsg", { msg: error?.data?.msg, errors: error?.data?.errors, api: "services", type: "error", });
      });
  },

  async getservicesSearch({ state, dispatch }, payload) {
    state.loadingSearch = true;
    state.data = [];
    await this.$axios.get(`api/service/search?keyword=${payload}`).then((res) => {
      state.loadingSearch = false;
      state.dataSearch = res.data
    })
  },

  async setService({ state }, payload) {
    state.serviceData = payload
  },

  async getservice({ state, dispatch }, id) {
    state.loading = true;
    state.serviceData = {};
    await this.$axios.get("api/tecs/" + id).then((res) => {
      state.serviceMsg = res.data.msg;
      state.serviceData = res.data.tec;
      state.stepCreate = 1;
      state.total = res.data.tec.default_price;
      state.loading = false;
    }).catch((error) => {
      state.loading = false;
      dispatch("setMsg", { msg: error?.data?.msg, errors: error?.data?.errors, api: "blogs", type: "error", });
    });
  },

  setserviceActive({ state }, payload) {
    state.serviceActive = payload
  },

  addToTotal({ state }, servPrice) {
    state.total = +state.total + +servPrice;
  },
  subFromTotal({ state }, servPrice) {
    if (state.total > state.serviceData.default_price) {
      state.total = +state.total - +servPrice;
    }
  },
  addToCart({ state }, dataobj) {
    state.cart = dataobj;
  },
};

const mutations = {};
export default {
  state,
  getters,
  actions,
  mutations,
};
