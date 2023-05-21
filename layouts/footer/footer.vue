<template>
  <div class="footer">
    <footer class="container_cc">
      <nuxt-img
        alt="Badia"
        width="171"
        height="70"
        loading="lazy"
        src="/logo.png"
        fit="inside"
      />
      <div class="icons">
        <a
          href="https://www.instagram.com/tecbadia/"
          target="_blank"
          rel="noopener"
        >
          <div class="icon"><v-icon>mdi-instagram</v-icon></div>
        </a>

        <a
          href="https://www.linkedin.com/company/tecbadia/mycompany/"
          target="_blank"
          rel="noopener"
        >
          <div class="icon">
            <v-icon>mdi-linkedin</v-icon>
          </div>
        </a>

        <a
          href="https://www.facebook.com/tecbadia"
          target="_blank"
          rel="noopener"
        >
          <div class="icon">
            <v-icon>mdi-facebook</v-icon>
          </div>
        </a>

        <a
          href="https://www.twitter.com/tecbadia"
          target="_blank"
          rel="noopener"
        >
          <div class="icon">
            <v-icon>mdi-twitter</v-icon>
          </div>
        </a>
      </div>

      <div class="pagesFoooter">
        <ul class="flex_">
          <li>
            <NuxtLink :to="localePath('/terms-condition')">
              {{ $t("Terms and conditions") }}
            </NuxtLink>
          </li>
.
          <li>
            <NuxtLink :to="localePath('/privacy-policy')">
              {{ $t("Privacy Policy") }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </footer>
    <p class="mt-2 copy">
      {{ $t("copyright") }}
    </p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data: () => ({
    icons: [
      "mdi-facebook",
      "mdi-instagram",
      "mdi-snapchat",
      "mdi-twitter",
      "mdi-linkedin",
    ],
  }),

  computed: {
    ...mapGetters(["allAuth"]),
  },
};
</script>

<style lang="scss" scoped>
@import "./styles/footer.scss";
</style>
