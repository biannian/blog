<template>
  <div>
    <div v-for="(blog,key) in blogs" style="margin-top: 10px">
      <div>
        <div style="width: 42px;padding: 0 10px 0 15px;float: left">
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
        </div>
        <p style="font-size: 15px; ">遍念</p>
        <p style="font-size: 12px;color: #909399">17小时前 来自iPhone客户端</p>

        <div @click="toDetail" style="text-align: left;margin: 5px 12px 0  12px; font-size: 15px ">
          {{blog.blogInfo}}
          <el-link v-if="blog.blogInfo.length > 30" :underline="false">全文</el-link>
        </div>
        <div style="margin: 2px 10px 0  10px">
          <el-image v-for="(item,index) in blog.blogImg" fit="cover" :id="'img'+index" :key="index"
                    style="padding-left: 5px;width: 121.2px;height: 121.2px"
                    v-if="item.imgUrl !=null"
                    :src="item.imgUrl"
                    :preview-src-list="srcList.get(blog.blogId)">
          </el-image>
        </div>
      </div>
      <div style="height: 30px; display: flex; justify-content: space-around;margin-top: 5px">
        <a> <i style="font-size: 14px" class="el-icon-share">{{blog.repeatCount}}</i></a>
        <a> <i style="font-size: 14px" class="el-icon-chat-dot-square">{{blog.messageCount}}</i></a>
        <a> <i style="font-size: 14px" class="el-icon-thumb ">{{blog.likeCount}}</i></a>
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
        imgWidth: '',
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        srcList: new Map(),
        blogs: [],
      }
    },
    watch: {},
    mounted() {
      this.imgWidth = (document.body.clientWidth - 40) / 3;
      this.getBlogInfo();

    }, methods: {
      //到详情页面
      toDetail() {
        this.$router.push({name: 'blogDetail', params: {blogId: '1'}})
      },
      getBlogInfo() {
        api.getBlogInfo()
          .then((res) => {
            if (res.data.code == 200) {
              this.getBlogSuccess(res);
            }
          }).catch((error) => {

        })
      },
      getBlogSuccess(res) {
        this.blogs = res.data.result;
        for (let i = 0; i < this.blogs.length; i++) {
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


<style scoped>

</style>
