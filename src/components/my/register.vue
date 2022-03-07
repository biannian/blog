<template>
  <div>
    <div class="weui-form">
      <div class="weui-form__text-area">
        <h2 class="weui-form__title">注册</h2>
        <div class="weui-form__desc"></div>
      </div>
      <div class="weui-form__control-area">
        <div class="weui-cells__group weui-cells__group_form">
          <div class="weui-cells">
            <label for="js_input1" class="weui-cell weui-cell_active">
              <div class="weui-cell__hd">
                <span class="weui-label">邮箱</span>
              </div>
              <div class="weui-cell__bd">
                <input
                  id="js_input1"
                  class="weui-input"
                  v-model="userInfo.email"
                  placeholder="请输入邮箱地址"
                />
              </div>
            </label>
            <label for="js_input1" class="weui-cell weui-cell_active">
              <div class="weui-cell__hd">
                <span class="weui-label">验证码</span>
              </div>
              <div class="weui-cell__bd weui-flex">
                <input
                  style="margin-top: 5%"
                  id="js_input3"
                  class="weui-input"
                  placeholder="请输入验证码"
                  v-model="userInfo.verification"
                />
                <button
                  style="width: 200px"
                  id="js_btn_vcode"
                  role="button"
                  class="
                    js_target
                    weui-cell__control
                    weui-btn weui-btn_default
                    weui-vcode-btn
                  "
                  @click="getVerification"
                >
                  {{ buttonMsg }}
                </button>
              </div>
            </label>
            <label for="js_input1" class="weui-cell weui-cell_active">
              <div class="weui-cell__hd">
                <span class="weui-label">登陆账号</span>
              </div>
              <div class="weui-cell__bd">
                <input
                  id="js_input2"
                  class="weui-input"
                  placeholder="请输入登陆账号"
                  v-model="userInfo.account"
                />
              </div>
            </label>
            <label for="js_input1" class="weui-cell weui-cell_active">
              <div class="weui-cell__hd">
                <span class="weui-label">登陆密码</span>
              </div>
              <div class="weui-cell__bd">
                <input
                  id="js_input4"
                  type="password"
                  class="weui-input"
                  placeholder="请输入登陆密码"
                  v-model="userInfo.password"
                />
              </div>
            </label>
            <label for="js_input1" class="weui-cell weui-cell_active">
              <div class="weui-cell__hd">
                <span class="weui-label">确认密码</span>
              </div>
              <div class="weui-cell__bd">
                <input
                  id="js_input5"
                  type="password"
                  class="weui-input"
                  placeholder="请确认密码"
                  v-model="userInfo.password1"
                />
              </div>
            </label>
          </div>
        </div>
        <div
          style="display: flex; margin-top: 5px; justify-content: space-evenly"
        >
          <el-link type="_blank">收不到验证码</el-link>
        </div>
      </div>

      <br /><br /><br /><br /><br /><br />

      <div class="weui-form__opr-area" @click="confirm">
        <a
          role="button"
          class="weui-btn weui-btn_primary weui-btn"
          href="javascript:"
          id="showTooltips"
          >注册</a
        >
      </div>

      <div class="weui-form__extra-area">
        <div class="weui-footer">
          <p class="weui-footer__text">
            DesignByBiannian © 2022-2022 biannian.top
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import showToast from "../../../static/js/util/toastMessage";
import api from "../../api/api";

export default {
  name: "register",
  data() {
    return {
      userInfo: {
        email: "", //邮箱
        verification: "", //验证码
        account: "",
        password: "",
        password1: "",
      },
      buttonMsg: "获取验证码",
      trueVerification: "",
    };
  },
  methods: {
    confirm() {
      let message = "";
      if (this.userInfo.password1 != this.userInfo.password)
        message = "确认密码和密码不同";
      if (this.userInfo.account.length > 10 || this.userInfo.account.length < 5)
        message = "账户长度不能小于5大于10";
      if ("" == this.userInfo.password1) message = "确认密码不能为空";
      if ("" == this.userInfo.password) message = "密码不能为空";
      if ("" == this.userInfo.account) message = "登录账号不能为空";
      if ("" == this.userInfo.verification) message = "验证码不能为空";
      if ("" == this.userInfo.email) message = "邮箱不能为空";
      if (this.userInfo.verification != this.trueVerification)
        message = "验证码错误";
      showToast.warn(message, 1000);
      if (message != "") return;
      api.register(this.userInfo).then((res) => {
        if (res.data.code == "200") {
          showToast.warn(res.data.result, 1000);
           this.$router.push({name: 'myIndex'})
        } else {
          showToast.warn("注册失败！", 1000);
        }
      });
    },

    getVerification() {
      if ("" == this.userInfo.email) {
        showToast.warn("邮箱地址不能为空", 1000);
        return;
      }
      // let reg = /^[A-Za-zd]+([-_.][A-Za-zd]+)*@([A-Za-zd]+[-.])+[A-Za-zd]{2,5}$/;
      // if (!reg.test(this.userInfo.email)) {
      //   showToast.warn("邮箱格式错误", 1000);
      //   return;
      // }
      let params = {
        email: this.userInfo.email,
      };
      api.getVerification(params).then((res) => {
        if (res.data.code === 200) {
          this.trueVerification = res.data.result;
          this.buttonMsg = 60;
          $("#js_btn_vcode").attr("disabled", "disabled");
          var timer = setInterval(() => {
            this.buttonMsg = this.buttonMsg - 1;
            if (this.buttonMsg <= 0) {
              clearInterval(timer);
              this.buttonMsg = "获取验证码";
              $("#js_btn_vcode").removeAttr("disabled");
            }
          }, 1000);
        } else {
          showToast.warn(res.data.msg, 1000);
        }
      });
    },
  },
};
</script>


<style scoped>
</style>
