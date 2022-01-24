<template>
  <div>
    <div class="top2">
      <div class="top-nav2">
        <span style="font-size: 16px;margin-left: 10px" @click="back">取消</span>
        <span style="margin-left: 30%;">发微博</span>
        <el-button style="float: right;margin-right: 10px" type="warning" size="mini" @click="confirm"
                   round>发送
        </el-button>
      </div>
    </div>
    <!--    图片详情-->
    <blog-img-swiper v-if="isShowImg" :srcList="srcList" :blogId="openBlogId" :isShowDelete="true"
                     :imgId="openImgId"></blog-img-swiper>
    <div style="margin: 5px 10px 0  10px">
      <!--    文本域-->
      <el-input type="textarea" v-model="blog.blogInfo" rows="15" maxlength="500"
                show-word-limit></el-input>
      <div style="height: 30px">
        <i style="font-size: 12px;" class="el-icon-s-promotion" @click=""> 添加位置</i>
      </div>
      <div style="margin-top:15px;">
        <span v-for="(item,index) in blog.blogImg">
          <el-image fit="cover" :key="index"
                    :style="'padding-left: 5px;width: '+imgWidth3+'px;height: '+imgWidth3+'px;'"
                    v-if="item.imgUrl !='' "
                    :src="item.imgUrl"
                    @click="openImg(index)">
          </el-image>
        </span>
        <el-image fit="cover"
                  :style="'padding-left: 5px;width: '+imgWidth3+'px;height: '+imgWidth3+'px'"
                  v-if="blog.blogImg.length <9"
                  src="../../../static/images/addImg.png"
                  @click="uploadImg">
        </el-image>
      </div>
    </div>

  </div>
</template>

<script>
  import BlogImgSwiper from "./blogImgSwiper";
  import api from "../../api/api";
  import qs from 'qs';

  export default {
    components: {BlogImgSwiper},
    name: "addBlog",
    data() {
      return {
        deleteImgs: '',
        isShowImg: false,
        openImgId: undefined,
        openBlogId: 0,
        srcList: new Map(),
        blog: {
          blogId: Number, blogInfo: '', blogImg: [], blogLocation: '', blogAuthorId: Number, blogFrom: '',
        },
        imgWidth3: '',
      }
    },
    provide() {
      return {
        closeSwiper: this.closeSwiper,
        delete: this.delete,
      }
    },
    mounted() {
      this.imgWidth3 = (document.body.clientWidth - 40) / 3;
    },
    methods: {
      delete(imgId) {
        this.blog.blogImg.splice(imgId, 1);
        this.srcList.get(0).splice(imgId, 1);
      },
      confirm() {
        api.uploadBlog(qs.stringify(this.blog, {arrayFormat: 'indices', allowDots: true}))
          .then((res) => {
            console.log(res)
          })
      },
      back() {
        this.$router.push({name: 'index'})
      },
      closeSwiper() {
        this.isShowImg = false;
        this.openImgId = undefined;
        document.body.style.overflow = "";
      },
      /*
    打开图片
   */
      openImg(imgId) {
        this.isShowImg = true;
        this.openImgId = imgId;
        document.body.style.overflow = "hidden";
      },
      uploadImg() {
        this.blog.blogImg.push({
          imgId: Number,
          imgUrl: "https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg",
          blogId: Number
        });
        if (this.srcList.get(0)) {
          this.srcList.get(0).push('https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg');
        } else {
          this.srcList.set(0, ['https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg']);
        }
      }
    }
  }
</script>

<style scoped>
  .top2 {
    width: 100%;
    position: relative;
    top: 0;
    z-index: 1;
    background-color: #fafafa;
  }

  .top-nav2 {
    font-size: 17px;
    padding: 10px 0;
    border-top: 1px solid #e5e5e5;
  }
</style>
