<template>
  <header
    class="header container_cc flex__"
    :class="scrolled ? 'headerFixed' : ''"
  >
    <div class="header_p flex__">
      <div class="flex_">
        <div class="showMenu_">
          <v-app-bar-nav-icon
            class="menuBtn"
            @click.stop="showDrawer()"
          ></v-app-bar-nav-icon>
        </div>

        <div class="logo">
          <NuxtLink :to="localePath('/')">
            <img
              src="/logo.png"
              alt="logo"
              format="webp"
              width="127"
              height="70"
              loading="lazy"
              fit="inside"
            />
          </NuxtLink>
        </div>

        <ul class="flex_">
          <li>
            <NuxtLink :to="localePath('/')">
              {{ $t("Home") }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink :to="localePath('/services')">
              {{ $t("Services") }}
            </NuxtLink>
          </li>

          <li>
            <NuxtLink :to="localePath('/pricing')">
              {{ $t("Pricing") }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink :to="localePath('/blogs')">
              {{ $t("Blog") }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink :to="localePath('/about')">
              {{ $t("About us") }}
            </NuxtLink>
          </li>
          <li class="navM_">
            <NuxtLink class="contact_but" :to="localePath('/contact-us')">
              <div class="header_but">{{ $t("Contact Us") }}</div>
            </NuxtLink>
          </li>
        </ul>
      </div>

      <div class="flex__">
        <div class="btns" v-if="!allAuth.checkAuth">
          <NuxtLink :to="localePath('/login')" class="noActive">
            <v-btn>{{ $t("Login") }}</v-btn>
          </NuxtLink>
        </div>
        <div class="menu_user flex__" v-if="allAuth.checkAuth">
          <v-menu offset-y content-class="menuS1">
            <template v-slot:activator="{ on, attrs }">
              <v-list-item-icon v-bind="attrs" v-on="on">
                <v-btn text>
                  <div class="userMenu" v-if="allAuth.UserName">
                    {{ allAuth.UserName }}
                  </div>
                  <div class="userMenu" v-else>...</div>
                </v-btn>
              </v-list-item-icon>
            </template>
            <v-list>
              <NuxtLink :to="localePath('/orders')">
                <v-list-item link>
                  <v-list-item-title>{{ $t("My Orders") }}</v-list-item-title>
                </v-list-item>
              </NuxtLink>

              <NuxtLink :to="localePath('/account/change-password')">
                <v-list-item link>
                  <v-list-item-title>{{
                    $t("Change Password")
                  }}</v-list-item-title>
                </v-list-item>
              </NuxtLink>

              <v-list-item link @click="Logout">
                <v-list-item-title>{{ $t("Logout") }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
<!-- 
        <div class="menu_Country flex__">
          <v-menu offset-y content-class="menuS1 menuCountryS1">
            <template v-slot:activator="{ on, attrs }">
              <v-list-item-icon v-bind="attrs" v-on="on">
                <div
                  class="iconCountry sa"
                  v-if="allAuth.country === 'SA'"
                ></div>
                <div
                  class="iconCountry eg"
                  v-if="allAuth.country === 'EG'"
                ></div>
              </v-list-item-icon>
            </template>
            <v-list>
              <v-list-item
                style="text-align: right; font-family: Almarai"
                @click="changeCountry('SA')"
                :disabled="allAuth.country === 'SA'"
              >
                <v-list-item-title>
                  <div class="iconCountry sa"></div>
                  {{ $t("Saudi Arabia") }}
                </v-list-item-title>
              </v-list-item>

              <v-list-item
                @click="changeCountry('EG')"
                :disabled="allAuth.country === 'EG'"
              >
                <v-list-item-title>
                  <div class="iconCountry eg"></div>
                  {{ $t("Egypt") }}
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div> -->

        <div class="menu_lang flex__" v-if="allBlogs.showLang">
          <v-menu offset-y content-class="menuS1">
            <template v-slot:activator="{ on, attrs }">
              <v-list-item-icon v-bind="attrs" v-on="on">
                <v-icon style="color: #000">mdi-web</v-icon>
              </v-list-item-icon>
            </template>
            <v-list>
              <v-list-item
                style="text-align: right; font-family: Almarai"
                @click="changeLanguage('ar')"
                :disabled="this.$i18n.locale === 'ar'"
              >
                <v-list-item-title>{{ "عربي" }}</v-list-item-title>
              </v-list-item>

              <v-list-item
                @click="changeLanguage('en')"
                :disabled="this.$i18n.locale === 'en'"
              >
                <v-list-item-title>{{ "English" }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Menu from "./menu.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  data: () => ({
    scrolled: false,
    timeout: 2000,
    snackbar: false,
  }),

  mounted() {
    this.setShowLang();
    window.addEventListener("scroll", this.handleScroll);
  },

  computed: {
    ...mapGetters(["allAuth","allBlogs"]),
  },
  methods: {
    ...mapActions([
      "changeLanguage",
      "changeCountry",
      "changeMenuHeader",
      "Logout",
      "setShowLang"
    ]),

 
    handleScroll() {
      if (window.innerWidth > 920) {
        if (window.scrollY < 61) {
          this.scrolled = false;
        } else {
          this.scrolled = true;
        }
      } else {
        if (window.scrollY < 120) {
          this.scrolled = false;
        } else {
          this.scrolled = true;
        }
      }
    },

    handleClick(index) {
      this.items[index].click.call(this);
    },

    showDrawer() {
      this.changeMenuHeader(true);
    },
  },

  components: {
    Menu,
  },
};
</script>

<style lang="scss" scoped>
@import "./styles/header.scss";
</style>
