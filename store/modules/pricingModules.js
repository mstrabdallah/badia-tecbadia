const state = { pricings: [], loading: true };
const getters = { allPricings: (state) => state };
const actions = {

  setLoadingGetPricings({ state }, payload) {
    state.loading = payload;
  },

  setDataGetPricings({ state }, payload) {
    state.pricings = payload;
  },

  getPricings({ state }) {
    if (state.pricings.length > 0) return false;

    state.loading = true;
    this.$axios
      .get("api/pricing")
      .then((res) => {
        state.pricings = res.data.pricings;
        state.loading = false;
      })
      .catch((error) => {
        state.loading = false;
        dispatch("setMsg", {
          msg: error.msg,
          errors: error.errors,
          api: "pricing",
          type: "error",
        });
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
