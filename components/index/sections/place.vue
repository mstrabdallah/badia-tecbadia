<template>
  <section
    class="Isec scrollPlace IsecPlace"
    data-aos="fade-up"
    data-aos-duration="1000"
  >
    <div class="container__ zindex1">
      <div class="ISechead">
        <h2 class="h1">{{ $t("We Are Here") }}</h2>
      </div>

      <div class="des">
        <p>{{ $t("Whereever you are, we are here to aid you.") }}</p>
      </div>

      <div class="PlaceContent">
        <nuxt-img
          alt="ourmap"
          loading="lazy"
          width="900"
          height="371"
          format="webp"
          src="/images/map.svg"
        />
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      left: `data-aos="fade-left"`,
      right: `data-aos="fade-right"`,
    };
  },
  components: {},
};
</script>
