<template>
  <div class="page">
    <Blogs />
    
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import Blogs from "../../components/blogs/blogs.vue";
export default {
  components: {
    Blogs,
  },

  head() {
    return {
      title: this.allMeta.blogs?.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.allMeta.blogs?.meta_desc,
        },
        {
          hid: "keywords",
          name: "keywords",
          content: this.allMeta.blogs?.meta_keys,
        },
      ],
    };
  },

  computed: {
    ...mapGetters(["allMeta"]),
  },
};
</script>
 