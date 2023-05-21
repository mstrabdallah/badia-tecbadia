<template>
  <section class="IsecBlog" data-aos="fade-up" >
    <div class="container2__ zindex1">
      <div class="headBlog">
        <h3>{{$t('Our Latest News')}}</h3>
        <div class="des">{{$t('Here you’ll find blogs that helps you.')}}</div>
      </div>

      <div class="IsecBlog_content">
        <Blogs />
      </div>
    </div>
  </section>
</template>
<script>
import Blogs from "../../blogs/sections/blogsItems.vue";
export default {
  components: {
    Blogs,
  },
};
</script>
 