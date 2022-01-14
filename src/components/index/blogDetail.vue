<template>
  <div>
    <div style="display:none;position: fixed;transition: 0.5s;z-index: 4" id="topImg" class="top">
      <div @click="toBack" style="float: left;margin-left:15px;font-size: 14px;margin-top: 15px"><i
        class="el-icon-arrow-left"></i>首页
      </div>
      <div style="width: 25px;margin-right: auto;margin-left: auto">
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
      </div>
      <el-button style="float: right;margin-top: -35px;margin-right: 10px" type="warning" size="mini"
                 icon="el-icon-plus" round>关注
      </el-button>
    </div>
    <div id="background" style="transition: 0.5s;">
      <div id="top" class="top">
        <div class="top-na">
          <div @click="toBack" style="float: left;margin-left:15px;font-size: 14px;margin-top: 5px"><i
            class="el-icon-arrow-left"></i>首页
          </div>
          <div style="font-size: 15px;width: 87%;text-align:center;font-weight: 600">微博正文</div>
        </div>
      </div>
      <div>
        <div>
          <div>
            <div style="width: 42px;padding: 0 10px 0 15px;float: left">
              <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
            </div>
            <p style="font-size: 15px; ">遍念</p>
            <p style="font-size: 12px;color: #909399">17小时前 来自iPhone客户端</p>
          </div>
          <div>
            <div  v-html="blog.blogInfo" style="text-align: left;margin: 5px 12px 0  12px; font-size: 15px">
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
          <div style="text-align: left;margin-left: 15px;height: 30px">
            <i style="font-size: 12px;" class="el-icon-position"></i> <span style="font-size: 12px">{{blog.blogLocation}}</span>
          </div>
          <div style="height: 10px;background-color: #f5f2f2">
          </div>
        </div>
      </div>
      <!-- 评论区-->
      <div>
        <div style="border-bottom: 1px solid #e6e6e6;">
          <p style="text-align: left;margin-left: 14px;font-size: 14px;font-weight: bold;padding: 5px;"> 评论 790 </p>
        </div>
        <div style="margin: 10px 0 10px 0;">
          <div v-for="a in 10" style="border-bottom: 1px solid #e6e6e6;margin: 5px 0 0 0">
            <div style="width: 42px;padding: 0 10px 0 15px;float: left">
              <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
            </div>
            <p style="font-size: 15px; ">遍念</p>
            <p style="font-size: 14px; ">非主流！</p>
            <div style="font-size: 13px;background-color:#ededf1;padding: 3px;margin-left: 67px; border-radius: 5px;">
              <el-link :underline="false" type="primary">圈儿</el-link>
              <el-link :underline="false" type="info">等人</el-link>
              <el-link @click="showChat" :underline="false" type="primary"> 共12条评论></el-link>
            </div>
            <p style="font-size: 12px;color: #909399;margin-left: 64px;padding: 5px; ">1-1 20:01 <i
              style="font-size: 14px;"
              class="el-icon-chat-dot-square">321</i>
              <a> <i style="font-size: 14px" class="el-icon-thumb ">1222</i></a>
            </p>
          </div>
        </div>

        <div style="height: 45px;background-color: #f5f2f2">
          <p style="text-align: center;font-size: 11px;padding: 10px"> 已加载全部评论 </p>
        </div>

      </div>
    </div>
    <!--   评论详细信息-->
    <div id="chat" ref="chat" class="chat">
      <div class="chatTitle">
        <p style="font-size: 15px;text-align:center;font-weight: 600;padding: 10px">12条评论</p>
        <i @click="closeChat" style="font-size: 20px;padding-right: 13px;float: right;margin-top:-30px;"
           class="el-icon-close"></i>
      </div>
      <div style="margin: 40px 0 10px 0;">
        <div>
          <div style="width: 42px;padding: 0 10px 0 15px;float: left">
            <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
          </div>
          <p style="font-size: 15px;">遍念</p>
          <p style="font-size: 14px; ">非主流！</p>

          <p style="font-size: 12px;color: #909399;margin-left: 64px;padding: 5px; ">1-1 20:01 <i
            style="font-size: 14px;"
            class="el-icon-chat-dot-square">321</i>
            <a> <i style="font-size: 14px" class="el-icon-thumb ">1222</i></a>
          </p>
        </div>
      </div>
      <div style="height: 10px;background-color: #f5f2f2">
      </div>
      <div style="margin: 20px 0 10px 0;">
        <div v-for="a in 10" style="border-bottom: 1px solid #e6e6e6;margin: 5px 0 0 0">
          <div style="width: 42px;padding: 0 10px 0 15px;float: left">
            <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
          </div>
          <p style="font-size: 15px;">遍念</p>
          <p style="font-size: 14px; ">非主流！</p>

          <p style="font-size: 12px;color: #909399;margin-left: 64px;padding: 5px; ">1-1 20:01
            <a> <i style="font-size: 14px" class="el-icon-thumb ">1222</i></a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import api from "../../api/api";

  export default {
    name: 'blogDetail',
    data() {
      return {
        chatHeight: '',
        imgWidth3: '',
        imgWidth2: '',
        imgWidth1: '',
        srcList: new Map(),
        blog: {},
      }
    },
    mounted() {
      this.imgWidth3 = (document.body.clientWidth - 40) / 3;
      this.imgWidth2 = (document.body.clientWidth - 40) / 2;
      this.imgWidth1 = document.body.clientWidth - 40;
      let params = {
        "blogId" : sessionStorage["blogId"]
      }
      console.log(params);
      api.getBlogDetail(params)
      .then((res)=>{
        console.log(res)
        this.getBlogSuccess(res);
      })
      this.$refs.chat.addEventListener('scroll', this.chatScroll);
      window.addEventListener('scroll', this.backScroll);
    },
    methods: {
      //查询微博成功
      getBlogSuccess(res) {
        this.blog = res.data.result[0];
          if (this.blog.blogImg != null) {
            let imgList = [];
            for (let j = 0; j < this.blog.blogImg.length; j++) {
              imgList.push(this.blog.blogImg[j].imgUrl);
            }
            this.srcList.set(this.blog.blogId, imgList);
          }
      },
      backScroll() {
        let scrollTop = document.documentElement.scrollTop;
        let opacity = 1 - scrollTop / 45 < 0 ? 0 : 1 - scrollTop / 45
        if (scrollTop > 0) {
          $("#topImg").css("display", "block");
          $("#topImg").css("opacity", 1 - opacity);
        } else {
          $("#topImg").css("display", "none");
          $("#topImg").css("opacity", opacity + 0.4);
        }

      },
      chatScroll() {
        let scrollTop = document.getElementById("chat").scrollTop;
        if (scrollTop == 0) {
          this.closeChat();
        }
      },
      toBack() {
        this.$router.push('/')
      },
      showChat() {
        $("#chat").css("height", "600px");
        $("#chat").css("overflow", "auto");
        $("#background").css("filter", "blur(4px)");
        //   $("#topImg").css("filter", "blur(4px)");
        $("#background").css("overflow", "hidden");
      },
      closeChat() {
        $("#chat").css("height", "0");
        $("#background").css("filter", "");
        $("#topImg").css("filter", "");
        $("#background").css("overflow", "");
      },
    }
  }
</script>


<style scoped>
  .top {
    margin: 0 0 13px 0;
    opacity: 0.9;
    width: 100%;
    position: relative;
    top: 0;
    z-index: 1;
    border-bottom: 1px solid #e6e6e6;
    background-color: #fafafa;
  }

  .top-na {
    padding: 10px 0;
    border-top: 1px solid #e5e5e5;
  }

  .chat {
    border-radius: 25px;
    width: 100%;
    height: 0;
    position: fixed;
    transition: 0.5s;
    bottom: 0;
    z-index: 2;
    background-color: #ffffff;
  }

  .chatTitle {
    border-radius: 25px;
    position: fixed;
    z-index: 3;
    width: 100%;
    background-color: #ffffff;
  }

  .el-button--mini, .el-button--mini.is-round {
    padding: 6px 7px;
  }
</style>
