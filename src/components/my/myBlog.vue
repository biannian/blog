<template>
  <div>
    <div @click="back" style="position: absolute;left: 20px;top:20px"><i
      class="el-icon-arrow-left"></i>返回
    </div>
    <div class="background">

    </div>
    <div style="display: flex">

      <div class="avatar">
        <el-avatar  class="head" :size="70" src="http://localhost:8083/images/avatar/taoziweiqishui.jpg"></el-avatar>
      </div>
      <div class="info">
        <p style="font-size: 18px;margin-top: 8px;margin-left: 6px">桃子味汽水</p>
        <span style="font-size: 14px;"> 1</span>
        <span style="font-size: 10px;color: #909399"> 微博 |</span>
        <span style="font-size: 14px;margin-left: 12px"> 1</span>
        <span style="font-size: 10px;color: #909399"> 关注  |</span>
        <span style="font-size: 14px;margin-left: 12px"> 1</span>
        <span style="font-size: 10px;color: #909399"> 粉丝 </span>
      </div>
      <div class="message">
        <el-button style="float: right;margin-right:20px;margin-top: 20px " icon="el-icon-message" type="info" size="mini" round></el-button>
      </div>

    </div>
    <div style="height: 10px;background-color: #f5f2f2"></div>
    <some-blogs v-if="userId !==''" :userId="userId"></some-blogs>
  </div>
</template>

<script>
  import api from "../../api/api";
  import SomeBlogs from "../index/someBlogs";

  export default {
    name: "myBlog.vue",
    components: {SomeBlogs},
    data() {
      return {
        userId:'',
      }
    },
    mounted() {
      this.userId= this.$route.params.userId;
      if(this.userId){
        sessionStorage["openUserId"] = this.$route.params.userId;
      } else {
        this.userId =  sessionStorage["openUserId"];
      }
    },
    methods: {
      back() {
        history.back();
      }
    }
  }
</script>

<style scoped>
  .background {
    height: 180px;
    background-image: url("/static/images/title1.png");
  }

  .avatar {
    height: 70px;
    width: 100px;
  }

  .info {
    flex: 1;
    height: 70px;
  }
  .message{
    height: 70px;
    width: 80px;

  }
  .head{
    border: #e5e5e5 4px;
    margin-top: -20px;
    margin-left: 20%;
  }
</style>
