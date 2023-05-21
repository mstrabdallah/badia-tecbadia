<template>
  <div>
    <v-sheet class="overflow-hidden menu_header">
      <v-navigation-drawer
        v-model="allUsers.menuHeader"
        absolute
        top
        temporary
        :right="$i18n.locale === 'ar'"
      >
        <v-list-item>
          <div class="menu_head">
            <NuxtLink :to="localePath('/')" class="logo">
              <img alt="logo" src="/logo.png" />
            </NuxtLink>
          </div>
        </v-list-item>

        <v-divider></v-divider>

        <NuxtLink :to="localePath('/')">
          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title>
                <span class="navM_">{{ $t("Home") }}</span></v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
        </NuxtLink>
        <NuxtLink :to="localePath('/services')">
          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title>
                <span class="navM_">{{
                  $t("Services")
                }}</span></v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
        </NuxtLink>

        <NuxtLink :to="localePath('/pricing')">
          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title>
                <span class="navM_">{{
                  $t("Pricing")
                }}</span></v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
        </NuxtLink>

        <NuxtLink :to="localePath('/blogs')">
          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title>
                <span class="navM_">{{ $t("Blog") }}</span></v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
        </NuxtLink>

        <NuxtLink :to="localePath('/contact-us')">
          <v-list-item link>
            <v-list-item-content>
              {{ $t("Contact") }}
            </v-list-item-content>
          </v-list-item>
        </NuxtLink>
        <NuxtLink :to="localePath('/about')">
          <v-list-item link>
            <v-list-item-content>
              {{ $t("About us") }}
            </v-list-item-content>
          </v-list-item>
        </NuxtLink>

        <NuxtLink :to="localePath('/login')">
          <v-list-item link v-if="!allAuth.checkAuth">
            <v-list-item-content>
              {{ $t("Login") }}
            </v-list-item-content>
          </v-list-item>
        </NuxtLink>

        <NuxtLink :to="localePath('/orders')" v-if="allAuth.checkAuth">
          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title>
                <span class="navM_">{{
                  $t("Order List")
                }}</span></v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
        </NuxtLink>

        <v-list-item link @click="Logout" v-if="allAuth.checkAuth">
          <v-list-item-icon>
            <v-icon>mdi-login-variant</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            {{ $t("Logout") }}
          </v-list-item-content>
        </v-list-item>

        <v-list-item class="menu_lang">
          <v-list-item-icon>
             <v-icon class="fa">mdi-web</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            {{ $t("language_") }}

            <div class="menu_language_">
              <v-btn text x-small :disabled="this.$i18n.locale === 'ar'">
                <a @click="changeLanguage('ar')"> AR </a>
              </v-btn>
              <v-btn text x-small :disabled="this.$i18n.locale === 'en'">
                <a @click="changeLanguage('en')"> EN </a>
              </v-btn>
            </div>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>

        <NuxtLink :to="localePath('/terms-condition')">
          <v-list-item link>
     

            <v-list-item-content>
              <v-list-item-title>
                <span class="navM_">{{
                  $t("Terms and conditions")
                }}</span></v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
        </NuxtLink>

        <NuxtLink :to="localePath('/privacy-policy')">
          <v-list-item link>
            

            <v-list-item-content>
              <v-list-item-title>
                <span class="navM_">{{
                  $t("Privacy Policy")
                }}</span></v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
        </NuxtLink>

        <NuxtLink :to="localePath('/about')">
          <v-list-item link>
            

            <v-list-item-content>
              <v-list-item-title>
                <span class="navM_">{{
                  $t("About us")
                }}</span></v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
        </NuxtLink>
      </v-navigation-drawer>
    </v-sheet>
    <v-overlay :value="allUsers.menuHeader"></v-overlay>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      drawer: false,
    };
  },
  computed: {
    ...mapGetters(["allUsers", "allAuth"]),
  },
  methods: {
    ...mapActions(["Logout", "changeLanguage", "changeMenuHeader"]),
    onClose() {
      this.changeMenuHeader(false);
    },
  },
};
</script>

<style scoped>
.menu_head {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  padding: 15px;
}
.menu_head a {
  padding: 0px;
  margin: 0px;
  width: 80px;
}
.logo {
  display: flex;
  justify-content: center;
  width: 100px;
  height: 40px;
  margin: 0px;
}
.logo img {
  min-width: 47px;
  height: 40px;
  position: absolute;
}

a.nuxt-link-exact-active .v-list-item {
  color: #fff!important;
  background: #30c88c;
}


.menuBtn {
  font-size: 20px;
  line-height: 58px;
  color: #444 !important;
}
.navM_ {
  font-size: 14px;
}
.menu_lang .v-list-item__content {
  display: flex;
  padding: 0px;
  flex-wrap: nowrap;
  font-size: 14px;
}

.menu_language_ {
  display: flex;
  margin-top: 5px;
  flex: 1;
  justify-content: flex-end;
}
.menu_language_ button {
  padding: 0px;
  margin: 0px;
  width: max-content;
}
.menu_language_ div {
  margin: 0px 10px;
}
@media (max-width: 1100px) {
  .menu_head {
    justify-content: center;
    padding: 15px 0px;
  }
}
@media (max-width: 700px) {
  .menu_head button {
    min-width: auto !important;
    padding: 0 3px !important;
  }
}
</style>
