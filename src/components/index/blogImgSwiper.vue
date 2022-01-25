<template>
  <div class="swiper" @click="close">
    <swiper class="item" :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="(src,index) in srcs" :key="index">
        <el-image :src="src">
        </el-image>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <i v-if="showDelete" style="font-size: 23px;text-align: center;position: initial;" class="el-icon-delete-solid"
       @click.stop="deleteImg"> </i>
  </div>
</template>

<script>
  import {swiper, swiperSlide} from "vue-awesome-swiper";
  import "swiper/dist/css/swiper.css";

  export default {
    name: 'blogImgSwiper',
    props: {
      isShowDelete: Boolean,
      srcList: Map,
      blogId: Number,
      imgId: Number,
    },
    inject: ['closeSwiper', 'delete'],
    data() {
      return {
        showDelete: false,
        srcs: [],
        srcMap: new Map,
        openBlogId: '',
        openImgId: '',
        swiperOption: {
          loop: true,
          // 显示分页
          pagination: {
            el: ".swiper-pagination",
            clickable: false ///不允许分页点击跳转
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
      },
      srcs(val) {
        if (val.length == 0) {
          this.closeSwiper();
        }
      },
    },
    components: {swiper, swiperSlide},
    mounted() {
      this.srcMap = this.srcList;
      this.openBlogId = this.blogId;
      this.openImgId = this.imgId;
      this.srcs = this.srcList.get(this.blogId);
      this.swiper.activeIndex = this.imgId;
      this.showDelete = this.isShowDelete;
    },
    methods: {
      deleteImg() {
        this.delete(this.swiper.activeIndex);
      },
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
    position: relative ;
    top: 50%;
    transform: translateY(-50%);
  }

  /*.swiper-container item swiper-container-initialized swiper-container-horizontal {*/
  /*  position: relative ;*/
  /*  top: 50%;*/
  /*  transform: translateY(-50%);*/
  /*}*/

</style>
