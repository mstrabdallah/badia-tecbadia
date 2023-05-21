const state = { counters: [], loading: false };
const getters = { allCounters: (state) => state };


const actions = {

  getCounters({ state }) {
    state.loading = true;
    this.$axios.get("api/counters").then((res) => {
      state.counters = res.data?.counters;
      state.loading = false;
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
