const state = {
  blogs: [],
  loading: true,
  loadingBlog: true,
  blog: {},
  blogsSlug: '',
  currentCategory: [],
  showLang: true,

};
const getters = { allBlogs: (state) => state };
const actions = {

  async setShowLang({ state }) {

    if (
      this.$router.app.context.route.name === "blogs-id___en" ||
      this.$router.app.context.route.name === "blogs-id___ar"
    ) {
      state.showLang = false;
    } else {
      state.showLang = true;

    }

  },


  async setLoadingGetBlogs({ state }, payload) {
    state.loading = payload;
  },



  async setDataGetBlogs({ state }, payload) {
    state.blogs = payload.data;
    state.loading = false;

    var currentSlug = payload.data.blog_categories.find((res) => res.slug == payload.slug)
    state.currentCategory = currentSlug
  },

  async getBlogs({ state }) {
    if (state.currentCategory === undefined) state.blogs = [];
    if (state.blogs?.blogs?.data?.length > 0) return false;
    state.loading = true;

    // await this.$axios.get(`api/blogs/list`).then((res) => {
    //   state.blogs = res.data;
    //   state.loading = false;
    // })
  },


  async setGetBlog({ state }, payload) {
    state.loadingBlog = false;
    state.blog = payload.data
  },
};
const mutations = {};
export default {
  state,
  getters,
  actions,
  mutations,
};
