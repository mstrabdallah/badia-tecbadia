const state = {
  loading: false,
  showModal: false,
};

const getters = {
  allContact: (state) => state
};
const actions = {
  contactAction({ state }, arrayData) {
    state.loading = true;
    var data = new FormData();
    data.append("name", arrayData.name);
    data.append("email", arrayData.email);
    data.append("phone", arrayData.phone);
    data.append("subject", arrayData.subject);
    data.append("message", arrayData.message);
    this.$axios.post("api/contacts/store", data).then((res) => {
      state.loading = false;
      state.showModal = true;
    }, 6000).catch((error) => {
      state.loading = false;
      dispatch("setMsg", { msg: res.data.msg, errors: res.data.errors, api: "contact", type: "error", });
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
