const state = { partners: [], loadingPartners: true };
const getters = { allPartners: (state) => state };
const actions = {

  async setLoadingGetParteners({ state }, payload) {
    state.loadingPartners = payload;
  },

  async setDataGetParteners({ state }, payload) {
    state.partners = payload;
  },


  getParteners({ state, dispatch }) {
    if (state.partners.length > 0) return false;

    state.loadingPartners = true;
    this.$axios
      .get("api/partner")
      .then((res) => {
        state.partners = res.data.data;
        state.loadingPartners = false;
      })
      .catch((error) => {
        state.loadingPartners = false;
        dispatch("setMsg", {
          msg: error.msg,
          errors: error.errors,
          api: "Parteners",
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
