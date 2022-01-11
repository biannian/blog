<template>
  <div>
    <div class="top">
      <div class="top-na">
        <div @click="toBack" style="float: left;margin-left:15px;font-size: 14px;margin-top: 5px"><i
          class="el-icon-arrow-left"></i>首页
        </div>
        <div style="font-size: 15px;width: 84%;text-align:center;font-weight: 600">微博正文</div>
      </div>
    </div>
    <div>

      <div   v-for="i in 1">
        <div>
          <div style="width: 42px;padding: 0 10px 0 15px;float: left">
            <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
          </div>
          <p style="font-size: 15px; ">遍念</p>
          <p style="font-size: 12px" class="weui-media-box__desc">17小时前 来自iPhone客户端</p>
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
      <div style="margin: 10px 0 10px 0">
        <div>
          <div style="width: 42px;padding: 0 10px 0 15px;float: left">
            <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
          </div>
          <p style="font-size: 15px; ">遍念</p>
          <p style="font-size: 14px; ">非主流！</p>
          <p style="font-size: 12px" class="weui-media-box__desc">1-1 20:01</p>
        </div>
      </div>


      <div style="height: 30px;background-color: #f5f2f2">
        <p style="text-align: center;font-size: 11px;padding: 5px"> 已加载全部评论 </p>
      </div>

    </div>

  </div>
</template>

<script>
  export default {
    name: 'blogDetail',
    data() {
      return {
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
      this.imgWidth = (document.body.clientWidth -40) / 3;
    },
    methods: {
      //隐藏图片
      hideImg() {
        $("#gallery").hide();
      },
      //展示图片
      showImg() {
        // $("#galleryImg").attr("style", "background-image: url("++");");
        // $("#gallery").show();
      },
      toBack() {
        this.$router.push('/')
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
</style>
