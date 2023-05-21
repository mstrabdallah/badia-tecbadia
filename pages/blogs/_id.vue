<template>
  <Blog />
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Blog from "../../components/blogs/sections/blog.vue";
export default {
  components: { Blog },

  head() {
    return {
      title: this.allBlogs?.blog?.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.allBlogs?.blog?.meta_desc,
        },
        {
          hid: "keywords",
          name: "keywords",
          content: this.allBlogs?.blog?.meta_keys,
        },
      ],
    };
  },

  methods: {
    ...mapActions(["setGetBlog"]),
  },
  computed: {
    ...mapGetters(["allBlogs"]),
  },

  async fetch() {
    await this.$axios
      .get("https://api.tecbadia.com/api/blogs/show/" + this.$route.params.id)
      .then((res) => {
        this.setGetBlog({ data: res.data.blog });
      });
  },
};
</script>
 