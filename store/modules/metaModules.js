const state = {
  aboutUs: [],
  index: [],
  blogs: [],
  services: [],
  contactUs: [],
  login: [],
  orders: [],
  portfolio: [],
  privacyPolicy: [],
  termsCondition: []

};

const getters = {
  allMeta: (state) => state,
};

const actions = {


  //
  async setPageMetas({ state }, payload) {
    
    // console.log(payload,'payload')
    state.index = payload.find((res) => res.key === "home")
    state.blogs = payload.find((res) => res.key === "blogs")
    state.services = payload.find((res) => res.key === "services")
    state.aboutUs = payload.find((res) => res.key === "aboutUs")
    state.contactUs = payload.find((res) => res.key === "contactUs")
    state.login = payload.find((res) => res.key === "login")
    state.orders = payload.find((res) => res.key === "orders")
    state.portfolio = payload.find((res) => res.key === "portfolio")
    state.privacyPolicy = payload.find((res) => res.key === "privacyPolicy")
    state.termsCondition = payload.find((res) => res.key === "termsCondition")


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
