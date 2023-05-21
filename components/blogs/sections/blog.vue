<template>
  <div class="page blogPage">
    <div class="headPages">
      <div class="headPages_content">
        <div class="titleTop">{{ $t("Blog Post") }}</div>
        <h1 v-if="!allBlogs.loadingBlog">{{ allBlogs.blog.title }}</h1>
      </div>
    </div>

    <div v-if="allBlogs.loadingBlog"><Loading /></div>

    <section v-else class="blog container__">
      <img
        :alt="allBlogs.blog.title"
        loading="lazy"
        :src="allBlogs.blog.image"
      />

      <div class="blogHtml" v-html="handleBlog(allBlogs)"></div>

      <div class="GoBack">
        <NuxtLink :to="localePath('/blogs')">{{ $t("Go Back") }}</NuxtLink>
      </div>
    </section>
    <SecContactUs :hide="true" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Loading from "../../tools/loadingP.vue";
import SecContactUs from "../../contactUs/sections/secContactUs.vue";
export default {
  data() {
    return {};
  },

  components: {
    Loading,
    SecContactUs,
  },
  methods: {
    ...mapActions(["setGetBlog"]),
    // <div class="Services_Active"> <div class="content_ flex_"> <div class="Services_A_img"> <nuxt-img src={this.allBlogs.blog.tec.image} alt={this.allBlogs.blog.tec.title} loading="lazy" /> </div> <div class="content"> <h2> {this.allBlogs.blog.tec.title } </h2> <p> { this.allBlogs.blog.tec.description } </p> <div class="Services_A_btn"> <a target="_balnk" class="buttonWhatsAppLink" href="https://wa.me/+966534537573" > <v-btn class="buttonWhatsApp"> <div class="icons_"> <nuxt-img loading="lazy" alt="whatsapp" src="/icons/whatsapp.png" format="webp" width="40" height="40" /> </div> {  this.$i18n.t("Contact us via WhatsApp") } </v-btn></a > <NuxtLink to="localePath('/services/' + allBlogs.blog.tec.id)" class="buttonGetitLink" > <button class="button buttonGetit"> {  this.$i18n.t("Get it now for free") } </button> </NuxtLink> </div> </div> </div> </div>

    sendContactRequest() {
      console.log("e");
      // return 0
    },
    handleBlog(data) {
      if (!data.blog.tec) return data.blog.description;
      var description = data.blog.description.replaceAll(
        "CallToAction",
        `<div class="Services_Active"> <div class="content_ flex_"> <div class="Services_A_img"> <img src=${
          data.blog.tec.image
        } alt=${
          data.blog.tec.title
        } loading="lazy" /> </div> <div class="content"> <h2> ${
          data.blog.tec.title
        } </h2> <p> ${
          data.blog.tec.description
        } </p> <div class="Services_A_btn"> <a target="_balnk" class="buttonWhatsAppLink" href="http://hyperurl.co/cntzs4" > <v-btn class="buttonWhatsApp"> <div class="icons_"> <img loading="lazy" alt="whatsapp" src="/icons/whatsapp.png" format="webp" width="40" height="40" /> </div> ${this.$i18n.t(
          "Contact us via WhatsApp"
        )} </v-btn></a > <a href="/${this.$i18n.locale}/services/${
          data.blog.tec.id
        }" target="_blank" class="buttonGetitLink" > <button class="button buttonGetit"> ${this.$i18n.t(
          "Get it now for free"
        )} </button> </a> </div> </div> </div> </div><br>`
      );

      // let dd = `<div class="DevelopCallAction">

      //   <h2>اطلب استشارة هاتفية مجانا ع خبراء البرمجة</h2>
      //   <div class="row">

      //   <div class="col-6">
      //     <input type="text"  id="name" name="name" placeholder="${this.$i18n.t(
      //       "Name"
      //     )}" />
      //     </div>

      //    <div class="col-6">

      //     <input type="text" id="phone" name="phone" placeholder="${this.$i18n.t(
      //       "Phone"
      //     )}" />
      //     </div>

      //     <button class="button buttonGetit" id="subDevelopCallAction"
      //     @click="${this.sendContactRequest()}"
      //     > ${this.$i18n.t("Contact request")} </button>
      //     </div>
      // </div>`;
      // description = description.replaceAll("DevelopCallAction", dd);

      return description;
    },
  },
  mounted() {},
  computed: {
    ...mapGetters(["allBlogs"]),
  },
};
</script>
