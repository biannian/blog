<template>
  <div>
    <div style="display:none;position: fixed;transition: 0.5s;z-index: 4" id="topImg" class="top">
      <div @click="toBack" style="float: left;margin-left:15px;font-size: 14px;margin-top: 15px"><i
        class="el-icon-arrow-left"></i>首页
      </div>
      <div style="width: 25px;margin-right: auto;margin-left: auto">
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
      </div>
      <el-button style="float: right;margin-top: -35px;margin-right: 10px" type="warning" size="mini" icon="el-icon-plus" round>关注</el-button>
    </div>
    <div id="background"  style="transition: 0.5s;">
      <div id="top" class="top">
        <div class="top-na">
          <div @click="toBack" style="float: left;margin-left:15px;font-size: 14px;margin-top: 5px"><i
            class="el-icon-arrow-left"></i>首页
          </div>
          <div style="font-size: 15px;width: 87%;text-align:center;font-weight: 600">微博正文</div>
        </div>
      </div>
      <div>
        <div v-for="i in 1">
          <div>
            <div style="width: 42px;padding: 0 10px 0 15px;float: left">
              <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
            </div>
            <p style="font-size: 15px; ">遍念</p>
            <p style="font-size: 12px;color: #909399">17小时前 来自iPhone客户端</p>
          </div>
          <div>
            <div style="text-align: left;margin: 5px 12px 0  15px; font-size: 14px ">
              人生就是这样，听不完的谎话，看不透的人心，放不下的牵挂。
              Life is like this, endless lies, impenetrable hearts, and lingering concerns.人生就是这样，听不完的谎话，看不透的人心，放不下的牵挂。

            </div>
            <div style="margin: 2px 10px 0  10px">
              <el-image v-for="(item,index) in srcList" fit="cover" :id="'img'+index"
                        style="padding-left: 5px"
                        :src="item"
                        :preview-src-list="srcList">
              </el-image>
            </div>
          </div>
          <div style="text-align: left;margin-left: 15px;height: 30px">
            <i style="font-size: 12px;" class="el-icon-position"></i> <span style="font-size: 12px">芝罘区鲁东大学</span>
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


        <div style="height: 30px;background-color: #f5f2f2">
          <p style="text-align: center;font-size: 11px;padding: 5px"> 已加载全部评论 </p>
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
  export default {
    name: 'blogDetail',
    data() {
      return {
        chatHeight: '',
        imgWidth: '',
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        srcList: [
          'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
          'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
          'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
          'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
          'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
          'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
          'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg',
          'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        ]
      }
    },
    mounted() {
      this.imgWidth = (document.body.clientWidth - 40) / 3;
      var _this = this;
      setTimeout(function () {
        for (let i = 0; i < 10; i++) {
          $("#img" + i).css("width", _this.imgWidth);
          $("#img" + i).css("height", _this.imgWidth);
        }
      }, 100);
        this.$refs.chat.addEventListener('scroll', this.chatScroll);
      window.addEventListener('scroll',this.backScroll);
    },
    methods: {
      backScroll(){
        let scrollTop =document.documentElement.scrollTop;
        let opacity =  1 - scrollTop/45 < 0  ? 0 : 1 - scrollTop/45
        if (scrollTop > 0){
          $("#topImg").css("display","block");
          $("#topImg").css("opacity", 1 - opacity);
        }else {
          $("#topImg").css("display","none");
          $("#topImg").css("opacity", opacity+0.4 );
        }

      },
      chatScroll(){
        let scrollTop = document.getElementById("chat").scrollTop;
        if (scrollTop == 0){
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
   .el-button--mini, .el-button--mini.is-round{
  padding: 6px 7px;
  }
</style>
