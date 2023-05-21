const state = {
  works: [],
  portfolio:[],
  loadingPort: true
};
const getters = {
  allPortfolio: (state) => state
};
const actions = {
  // getWorks({ state }) {
  //   state.loading = true;
  //   this.$axios.get("api/work").then((res) => {
  //       state.works = res.data.data;
  //       state.loading = false;
  //     })
  //     .catch((error) => {
  //       state.loading = false;
  //       dispatch("setMsg", {
  //         msg: error.msg,
  //         errors: error.errors,
  //         api: "works",
  //         type: "error",
  //       });
  //     });
  // },

  async setLoadingGetPortfolio({ state }, payload) {
    state.loadingPort = payload;
  },

  async setDataGetPortfolio({ state }, payload) {
    state.portfolio = payload;
  },

  getPortfolio({ state }) {
    if (state.portfolio.length > 0) return false;

    state.loadingPort = true;
    this.$axios.get("api/portfolio").then((res) => {
        state.portfolio = res.data.portfolios;
        state.loadingPort = false;
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
