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
      <div style="margin-top:15px;float: left">
        <el-image fit="cover" :key="index" 
                  v-for="(item,index) in blog.blogImg"
                  :style="'padding-left: 5px;width: '+imgWidth3+'px;height: '+imgWidth3+'px;'"
                  v-if="item.imgUrl !='' "
                  :src="item.imgUrl"
                  @click="openImg(index)">
        </el-image>
        <el-image fit="cover" v-if="blog.blogImg.length <9" @click="upload"
                  :style="'padding-left: 5px;width: '+imgWidth3+'px;height: '+imgWidth3+'px'"
                  src="../../../static/images/addImg.png">
        </el-image>
        <el-upload v-show="false"
                   action
                   :on-change="otherSectionFile">
          <el-button size="small" id="uploadImg" type="primary">点击上传</el-button>
        </el-upload>

      </div>
    </div>

  </div>
</template>

<script>
  import BlogImgSwiper from "./blogImgSwiper";
  import api from "../../api/api";
  import qs from 'qs';
  import showToast from "../../../static/js/util/toastMessage";
  import dialog from "../../../static/js/util/dialogs";
  import utils from "../../../static/js/util/util";
  export default {
    components: {BlogImgSwiper},
    name: "addBlog",
    data() {
      return {
        fileList: [],
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
      if (!sessionStorage['userId']) {
        dialog.showConfirm("提示信息", "您尚未登录，请登录", "取消", "确定",
          "_this.dialogCancel()", "_this.dialogConfirm()",this);
      }
    },
    methods: {
      dialogCancel(){
        history.back();
      },
      dialogConfirm(){
        this.$router.push({name: 'login'})
      },
      upload() {
        $("#uploadImg").click();
      },
      otherSectionFile(file) {
        if (file.status !== 'ready') return;
        const typeArr = ['image/png', 'image/gif', 'image/jpeg', 'image/jpg'];
        const isJPG = typeArr.indexOf(file.raw.type) !== -1;
        const isLt3M = file.size / 1024 / 1024 < 21;
        if (!isJPG) {
          showToast.warn("只能上传照片!")
          return;
        }
        if (!isLt3M) {
          showToast.warn("上传图片大小不能超过 20MB")
          return;
        }
        const formData = new FormData();
        formData.append('picture', file.raw);
        api.pictureAdd(formData)
          .then(res => {
            this.blog.blogImg.push({
              imgId: Number,
              imgUrl: res.data.result,
              blogId: Number
            });
            if (this.srcList.get(0)) {
              this.srcList.get(0).push(res.data.result);
            } else {
              this.srcList.set(0, [res.data.result]);
            }
          })
          .catch(res => {
            showToast.warn("上传图片错误")
          })
      },
      delete(imgId) {
        this.blog.blogImg.splice(imgId, 1);
        this.srcList.get(0).splice(imgId, 1);
      },
      confirm() {
        this.blog.blogAuthorId = sessionStorage['userId'];
        this.blog.blogFrom = "来自"+utils.getBrowserInfo()[0];
        api.uploadBlog(qs.stringify(this.blog, {arrayFormat: 'indices', allowDots: true}))
          .then((res) => {
            if (res.data.code == 200) {
              showToast.success("发送成功！", 1000, "_this.$router.push({name: 'index'})", this);
            }
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
