<template>
  <section
    class="Isec scrollCsule IsecCsule"
    data-aos="fade-up"
    data-aos-duration="1000"
  >
    <div class="container__ zindex1">
      <div class="ISechead">
        <h2 class="h1">{{ $t("Badia Capsule") }}</h2>
      </div>

      <v-row class="zindex1 justify-content-between">
        <v-col class="col-12 col-md-6">
          <div class="des">
            <p>
              {{
                $t(
                  "Here’s Our Tech-Badia in years, Get to know our history and numbers better, We started and we are here to stay."
                )
              }}
            </p>

            <p
              v-html="
                $t(
                  '<span>Cloud services</span> give you one of the most important current features, which is the ability to access your data at any time and from anywhere.'
                )
              "
            ></p>

            <p
              v-html="
                $t(
                  '<span>Security</span> Protection for your data and the data of your customers with various backup plans.'
                )
              "
            ></p>

            <p
              v-html="
                $t(
                  '<span>Development</span> Flexibility in development Smooth response to labor market changes'
                )
              "
            ></p>
          </div>
        </v-col>
        <v-col class="col-12 col-md-6 capsuleRowImg">
          <div class="capsuleContent">
            <nuxt-img
              width="380"
              height="337"
              loading="lazy"
              format="webp"
              alt="capsule Img"

              src="/images/capsule.png"
            />
          </div>
        </v-col>
      </v-row>
    </div>
  </section>
</template>
<script>
export default {};
</script>
