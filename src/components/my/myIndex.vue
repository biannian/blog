<template>
  <div>
    <div
      style="position: fixed; transition: 0.5s; z-index: 1001"
      id="topImg"
      class="top1"
    >
      <div class="top-nav1">
        <span style="margin-left: 50%; visibility: hidden" id="my">我</span>
        <span style="margin-left: 38%">
          <i class="el-icon-setting" id="showIOSActionSheet"></i
        ></span>
      </div>
    </div>
    <!--    头像 已登录-->
    <div  style="
        border-bottom: 1px solid #e5e5e5;
        height: 180px;
        background-color: #fafafa;
      " >
      <div style="padding: 60px 0px 0 30px">
        <el-avatar
          style="float: left"
          :size="50"
          v-if="user.userImgUrl"
          :src="currentIp + user.userImgUrl"
        ></el-avatar>
        <p style="font-size: 17px; padding: 5px 0 0 60px">
          {{ user.userName }}
        </p>
        <p style="font-size: 14px; padding: 0px 0 0 60px">
          微博号：{{ user.account }}
        </p>
      </div>
      <div
        style="
          margin-top: 15px;
          display: flex;
          justify-content: space-evenly;
          font-size: 14px;
        "
      >
        <div style="text-align: center">
          <p>5</p>
          <p>微博</p>
        </div>
        <div style="text-align: center">
          <p>5</p>
          <p>关注</p>
        </div>
        <div style="text-align: center">
          <p>5</p>
          <p>粉丝</p>
        </div>
      </div>
    </div>

    <div>
      <div class="weui-mask" id="iosMask" style="display: none"></div>
      <div
        role="dialog"
        aria-modal="true"
        tabindex="0"
        aria-hidden="true"
        class="weui-actionsheet"
        id="iosActionsheet"
      >
        <div class="weui-actionsheet__title">
          <p class="weui-actionsheet__title-text">
            这是一个标题，可以为一行或者两行。
          </p>
        </div>
        <div class="weui-actionsheet__menu">
          <div
            id="current1"
            tabindex="0"
            role="button"
            class="weui-actionsheet__cell"
          >
            修改信息
          </div>
          <div role="button" tabindex="0" class="weui-actionsheet__cell">
            切换账户
          </div>
          <div
            role="button"
            tabindex="0"
            @click="logout"
            class="weui-actionsheet__cell weui-actionsheet__cell_warn"
          >
            注销账户
          </div>
        </div>
        <div class="weui-actionsheet__action">
          <div
            role="button"
            tabindex="0"
            class="weui-actionsheet__cell"
            id="iosActionsheetCancel"
          >
            取消
          </div>
        </div>
      </div>
    </div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />

    <br />
  </div>
</template>

<script>
import api from "../../api/api";
import qs from "qs";
import { Message } from "element-ui";

export default {
  name: "myIndex",
  data() {
    return {
      currentIp: api.currentIp(),
      isShowTop: false,
      userId: "",
      user: {},
    };
  },
  mounted() {
    this.userId = sessionStorage["userId"];
    window.addEventListener("scroll", this.backScroll);
    this.getUserInfo();
    this.actionSheet();
  },
  methods: {
    logout() {
      sessionStorage["userId"] = "";
      this.userId = "";
      this.getUserInfo();
    },
    getUserInfo() {
      let data = { userId: this.userId };
      api.getUserInfo(qs.stringify(data)).then((res) => {
        if (res.data.result.length === 1) {
          this.user = res.data.result[0];
        } else if (res.data.result.length > 1) {
          Message.error("查询用户信息出错，请联系管理员");
        } else {
          this.$router.push({ name: "login" });
        }
      });
    },
    actionSheet() {
      $(function () {
        var $iosActionsheet = $("#iosActionsheet");
        var $iosMask = $("#iosMask");
        function hideActionSheet() {
          $iosActionsheet
            .removeClass("weui-actionsheet_toggle")
            .attr("aria-hidden", "true");
          $iosMask.fadeOut(200);
          $("#showIOSActionSheet").trigger("focus");
        }

        $iosMask.on("click", hideActionSheet);
        $("#iosActionsheetCancel").on("click", hideActionSheet);
        $("#showIOSActionSheet").on("click", function () {
          $iosActionsheet
            .attr("aria-hidden", "false")
            .addClass("weui-actionsheet_toggle");
          $iosMask.fadeIn(200);
          setTimeout(function () {
            $("#current1").trigger("focus");
          }, 200);
        });
      });
    },
    backScroll() {
      let scrollTop = document.documentElement.scrollTop;
      if (scrollTop > 60) {
        $("#my").css("visibility", "");
      } else {
        $("#my").css("visibility", "hidden");
      }
    },
  },
};
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
