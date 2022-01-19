<template>
  <div>
  <div class="top-nav">
    <div class="top-nav-bar" >
      <div id="titleFollow" @click="clickFollow">关 注</div>
      <div id="titleRecommend" @click="clickRecommend" class="active">推 荐</div>
    </div>
  </div>
      <div id="follow" style="margin-top: 60px;" v-if="isShowFollow">
        <blog-follow></blog-follow>
      </div>
      <div id="recommend" style="margin-top: 60px;" v-if="!isShowFollow">
        <some-blogs></some-blogs>
      </div>
    </div>


</template>
<script>
  import SomeBlogs from "./someBlogs";
  import BlogFollow from "./blogFollow";

  export default {
    name: 'blogIndex',
    components: {BlogFollow, SomeBlogs},
    data() {
      return {
        isShowFollow:false,
      }
    },
    mounted() {

    },methods:{
      clickFollow(){
        $("#titleFollow").addClass("active");
        $("#titleRecommend").removeClass();
        this.isShowFollow = true;
      },clickRecommend(){
        $("#titleFollow").removeClass();
        $("#titleRecommend").addClass("active");
        this.isShowFollow = false;
      },
    }
  }
</script>

<style >
  .top-nav {
    opacity: 0.9;
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 1;
    border-bottom:1px solid #e6e6e6;
    background-color: #fafafa;
  }
  .top-nav-bar {
    display: flex;
    justify-content: space-evenly;
    font-size: 14px;
    padding: 10px 0;
    border-top: 1px solid #e5e5e5;
  }

  .top-nav-bar .active {
    border-bottom: 2px solid #07c160;
  }
</style>

