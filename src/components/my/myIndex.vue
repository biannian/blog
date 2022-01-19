<template>
  <div>
    <div style="position: fixed;transition: 0.5s;z-index: 1001" id="topImg" class="top1">
      <div class="top-nav1">
        <span style="margin-left: 50%;visibility:hidden;" id="my">我</span>
        <span style="margin-left: 38%"> <i class="el-icon-setting"></i></span>
      </div>
    </div>
    <!--    头像 已登录-->
    <div style="border-bottom: 1px solid #e5e5e5;height: 180px;background-color: #fafafa;">

      <div style="padding: 60px 0px 0 30px;">
        <el-avatar style="float:left;" :size="50"
                   :src="user.userImgUrl"></el-avatar>
        <p style="font-size: 17px;padding: 5px 0 0 60px">{{user.userName}}</p>
        <p style="font-size: 14px;padding: 0px 0 0 60px">微博号：</p>

      </div>
      <div style="margin-top:15px;display: flex; justify-content: space-evenly;font-size: 14px">
        <div style="text-align: center"><p>5</p>
          <p>微博</p></div>
        <div style="text-align: center"><p>5</p>
          <p>关注</p></div>
        <div style="text-align: center"><p>5</p>
          <p>粉丝</p></div>
      </div>
    </div>

    <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
    <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
    <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
    <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
  </div>
</template>

<script>
  import api from "../../api/api";
  import qs from 'qs';
  import {Message} from "element-ui";
  export default {
    name: 'myIndex',
    data() {
      return {
        isShowTop: false,
        userId: '',
        user:{},
      }
    },
    mounted() {
      sessionStorage["userId"] = 0;
      this.userId = sessionStorage["userId"];
      window.addEventListener('scroll', this.backScroll);
      let data = {"userId": this.userId };
      api.getUserInfo(qs.stringify(data))
        .then((res) => {
          if ( res.data.result.length === 1){
              this.user = res.data.result[0];
          }else if (res.data.result.length > 1){
            Message.error("查询用户信息出错，请联系管理员");
          }else{
            this.$router.push({name: 'login'})
          }
        })
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
  .top1 {
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
