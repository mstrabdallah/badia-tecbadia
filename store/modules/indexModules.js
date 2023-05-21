const state = {
  data: [],
  slider: [],
  opinion: [],
  ourClients: [],
  ourClientsCol1: [],
  ourClientsCol2: [],
  loadingSlider: true,
  loadingOpinion: true,
  loadingOpinion: true,
  loadingOurClients: true,
  page_metas: []

};

const getters = {
  allIndex: (state) => state,
};

const actions = {

  getOpinion({ state }) {
    if (state.opinion.length > 0) return false;

    state.loadingOpinion = true;
    this.$axios.get("api/opinion").then((res) => {
      state.opinion = res.data?.opinions;
      state.loadingOpinion = false;
    })
  },
  getHomeSlider({ state, getters }) {
    if (state.slider.length > 0) return false;

    state.loadingSlider = true;
    this.$axios.get(`api/slider`).then((res) => {
      state.slider = res.data?.slider;
      state.loadingSlider = false;
    })
  },

  //
  getHomeOurClients({ state }) {
    if (state.ourClients.length > 0) return false;

    state.loadingOurClients = true;
    this.$axios.get("api/our_clients").then((res) => {
      state.ourClients = res.data.our_clients;
      for (let i = 0; i < res.data?.our_clients?.length; i++) {
        if (res.data.our_clients[i].id % 2) {
          state.ourClientsCol1.push(res.data.our_clients[i])
        } else {
          state.ourClientsCol2.push(res.data.our_clients[i])
        }
      }
    })
    state.loadingOurClients = false;
  },



};

const mutations = {

};
export default {
  state,
  getters,
  actions,
  mutations,
};
