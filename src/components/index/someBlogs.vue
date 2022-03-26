<template>
  <div>
    <div v-for="(blog,key) in blogs" style="margin-top: 10px">
      <div>
        <div style="width: 42px;padding: 0 10px 0 15px;float: left" @click="toMyBlog(blog.user.userId)">
          <el-avatar :size="40"  :src="currentIp+blog.user.userImgUrl"></el-avatar>
        </div>
        <p style="font-size: 15px; ">{{blog.user.userName}}</p>
        <p style="font-size: 12px;color: #909399">{{blog.blogTimeDiffer}} {{blog.blogFrom}}</p>

        <div @click="toDetail(blog.blogId)" style="text-align: left;margin: 5px 12px 0  12px; font-size: 15px"
             v-html="blog.blogInfo">

          <el-link v-if="blog.blogInfo.length > 80" type="primary" :underline="false">全文</el-link>
        </div>
        <div style="margin: 2px 10px 0  10px">
          <el-image v-for="(item,index) in blog.blogImg" fit="cover" :key="index"
                    :style="'padding-left: 5px;width: '+imgWidth3+'px;height: '+imgWidth3+'px'"
                    v-if="item.imgUrl !=null && blog.blogImg.length >= 3"
                    :src="currentIp+item.imgUrl"
                    @click="openImg(blog.blogId,index)">
          </el-image>
          <el-image v-for="(item,index) in blog.blogImg" fit="cover" :key="index"
                    :style="'padding-left: 5px;width: '+imgWidth2+'px;height: '+imgWidth2+'px'"
                    v-if="item.imgUrl !=null && blog.blogImg.length == 2"
                    :src="currentIp+item.imgUrl" @click="openImg(blog.blogId,index)">
          </el-image>
          <el-image v-for="(item,index) in blog.blogImg" fit="cover" :key="index"
                    :style="'padding-left: 5px;width: '+imgWidth1+'px;height: '+imgWidth1+'px'"
                    v-if="item.imgUrl !=null && blog.blogImg.length == 1"
                    :src="currentIp+item.imgUrl" @click="openImg(blog.blogId,index)">
          </el-image>
        </div>
      </div>
      <div style="height: 30px; display: flex; justify-content: space-around;margin-top: 5px">
        <a> <i style="font-size: 14px" class="el-icon-share">{{blog.repeatCount}}</i></a>
        <a> <i style="font-size: 14px" class="el-icon-chat-dot-square">{{blog.messageCount}}</i></a>
        <a @click="likeBolg(blog)" v-if="blog.liked"> <i style="font-size: 14px" class="el-icon-star-on">{{blog.likeCount}}</i></a>
        <a @click="likeBolg(blog)" v-else> <i style="font-size: 14px"
                                              class="el-icon-star-off">{{blog.likeCount}}</i></a>
      </div>
      <div style="height: 10px;background-color: #f5f2f2">
      </div>
    </div>

    <blog-img-swiper v-if="openBlogId" :srcList="srcList" :blogId="openBlogId" :imgId="openImgId"></blog-img-swiper>

  </div>
</template>

<script>
  import api from "../../api/api";
  import BlogImgSwiper from "./blogImgSwiper";

  export default {
    name: 'someBlogs',
    components: {BlogImgSwiper},
    props: {
      userId: Number
    },
    data() {
      return {
        currentIp:api.currentIp(),
        imgWidth3: '',
        imgWidth2: '',
        imgWidth1: '',
        srcList: new Map(),
        blogs: [],
        openBlogId: '',
        openImgId: '',
      }
    },

    mounted() {
      this.imgWidth3 = (document.body.clientWidth - 40) / 3;
      this.imgWidth2 = (document.body.clientWidth - 40) / 2;
      this.imgWidth1 = document.body.clientWidth - 40;
      this.getBlogInfo();
    },
    provide() {
      return {
        closeSwiper: this.closeSwiper
      }
    },
    methods: {
      /*
      点击头像打开个人主页
       */
      toMyBlog(userId){
        this.$router.push({name: 'myBlog', params: {userId: userId}})
      },

      /*
      关闭弹窗
      */
      closeSwiper() {
        this.openBlogId = undefined;
        document.body.style.overflow = "";
      },
      /*
       打开图片
      */
      openImg(blogId, imgId) {
        this.openBlogId = blogId;
        this.openImgId = imgId;
        document.body.style.overflow = "hidden";
      },
      /*
      给微博点赞
       */
      likeBolg(blog) {
        blog.liked = !blog.liked;
        let params = {
          'blogId': blog.blogId,
          'userId': sessionStorage['userId'],
        }
        if (blog.liked == false) {
          api.notLikeBlog(params);
          blog.likeCount--;
        } else {
          api.likeBlog(params);
          blog.likeCount++;
        }

      },
      //到详情页面
      toDetail(blogId) {
        sessionStorage["blogId"] = blogId;
        this.$router.push({name: 'blogDetail', params: {blogId: blogId}})
      },
      getBlogInfo() {
        let params={
          userId:this.userId
        }
        api.getBlogInfo(params)
          .then((res) => {
            if (res.data.code == 200) {
              this.getBlogSuccess(res);
            }
          })
      },
      getBlogSuccess(res) {
        this.blogs = res.data.result;
        for (let i = 0; i < this.blogs.length; i++) {
          if (this.blogs[i].blogInfo.length > 80) {
            this.blogs[i].blogInfo.slice(0, 80);
          }
          if (this.blogs[i].blogImg != null) {
            let imgList = [];
            for (let j = 0; j < this.blogs[i].blogImg.length; j++) {
              imgList.push(this.blogs[i].blogImg[j].imgUrl);
            }
            this.srcList.set(this.blogs[i].blogId, imgList);
          }
        }
      },
    }
  }

</script>


<style>
  .el-image-viewer__mask {
    opacity: 1;
  }

</style>
