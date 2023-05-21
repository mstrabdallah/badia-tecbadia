const state = {
  loading: false,
  boxEmail: false,
  boxZoom: false,
  done: false

};

const getters = {
  allSidebar: (state) => state,
};

const actions = {
  setBoxEmail({ state }, payload) {
    state.boxEmail = payload;
    if(payload === true) state.done = false
  },

  setBoxZoom({ state }, payload) {
    state.boxZoom = payload;
   if(payload === true) state.done = false
  },



  sendEmail({ state, dispatch }, payload) {
    state.loading = true;

    this.$axios.$get("api/contacts", { params: payload }).then((res) => {
      state.loading = false;
      if (res.status === 'success') {
        state.done = true
      } else {
        dispatch("setMsg", { msg: res.msg, errors: res.errors, api: "contacts", type: "error", });
      }
    }).catch((error) => {
      state.loading = false;
      // dispatch("setMsg", { msg: error?.data?.msg, errors: error?.data?.errors, api: "services", type: "error", });
    });
  },

  sendZoom({ state, dispatch }, payload) {
    state.loading = true;

    this.$axios.$get("api/contacts", { params: payload }).then((res) => {
      state.loading = false;
      if (res.status === 200) {
        state.done = true
      } else {
        dispatch("setMsg", { msg: res.msg, errors: res.errors, api: "contacts", type: "error", });
      }
    }).catch((error) => {
      state.loading = false;
      // dispatch("setMsg", { msg: error?.data?.msg, errors: error?.data?.errors, api: "services", type: "error", });
    });;
  },
};

const mutations = {};
export default {
  state,
  getters,
  actions,
  mutations,
};
