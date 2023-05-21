const state = {
  loading: false,
  loadingComp: false,
  data: [],
  userData: [],
  companies: [],
  menuHeader: false,
  overlay: false,
  changePasswordStep: 1,
};

const getters = {
  allUsers: (state) => state,
};

const actions = {
  changeMenuHeader({ state }, data) {
    state.menuHeader = data;
  },

  setOverlay({ state }, data) {
    state.overlay = data;
  },

  async changeLanguage({ state }, data) {
    await this.$cookies.set("lang", data, {
      path: "/",
      maxAge: 365 * 24 * 60 * 60,
    });
    location.reload();
  },

  UpdateUserInfo({ state, dispatch }, arrayData) {
    var data = new FormData();
    data.append("name", arrayData.name);
    data.append("email", arrayData.email);
    state.loading = true;
    this.$axios.$post("/me/updateProfile", data).then((res) => {
      state.loading = false;
      if (res.status === 200) {
        dispatch("getMe");
        dispatch("setMsg", {
          msg: res.msg,
          errors: res.errors,
          api: "updateProfile",
          type: 200,
        });
      }
    });
  },

  changePassword({ state, dispatch }, arrayData) {
    var data = new FormData();
    data.append("password", arrayData.password);
    data.append("new password", arrayData.newPassword);
    //
    dispatch("setMsg", {
      msg: "",
      errors: [],
      api: "changePassword",
      type: "",
    });
    state.loading = true;
    //
    this.$axios
      .post("api/password/change", data)
      .then((res) => {
        state.loading = false;

        if (res.data.status !== "fail") {
          state.changePasswordStep = 2;
        } else {
          dispatch("setMsg", {
            errors: res.data.errors,
            api: "changePassword",
            type: "error",
          });
        }
      })
      .catch((error) => {
        state.loading = false;
      });
  },



  async getCompany({ state }) {
    state.loading = true;
    await this.$axios.get("/Company").then((res) => {
      state.companies = res.data.data;
      state.loading = false;
    });
  },

  addCompany({ state, dispatch }, arrayData) {
    state.loadingComp = true;

    //
    var data = new FormData();
    data.append("company_code", arrayData.company_code);
    this.$axios.$post("/Company/link", data).then((res) => {
      state.loadingComp = false;
      if (res.status === 200) {
        dispatch("getCompany");
        dispatch("setMsg", {
          msg: res.msg,
          errors: res.errors,
          api: "addCompany",
          type: 200,
        });
      } else {
        dispatch("setMsg", {
          msg: res.msg,
          errors: res.errors,
          api: "addCompany",
          type: "error",
        });
      }
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
