<template>
  <div>
    <div v-for="(blog,key) in blogs" style="margin-top: 10px">
      <div>
        <div style="width: 42px;padding: 0 10px 0 15px;float: left">
          <el-avatar :size="40" :src="blog.user.userImgUrl"></el-avatar>
        </div>
        <p style="font-size: 15px; ">{{blog.user.userName}}</p>
        <p style="font-size: 12px;color: #909399">{{blog.blogTime}} {{blog.blogFrom}}</p>

        <div @click="toDetail(blog.blogId)" style="text-align: left;margin: 5px 12px 0  12px; font-size: 15px"
             v-html="blog.blogInfo">

          <el-link v-if="blog.blogInfo.length > 80" type="primary" :underline="false">全文</el-link>
        </div>
        <div style="margin: 2px 10px 0  10px">
          <el-image v-for="(item,index) in blog.blogImg" fit="cover" :id="'img'+index" :key="index"
                    :style="'padding-left: 5px;width: '+imgWidth3+'px;height: '+imgWidth3+'px'"
                    v-if="item.imgUrl !=null && blog.blogImg.length >= 3"
                    :src="item.imgUrl"
                    :preview-src-list="srcList.get(blog.blogId)">
          </el-image>
          <el-image v-for="(item,index) in blog.blogImg" fit="cover" :id="'img'+index" :key="index"
                    :style="'padding-left: 5px;width: '+imgWidth2+'px;height: '+imgWidth2+'px'"
                    v-if="item.imgUrl !=null && blog.blogImg.length == 2"
                    :src="item.imgUrl"
                    :preview-src-list="srcList.get(blog.blogId)">
          </el-image>
          <el-image v-for="(item,index) in blog.blogImg" fit="cover" :id="'img'+index" :key="index"
                    :style="'padding-left: 5px;width: '+imgWidth1+'px;height: '+imgWidth1+'px'"
                    v-if="item.imgUrl !=null && blog.blogImg.length == 1"
                    :src="item.imgUrl"
                    :preview-src-list="srcList.get(blog.blogId)">
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
  </div>
</template>

<script>
  import api from "../../api/api";

  export default {
    name: 'someBlogs',
    data() {
      return {
        imgWidth3: '',
        imgWidth2: '',
        imgWidth1: '',
        srcList: new Map(),
        blogs: [],
      }
    },
    watch: {},
    mounted() {
      this.imgWidth3 = (document.body.clientWidth - 40) / 3;
      this.imgWidth2 = (document.body.clientWidth - 40) / 2;
      this.imgWidth1 = document.body.clientWidth - 40;
      this.getBlogInfo();

    }, methods: {
      likeBolg(blog) {
        blog.liked = !blog.liked;
        if (blog.liked == false) {
          blog.likeCount--;
        } else {
          blog.likeCount++;
        }
        let params = {
          'blogId': blog.blogId,
          'userId': '',
        }
        api.likeBlog(params);
      },
      //到详情页面
      toDetail(blogId) {
        sessionStorage["blogId"] = blogId;
        this.$router.push({name: 'blogDetail', params: {blogId: blogId}})
      },
      getBlogInfo() {
        api.getBlogInfo()
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
  .el-image-viewer__mask{
    opacity:1;
}
</style>
