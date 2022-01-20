<template>
  <div>
    <!--    图片详情-->
    <blog-img-swiper v-if="openImgId" :srcList="srcList" :blogId="openBlogId" :imgId="openImgId"></blog-img-swiper>
    <div style="margin: 2px 10px 0  10px">
      <el-image v-for="(item,index) in blog.blogImg" fit="cover" :key="index"
                :style="'padding-left: 5px;width: '+imgWidth3+'px;height: '+imgWidth3+'px'"
                v-if="item.imgUrl !='' "
                :src="item.imgUrl"
                @click="openImg(index)">
      </el-image>
      <el-image fit="cover"
                :style="'padding-left: 5px;width: '+imgWidth3+'px;height: '+imgWidth3+'px'"
                v-if="blog.blogImg.length <9"
                src="../../../static/images/addImg.png"
                @click="uploadImg">
      </el-image>
    </div>

  </div>
</template>

<script>
  import BlogImgSwiper from "./blogImgSwiper";

  export default {
    components: {BlogImgSwiper},
    name: "addBlog",
    data() {
      return {
        openImgId: '',
        openBlogId: 0,
        srcList: new Map(),
        blog: {
          blogId: '', blogInfo: '', blogImg: [
            {imgUrl: 'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg'},
          ]
        },
        imgWidth3: '',
      }
    },
    provide() {
      return {
        closeSwiper: this.closeSwiper
      }
    },
    mounted() {
      this.imgWidth3 = (document.body.clientWidth - 40) / 3;

    }, methods: {
      closeSwiper() {
        this.openImgId = undefined;
        document.body.style.overflow = "";
      },
      /*
    打开图片
   */
      openImg(imgId) {
        this.openImgId = imgId;
        document.body.style.overflow = "hidden";
      },
      uploadImg() {
        this.srcList.set(0,{imgUrl: 'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg'});
        this.blog.blogImg.push({imgUrl: 'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg'});
      }
    }
  }
</script>

<style scoped>

</style>
