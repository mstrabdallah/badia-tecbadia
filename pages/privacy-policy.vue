<template>
  <div class="page">
    <div class="headPages">
      <div class="headPages_content">
        <h4>{{ $t("Privacy Policy") }}</h4>
        <h3>{{ $t("Privacy Policy") }}</h3>
        <p>
          {{
            $t(
              "This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You."
            )
          }}
        </p>
      </div>
    </div>
    <div class="container_cc">
      <v-container>
        <div class="privacy my-10 pt-8">
          <p>
            {{
              $t(
                "We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy."
              )
            }}
          </p>
          <h2>{{ $t("Collecting and Using Your Personal Data") }}</h2>
          <h3>{{ $t("Personal Data") }}</h3>
          <p>
            {{
              $t(
                "While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:"
              )
            }}
          </p>
          <ul>
            <li>{{ $t("E-mail") }}</li>
            <li>{{ $t("Name") }}</li>
            <li>{{ $t("Phone") }}</li>
          </ul>
        </div>
      </v-container>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  head() {
    return {
      title: this.allMeta?.privacyPolicy?.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.allMeta?.privacyPolicy?.meta_desc,
        },
        {
          hid: "keywords",
          name: "keywords",
          content: this.allMeta?.privacyPolicy?.meta_keys,
        },
      ],
    };
  },
  computed: {
    ...mapGetters(["allMeta"]),
  },
};
</script>
<style scoped>
.privacy p,
.privacy h2 {
  margin: 15px 0px;
}
.privacy p {
  width: 80%;
}

.privacy ul {
  list-style: disc;
  list-style-position: inside;
}
</style>
