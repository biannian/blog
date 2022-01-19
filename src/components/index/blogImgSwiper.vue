<template>
  <div class="swiper" @click="close">
    <swiper class="item" :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="(src,index) in srcs" :key="index">
        <el-image :src="src" >
        </el-image>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  import {swiper, swiperSlide} from "vue-awesome-swiper";
  import "swiper/dist/css/swiper.css";

  export default {
    name: 'blogImgSwiper',
    props: {
      srcList: Map,
      blogId: Number,
      imgId: Number,
    },
    inject: ['closeSwiper'],
    data() {
      return {
        srcs: [],
        srcMap: new Map,
        openBlogId: '',
        openImgId: '',
        swiperOption: {
          loop: true,
          // 显示分页
          pagination: {
            el: ".swiper-pagination",
            clickable: true //允许分页点击跳转
          },
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper;
      }
    },
    watch: {
      blogId(val) {
        this.blogId = val;
        this.srcs = this.srcMap.get(val);
      },
      imgId(val) {
        this.openImgId = val;
        this.swiper.activeIndex = val;
      }
    },
    components: {swiper, swiperSlide},
    mounted() {
      this.srcMap = this.srcList;
      this.openBlogId = this.blogId;
      this.openImgId = this.imgId;
      this.srcs = this.srcList.get(this.blogId);
      this.swiper.activeIndex = this.imgId;
    },
    methods: {
      close() {
        this.closeSwiper();
      }
    }

  }
</script>

<style>
  .swiper {
    text-align: center;
    position: fixed;
    z-index: 1000;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: black;
  }

  .swiper-container {
    position: initial;
  }


</style>
