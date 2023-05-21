<template>
  <div class="errorPage">
    <div class="page">
      <div v-if="error.statusCode === 404">
        <div class="container2__">
          <nuxt-img
            loading="lazy"
            alt="page not found"
            width="600"
            height="379"
            src="/images/404.svg"
          />
          <h3>Page Not Found</h3>
        </div>
      </div>
      <div v-else>
        <div class="headPages">
          <div class="headPages_content">
            <h3>{{ $t("An error occurred") }} - {{ error.statusCode }}</h3>
          </div>
        </div>
      </div>
      <NuxtLink to="/">{{
        $t("Try Searching For Something Else, Or Return To Home.")
      }}</NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  props: ["error"],

  // layout: "error", // you can set a custom layout for the error page
};
</script>
<style scoped>
.errorPage {
  text-align: center;
}
a {
  display: block;
  text-align: center;
  margin: 10px 0px 40px;
}
</style>
