<template>
  <div>
    <div>
      <div @click="hideImg" style="display: none" role="dialog" aria-labelledby="galleryImg" aria-hidden="true"
           aria-modal="true"
           class="weui-gallery" id="gallery">
        <span id="galleryImg" alt="图片详情" role="img" class="weui-gallery__img"></span>
      </div>
    </div>

    <div>
      <div>
        <div style="width: 42px;padding: 0 10px 0 15px;float: left">
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
        </div>
        <p style="font-size: 15px; ">遍念</p>
        <p style="font-size: 12px" class="weui-media-box__desc">17小时前 来自iPhone客户端</p>
      </div>
      <div @click="toDetail" style="text-align: left;margin: 5px 12px 0  12px; font-size: 15px ">
        人生就是这样，听不完的谎话，看不透的人心，放不下的牵挂。
        Life is like this, endless lies, impenetrable hearts, and lingering concerns...
        <el-link :underline="false">全文</el-link>
      </div>
      <div style="margin: 2px 10px 0  10px">
        <el-image v-for="(item,index) in srcList" fit="cover" :id="'img'+index"
                  style="padding-left: 5px"
                  :src="item"
                  :preview-src-list="srcList">
        </el-image>
      </div>
    </div>
    <div style="height: 30px; display: flex; justify-content: space-around;margin-top: 5px">
      <a> <i style="font-size: 14px" class="el-icon-share">12</i></a>
      <a> <i style="font-size: 14px" class="el-icon-chat-dot-square">321</i></a>
      <a> <i style="font-size: 14px" class="el-icon-thumb ">1222</i></a>
    </div>
    <div style="height: 10px;background-color: #f5f2f2">
    </div>

  </div>
</template>

<script>
  export default {
    name: 'someBlogs',
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
    watch: {

    },
    mounted() {
      this.imgWidth = (document.body.clientWidth - 40) / 3;
      var _this = this;
      setTimeout(function () {
        for (let i = 0; i < 10; i++) {
          $("#img" + i).css("width", _this.imgWidth);
          $("#img" + i).css("height", _this.imgWidth);
        }
      },0);

    }, methods: {
      //隐藏图片
      hideImg() {
        $("#gallery").hide();
      },
      //展示图片
      showImg() {
        // $("#galleryImg").attr("style", "background-image: url("++");");
        // $("#gallery").show();
      },
      //到详情页面
      toDetail() {
        this.$router.push({name: 'blogDetail', params: {blogId: '1'}})
      },
    }
  }

</script>


<style scoped>

</style>
