<template>
  <div>
    <div style="position: fixed;transition: 0.5s;z-index: 1001" id="topImg" class="top">
      <div class="top-nav1">
        <span style="margin-left: 50%;" id="my">我</span>
        <span style="margin-left: 38%"> <i class="el-icon-setting"></i></span>
      </div>
    </div>
    <!--    头像 已登录-->
    <div style="border-bottom: 1px solid #e5e5e5;height: 180px;background-color: #fafafa;">

        <div style="padding: 60px 0px 0 30px;">
          <el-avatar style="float:left;" :size="50"
                     src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
          <p style="font-size: 16px;padding: 5px 0 0 60px">遍念</p>
          <p style="font-size: 14px;padding: 0px 0 0 60px">微博号：</p>

        </div>
        <div style="margin-top:15px;display: flex; justify-content: space-evenly;font-size: 14px">
          <div style="text-align: center"><p>5</p><p>微博</p></div>
          <div style="text-align: center"><p>5</p><p>关注</p></div>
          <div style="text-align: center"><p>5</p><p>粉丝</p></div>
        </div>
      </div>

    <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
    <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
    <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
    <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
  </div>
</template>

<script>
  export default {
    name: 'myIndex',
    data() {
      return {
        isShowTop: false,
        userId: '',
      }
    },
    mounted() {
      this.userId = sessionStorage["userId"];
      window.addEventListener('scroll', this.backScroll);

    }, methods: {
      backScroll() {
        let scrollTop = document.documentElement.scrollTop;
        if (scrollTop > 60) {
          $("#my").css("visibility", "");
        } else {
          $("#my").css("visibility", "hidden");
        }
      }
    }
  }
</script>

<style scoped>
  .top {

    width: 100%;
    position: fixed;
    top: 0;
    z-index: 1;
    background-color: #fafafa;
  }

  .top-nav1 {
    font-size: 17px;
    padding: 10px 0;
    border-top: 1px solid #e5e5e5;
  }
</style>
