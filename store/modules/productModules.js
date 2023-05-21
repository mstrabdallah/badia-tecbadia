const state = {
  data: [],
  products: [],
  productMsg: "",
  productData: {},
  total: 0,
  loadingProduct: true,
  loadingProductId: true
};

const getters = {
  allProducts: (state) => state,
};

const actions = {
  getproducts({ state }) {
    if (state.products.length > 0) return false;

    state.loadingProduct = true;
    this.$axios.get(`api/services`).then((res) => {
      state.products = res.data?.services;
      state.loadingProduct = false;
    });
  },
  async getproduct({ state }, id) {
    state.loadingProductId = true;
    state.productData = {};
    await this.$axios.get("api/services/" + id).then((res) => {
      state.loadingProductId = false;
      //
      state.productMsg = res.data.msg;
      state.productData = res.data.service;
      state.stepCreate = 1;
      state.total = res.data.servicr.default_price;
    })
  },
};

const mutations = {};
export default {
  state,
  getters,
  actions,
  mutations,
};
