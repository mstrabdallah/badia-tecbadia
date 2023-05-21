<template>
  <div class="page">
    <Blogs />
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import Blogs from "../../../components/blogs/blogs.vue";
export default {
  components: {
    Blogs,
  },
  head() {
    return {
      title: this.allBlogs?.currentCategory?.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.allBlogs?.currentCategory?.meta_desc,
        },
        {
          hid: "keywords",
          name: "keywords",
          content: this.allBlogs?.currentCategory?.meta_keys,
        },
      ],
    };
  },
  computed: {
    ...mapGetters(["allBlogs"]),
  },
};
</script>
 