<template>
  <div class="blogsPage">
    <div class="headPages">
      <div class="headPages_content">
        <h4>{{ $t("Blog") }}</h4>
        <h3>{{ $t("Our Latest News") }}</h3>
        <p>{{ $t("We have support at all times, Just contact us.") }}</p>
      </div>
    </div>

    <div class="container2__">
      <Blog />
    </div>
  </div>
</template>

<script>
export default {
  components: {
    Blog: () => import("./sections/blogsItems.vue"),
  },
};
</script>

<style lang="scss">
@import "./styles/blog.scss";
</style>
