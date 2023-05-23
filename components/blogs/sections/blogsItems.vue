<template>
  <div>
    <div v-if="allBlogs.loading"><Loading /></div>

    <div v-else>
      <div class="blogTabs">
        <v-tabs v-model="active" show-arrows>
          <v-tab class="blogTab" :href="`#all`">
            <NuxtLink :to="localePath(`/blogs`)">
              {{ $t("newly added") }}
            </NuxtLink>
          </v-tab>
          <!-- {{ tab }} -->
          <v-tab
            v-for="res in allBlogs.blogs.blog_categories"
            :href="`#${res.slug}`"
            :key="res.slug"
            class="blogTab"
          >
            <NuxtLink :to="localePath(`/blogs/category/${res.slug}`)">
              {{ res.title }}
            </NuxtLink>
          </v-tab>
        </v-tabs>
      </div>

      <div v-if="allBlogs.blogs.blogs.data.length === 0">
        <NoData data="There is no news in this section" />
      </div>

      <v-row v-else class="serv_row">
        <v-col
          cols="12"
          md="4"
          v-for="blog in allBlogs.blogs.blogs.data"
          :key="blog.id"
        >
          <NuxtLink :to="localePath(`/blogs/${blog.slug}`)">
            <div class="blogs_item">
              <nuxt-img :alt="blog.title" loading="lazy" :src="blog.image" />
              <h3>{{ blog.title }}</h3>

              <p>
                {{
                  removeTagHtml($rules.getText(blog.description).slice(0, 100))
                }}
              </p>
            </div>
          </NuxtLink>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      active: this.$route.params.slug,
    };
  },

  components: {
    Loading: () => import("../../tools/loadingP.vue"),
    NoData: () => import("../../tools/no-data.vue"),
  },

  computed: {
    ...mapGetters(["allBlogs"]),
  },

  mounted() {
    this.getBlogs_();
  },
  methods: {
    ...mapActions(["getBlogs", "setDataGetBlogs"]),

    removeTagHtml(string) {
      let data = string.replace(/\&nbsp;/g, "");
      return data.replace(/<\/?[^>]+>/gi, " ");
    },
    getBlogs_(e) {
      if (this.$route.params.slug !== undefined) return false;
      this.getBlogs();
    },
  },
  async fetch() {
    var slug = this.$route.params.slug;

    if (slug === undefined) return false;
    // await this.$axios
    //   .get("https://api.tecbadia.com/api/blogs/list?slug=" + slug)
    //   .then((res) => {
    //     this.setDataGetBlogs({ data: res.data, slug: slug });
    //   });
  },
};
</script>

<style lang="scss">
@import "../styles/blogs.scss";
</style>
