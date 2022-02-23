<template>
  <div>
    <!--    图片详情-->
    <blog-img-swiper v-if="openBlogId" :srcList="srcList" :blogId="openBlogId" :imgId="openImgId"></blog-img-swiper>
    <!--    上方头像关注-->
    <div style="display:none;position: fixed;transition: 0.5s;z-index: 1001" id="topImg" class="top">
      <div @click="toBack" style="float: left;margin-left:15px;font-size: 14px;margin-top: 15px"><i
        class="el-icon-arrow-left"></i>首页
      </div>
      <div v-if="blog.user" style="width: 25px;margin-right: auto;margin-left: auto;padding-top: 3px">
        <el-avatar :size="37" :src="blog.user.userImgUrl"></el-avatar>
      </div>
      <el-button style="float: right;margin-top: -35px;margin-right: 10px" type="warning" size="mini"
                 icon="el-icon-plus" round>关注
      </el-button>
    </div>
    <!--下方三个按钮-->
    <div id="bottomButton" class="bottom">
      <a> <i style="font-size: 14px" class="el-icon-share">转发</i></a>
      <a> <i style="font-size: 14px" class="el-icon-chat-dot-square" @click="comment">评论</i></a>
      <a @click="likeBolg(blog)" v-if="blog.liked"> <i style="font-size: 14px" class="el-icon-star-on">点赞</i></a>
      <a @click="likeBolg(blog)" v-else> <i style="font-size: 14px" class="el-icon-star-off">点赞</i></a>
    </div>
    <div id="comment" style="position: fixed;bottom: 0;z-index: 1002;width: 100%;display: none">
      <el-input v-model="commentInfo" type="textarea" cols="2" style="width: 80%;"></el-input>
      <el-button type="primary" size="small" @click="confirmComment">评 论</el-button>
    </div>
    <!--    页面屏蔽罩-->
    <div id="mask" class="mask" style="display: none" @click="closeChat"></div>
    <!--    页面-->
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
          <div v-if="blog.user">
            <div v-if="blog.user.userImgUrl" style="width: 42px;padding: 0 10px 0 15px;float: left">
              <el-avatar :size="40" :src="blog.user.userImgUrl"></el-avatar>
            </div>
            <p style="font-size: 15px; ">{{blog.user.userName}}</p>
            <p style="font-size: 12px;color: #909399">{{blog.blogTimeDiffer}} {{blog.blogFrom}}</p>
          </div>
          <div>
            <div v-html="blog.blogInfo" style="text-align: left;margin: 5px 12px 0  12px; font-size: 15px">
            </div>
            <div style="margin: 2px 10px 0  10px">
              <el-image v-for="(item,index) in blog.blogImg" fit="cover" :id="'img'+index" :key="index"
                        :style="'padding-left: 5px;width: '+imgWidth3+'px;height: '+imgWidth3+'px'"
                        v-if="item.imgUrl !=null && blog.blogImg.length >= 3"
                        :src="item.imgUrl"
                        @click="openImg(blog.blogId,index)">
              </el-image>
              <el-image v-for="(item,index) in blog.blogImg" fit="cover" :id="'img'+index" :key="index"
                        :style="'padding-left: 5px;width: '+imgWidth2+'px;height: '+imgWidth2+'px'"
                        v-if="item.imgUrl !=null && blog.blogImg.length == 2"
                        :src="item.imgUrl"
                        @click="openImg(blog.blogId,index)">
              </el-image>
              <el-image v-for="(item,index) in blog.blogImg" fit="cover" :id="'img'+index" :key="index"
                        :style="'padding-left: 5px;width: '+imgWidth1+'px;height: '+imgWidth1+'px'"
                        v-if="item.imgUrl !=null && blog.blogImg.length == 1"
                        :src="item.imgUrl"
                        @click="openImg(blog.blogId,index)">
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
          <p style="text-align: left;margin-left: 14px;font-size: 14px;font-weight: bold;padding: 5px;"> 评论
            {{blog.comment ? blog.comment.length:0}}
          </p>
        </div>
        <div style="margin: 10px 0 10px 0;">
          <div v-for="comm in blog.comment" style="border-bottom: 1px solid #e6e6e6;margin: 5px 0 0 0"
               v-if="comm.higherId == 0">
            <div style="width: 42px;padding:2px 10px 0 15px;float: left">
              <el-avatar :size="40" :src="comm.user.userImgUrl"></el-avatar>
            </div>
            <p style="font-size: 15px; ">{{comm.user.userName}}</p>
            <p style="font-size: 14px; ">{{comm.commentInfo}}</p>
            <!--展示评论的评论-->
            <div v-if="comm.isShowCommentChat"
                 style="font-size: 13px;background-color:#ededf1;padding: 3px;margin-left: 67px; border-radius: 5px;">
              <el-link :underline="false" type="primary">{{commentMap.get(comm.commentId)[0].user.userName}}</el-link>
              <el-link :underline="false" type="info">等人</el-link>
              <el-link @click="showChat(comm)" :underline="false" type="primary">
                共{{commentMap.get(comm.commentId) !=null ? commentMap.get(comm.commentId).length : null}}条评论>
              </el-link>
            </div>
            <p style="font-size: 12px;color: #909399;margin-left: 64px;padding: 5px; ">{{comm.commentTimeDiffer}} <i
              style="font-size: 14px;"
              class="el-icon-chat-dot-square">{{commentMap.get(comm.commentId) !=null ?
              commentMap.get(comm.commentId).length : null}}</i>
              <a @click="likeComment(comm)" v-if="comm.isCommentLike"> <i style="font-size: 14px"
                                                                          class="el-icon-star-on">{{comm.likeCount}}</i></a>
              <a @click="likeComment(comm)" v-else> <i style="font-size: 14px"
                                                       class="el-icon-star-off">{{comm.likeCount}}</i></a>
            </p>
          </div>
          <div style="text-align: center;font-size: 11px;padding: 12px" v-if="blog.comment && blog.comment.length == 0">
            快来发表你的评论吧
          </div>
        </div>
        <div style="height: 40px;background-color: #f5f2f2">
          <p v-if=" blog.comment && blog.comment.length > 0" style="text-align: center;font-size: 13px;padding: 12px">
            已加载全部评论 </p>
          <p v-else style="text-align: center;font-size: 13px;padding: 12px"> 暂无评论 </p>
        </div>

      </div>
    </div>
    <!--   评论详细信息-->
    <div id="chat" ref="chat" class="chat">
      <div class="chatTitle">
        <p style="font-size: 15px;text-align:center;font-weight: 600;padding: 10px">{{commentMap.get(openCommentId)
          !=null ? commentMap.get(openCommentId).length : null}}条评论</p>
        <i @click="closeChat" style="font-size: 20px;padding-right: 13px;float: right;margin-top:-30px;"
           class="el-icon-close"></i>
      </div>
      <div style="margin: 50px 0 10px 0;">
        <div v-if="openComment">
          <div style="width: 42px;padding: 2px 10px 0 15px;float: left">
            <el-avatar :size="40" :src="openComment.user.userImgUrl"></el-avatar>
          </div>
          <p style="font-size: 15px;">{{openComment.user.userName}}</p>
          <p style="font-size: 14px; ">{{openComment.commentInfo}}</p>

          <p style="font-size: 12px;color: #909399;margin-left: 64px;padding: 5px; ">{{openComment.commentTimeDiffer}}
            <i
              style="font-size: 14px;"
              class="el-icon-chat-dot-square">{{commentMap.get(openComment.commentId) !=null ?
              commentMap.get(openComment.commentId).length : null}}</i>
            <a @click="likeComment(openComment)" v-if="openComment.isCommentLike"> <i style="font-size: 14px"
                                                                                      class="el-icon-star-on">{{openComment.likeCount}}</i></a>
            <a @click="likeComment(openComment)" v-else> <i style="font-size: 14px"
                                                            class="el-icon-star-off">{{openComment.likeCount}}</i></a>
          </p>
        </div>
      </div>
      <div style="height: 10px;background-color: #f5f2f2">
      </div>
      <div style="margin: 20px 0 10px 0;">
        <div v-for="item in commentMap.get(openCommentId)" style="border-bottom: 1px solid #e6e6e6;margin: 5px 0 0 0">
          <div style="width: 42px;padding: 2px 10px 0 15px;float: left">
            <el-avatar :size="40" :src="item.user.userImgUrl"></el-avatar>
          </div>
          <p style="font-size: 15px;">{{item.user.userName}}</p>
          <p style="font-size: 14px;" v-html="item.commentInfo"></p>

          <p style="font-size: 12px;color: #909399;margin-left: 64px;padding: 5px; ">{{item.commentTimeDiffer}}
            <a @click="likeComment(item)" v-if="item.isCommentLike"> <i style="font-size: 14px"
                                                                        class="el-icon-star-on">{{item.likeCount}}</i></a>
            <a @click="likeComment(item)" v-else> <i style="font-size: 14px"
                                                     class="el-icon-star-off">{{item.likeCount}}</i></a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import api from "../../api/api";
  import BlogImgSwiper from "./blogImgSwiper";
  import qs from 'qs';

  export default {
    components: {BlogImgSwiper},
    name: 'blogDetail',
    data() {
      return {
        openBlogId: '',
        openImgId: '',
        chatHeight: '',
        imgWidth3: '',
        imgWidth2: '',
        imgWidth1: '',
        srcList: new Map(),
        commentMap: new Map(),//存放子评论
        blog: {},
        openCommentId: '',//当前打开的评论id
        openComment: null,//当前打开的评论对象
        commentInfo: '',//评论内容
      }
    },
    provide() {
      return {
        closeSwiper: this.closeSwiper
      }
    },
    mounted() {
      this.init();
    },
    methods: {
      /*
      初始化
      */
      init() {
        this.imgWidth3 = (document.body.clientWidth - 40) / 3;
        this.imgWidth2 = (document.body.clientWidth - 40) / 2;
        this.imgWidth1 = document.body.clientWidth - 40;
        let params = {
          "blogId": sessionStorage["blogId"]
        }
        api.getBlogDetail(params)
          .then((res) => {
            console.log(res)
            this.getBlogSuccess(res);
          })
        this.$refs.chat.addEventListener('scroll', this.chatScroll);
        window.addEventListener('scroll', this.backScroll);
      },
      confirmComment() {
        let params = {
          blogId: this.blog.blogId,
          userId: sessionStorage['userId'],
          commentInfo: this.commentInfo,
          higherId: 0
        }
        api.addComment(qs.stringify(params))
          .then(res => {
            if (res.data.result == 1) {
              this.init();
              this.commentInfo = '';
              $("#comment").hide();
            }
          })
      },
      /*
      关闭图片
      */
      closeSwiper() {
        this.openBlogId = undefined;
        document.body.style.overflow = "";
      },
      /*
      打开图片
     */
      openImg(blogId, imgId) {
        this.openBlogId = blogId;
        this.openImgId = imgId;
        document.body.style.overflow = "hidden";
      },
      /**
       * 点赞
       * @param comment
       */
      likeComment(comment) {
        comment.isCommentLike = !comment.isCommentLike;
        let params = {
          comment: comment
        }
        api.likeComment(params)
          .then((res) => {
            console.log(res);
          });
      },

      isShowComment(commentId) {
        for (let i = 0; i < this.blog.comment.length; i++) {
          if (this.blog.comment[i].higherId == commentId) {
            return true;
          }
        }
      },
      //点赞
      likeBolg(blog) {
        blog.liked = !blog.liked;
        let params = {
          'blogId': blog.blogId,
          'userId': sessionStorage['userId'],
        }
        if (blog.liked == false) {
          api.notLikeBlog(params);
          blog.likeCount--;
        } else {
          api.likeBlog(params);
          blog.likeCount++;
        }
      },
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
        for (let i = 0; i < this.blog.comment.length; i++) {
          for (let j = 0; j < this.blog.comment.length; j++) {
            if (this.blog.comment[i].higherId == this.blog.comment[j].commentId) {
              this.blog.comment[j]['isShowCommentChat'] = true;
              if (this.commentMap.get(this.blog.comment[j].commentId)) {
                this.commentMap.get(this.blog.comment[j].commentId).push(this.blog.comment[i]);
                continue;
              }
              let comments = [];
              comments.push(this.blog.comment[i]);
              this.commentMap.set(this.blog.comment[j].commentId, comments);
            }
          }
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
      showChat(comment) {
        this.openCommentId = comment.commentId;
        this.openComment = comment;
        $("#chat").css("height", "600px");
        $("#chat").css("overflow", "auto");
        $("#background").css("filter", "blur(4px)");
        //   $("#topImg").css("filter", "blur(4px)");
        document.body.style.overflow = "hidden";
        $("#bottomButton").css("display", "none");
        $("#mask").css("display", "block");
        $("#mask").css("overflow", "hidden");
      },
      /*
      评论
       */
      comment() {
        $("#comment").show();
        $("#mask").css("display", "block");
        $("#mask").css("overflow", "hidden");
      },
      closeChat() {
        $("#comment").hide();
        $("#chat").css("height", "0");
        $("#background").css("filter", "");
        $("#topImg").css("filter", "");
        $("#app").css("overflow", "");
        document.body.style.overflow = "";
        $("#bottomButton").css("display", "flex");
        $("#mask").css("display", "none");
        $("#mask").css("overflow", "");
      },
    }
  }
</script>


<style>
  .mask {
    position: fixed;
    z-index: 1000;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    touch-action: none;
  }

  .bottom {
    padding: 10px;
    background-color: #ffffff;
    bottom: 0;
    position: fixed;
    opacity: 0.9;
    z-index: 10;
    width: 100%;
    border-top: 1px solid #e6e6e6;
    display: flex;
    justify-content: space-around;
  }

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
    z-index: 10001;
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

  .el-image-viewer__mask {
    opacity: 1;
  }
</style>
