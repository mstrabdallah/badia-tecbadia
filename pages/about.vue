<template>
  <AboutUs />
</template>
<script>
import { mapGetters } from 'vuex';
import AboutUs from "../components/aboutUs/aboutUs.vue";
export default {
  components: {
    AboutUs,
  },
  head() {
    return {
      title: this.allMeta?.aboutUs?.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.allMeta?.aboutUs?.meta_desc,
        },
        {
          hid: "keywords",
          name: "keywords",
          content: this.allMeta?.aboutUs?.meta_keys,
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
.about {
  margin-bottom: 25px;
}
.about .about_heading {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 35px;
}
.about .about_heading h3 {
  color: #b59e18;
  font-weight: 700;
  font-size: 22px;
}
.about .about_heading h4 {
  font-weight: 700;
  font-size: 44px;
}
.about .about_heading p {
  color: #4c4c4c;
  padding: 15px;
  font-size: 22px;
  line-height: 1.7;
  max-width: 900px;
  text-align: center;
}
.about .about_desc {
  padding: 20px 0px;
  justify-content: space-evenly;
  font-size: 22px;
  color: #4f4f4f;
}
.about_desc .partners_head {
  text-align: center;
  font-size: 44px;
  font-weight: 700;
}
.partners {
  width: 80%;
  margin: 0 auto;
}
.about .v-card {
  margin: 20px 0px;
  padding: 0px;
  transition: transform 0.3s ease-out;
  border-radius: 0px 20px 0px 20px;
  text-align: center;
}
.about .v-card:hover {
  transform: perspective(500px) translateZ(20px);
}
.about .v-card .v-image {
  max-height: 80px;
}
.video {
  position: relative;
}
.video_but {
  top: 50%;
  left: 50%;
  position: absolute;
  border-radius: 50%;
  padding: 15px;
  background-color: #385a64;
  margin-left: -37.5px;
}
.video_but .v-image:lang(en) {
  margin-left: 6px;
}
.video_but .v-image:lang(ar) {
  margin-right: 6px;
}

.about_desc_ {
  max-width: 800px;
  margin: auto;
  text-align: center;
  background: #cccccc21;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #0b8c5f;
  margin-bottom: 30px;
}
.about_desc_ p {
  font-size: 18px !important;
}
.about_desc_ h3 {
  width: max-content;
  margin: auto;
  margin-top: -34px;
  color: #b59e18;
  margin-bottom: 21px;
  padding: 4px 20px;
  background: #f8f8f8;
  border: 1px solid #0b8c5e;
  border-radius: 33px;
  font-size: 20px;
  font-weight: bold;
}
@media (max-width: 767px) {
  .about .about_heading h3 {
    margin-top: 20px;
  }
  .about .about_heading p {
    width: auto;
  }
  .about .about_desc {
    padding: 20px;
    text-align: center;
  }
}
</style>
