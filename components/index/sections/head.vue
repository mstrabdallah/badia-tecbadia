<template>
  <section class="head bg text-center">
    <div class="head_c container__">
      <div v-if="allIndex.loadingSlider">
        <Loading />
      </div>

      <div v-else>
        <hooper :settings="hooperSettings">
          <slide v-for="(res, i) in allIndex.slider" :key="i">
            <v-row no-gutters class="hooperRow">
              <v-col cols="12" md="6" lg="5" class="zindex1">
                <h1 class="h1">{{ res.title }}</h1>
                <p>{{ res.description }}</p>

                <div class="head_btns">
                  <NuxtLink :to="localePath('/services')">
                    <button class="button head_btn">
                      {{ $t("Get 7 Days Free Trial") }}
                    </button>
                  </NuxtLink>
                </div>
              </v-col>
              <v-col cols="12" md="6" lg="6">
                <!-- <SwiperHead /> -->
                <div class="slideHead">
                  <div
                    class="img_"
                    :style="`background:url(${res.image}) no-repeat`"
                  ></div>
                  <!-- <nuxt-img
                    width="380"
                    height="400"
                   
                    :alt="res.title"
                    preload
                    :src="res.image"
                  /> -->
                </div>
              </v-col>
            </v-row>
          </slide>

          <hooper-pagination slot="hooper-addons"></hooper-pagination>
        </hooper>
      </div>
      <div class="projects">
        <v-container>
          <v-row>
            <v-col class="col-12 col-sm-4 col-md-4">
              <div class="projects_c">
                <strong>
                  <number
                    ref="number1"
                    :from="0"
                    :to="650"
                    :format="theFormat"
                    :duration="5"
                    :delay="2"
                    easing="Power1.easeOut"
                  />
                </strong>
                <p>{{ $t("Projects") }}</p>
              </div>
            </v-col>
            <v-col class="col-12 col-sm-4 col-md-4">
              <div class="projects_c">
                <strong>
                  <number
                    ref="number1"
                    :from="0"
                    :to="600"
                    :format="theFormat"
                    :duration="5"
                    :delay="2"
                    easing="Power1.easeOut"
                  />
                </strong>
                <p>{{ $t("Customers") }}</p>
              </div>
            </v-col>
            <v-col class="col-12 col-sm-4 col-md-4">
              <div class="projects_c">
                <strong>
                  <number
                    ref="number1"
                    :from="0"
                    :to="250"
                    :format="theFormat"
                    :duration="5"
                    :delay="2"
                    easing="Power1.easeOut"
                  />
                </strong>
                <p>{{ $t("Employees") }}</p>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
  </section>
</template>
<script>
// import SwiperHead from "../js/SwiperHead.vue";
import allIndex from "../../../data/allIndex.json";
console.log(allIndex);
import { mapGetters, mapActions } from "vuex";
import { Hooper, Slide, Pagination as HooperPagination } from "hooper";
import Loading from "../../tools/loadingP.vue";
export default {
  components: {
    Hooper,
    Slide,
    HooperPagination,
    Loading,
  },

  data() {
    return {
      allIndex: allIndex,
      hooperSettings: {
        infiniteScroll: true,
        wheelControl: false,
        centerMode: false,
        autoPlay: false,
        rtl: this.$i18n.locale == "ar" ? true : false,
        playSpeed: 3500,
        hoverPause: true,
        vertical: false,
        itemsToShow: 1,
        centerMode: "true",
      },
    };
  },

  computed: {
    // ...mapGetters(["allCounters", "allIndex", "allAuth"]),
  },
  mounted() {
    // if (this.allIndex.slider.length === 0)
    //   this.getHomeSlider(this.allAuth.country);
  },
  methods: {
    ...mapActions(["getCounters", "getHomeSlider"]),
    theFormat(number) {
      return number.toFixed(0);
    },
    playAnimation() {
      this.$refs.number2.play();
    },
  },
};
</script>
