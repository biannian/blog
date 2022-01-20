<template>
  <div>
    <div class="weui-form">
      <div class="weui-form__text-area">
        <h2 class="weui-form__title">欢迎登陆</h2>
        <div class="weui-form__desc"></div>
      </div>
      <div class="weui-form__control-area">
        <div class="weui-cells__group weui-cells__group_form">

          <div class="weui-cells">
            <label for="js_input1" class="weui-cell weui-cell_active">
              <div class="weui-cell__hd"><span class="weui-label">账户</span></div>
              <div class="weui-cell__bd">
                <input id="js_input1" class="weui-input" v-model="account" placeholder="请输入账户名"/>
              </div>
            </label>
            <label for="js_input2" class="weui-cell weui-cell_active">
              <div class="weui-cell__hd"><span class="weui-label">密码</span></div>
              <div class="weui-cell__bd">
                <input id="js_input2" type="password" class="weui-input" v-model="password" placeholder="请输入密码"/>
              </div>
            </label>
            <label for="js_input2" class="weui-cell weui-cell_active">
              <div class="weui-cell__hd"><span class="weui-label">验证码</span></div>
              <div class="weui-cell__bd weui-flex">

                <input id="js_input3" class="weui-input" v-model="yanzhengma" placeholder="请输入验证码"/>
                <img @click="initVerify" id="yanzhengma" style="width: 100px; height: 24px"/>
              </div>
            </label>

          </div>
        </div>
        <div style=" display: flex; margin-top: 5px; justify-content: space-evenly;">
          <el-link type="_blank">忘记密码</el-link>
          <el-link type="_blank" @click="toRegister">注册账号</el-link>
        </div>

      </div>

      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

      <div class="weui-form__opr-area">
        <a role="button" class="weui-btn weui-btn_primary weui-btn" @click="login"
           href="javascript:" id="showTooltips">登录</a>
      </div>
      <div role="alert" id="js_toast" style="display: none;">
        <div class="weui-mask_transparent"></div>
        <div class="weui-toast">
          <i class="weui-icon-success-no-circle weui-icon_toast"></i>
          <p class="weui-toast__content">登录成功</p>
        </div>
      </div>
      <div class="weui-form__extra-area">
        <div class="weui-footer">
          <p class="weui-footer__text">DesignByBiannian © 2022-2022 biannian.top</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import api from "../../api/api";
  import {Message} from 'element-ui';

  export default {
    name: "login",
    data() {
      return {
        account: "",
        password: "",
        yanzhengma: "",
        verifycode: '',
      }
    },
    mounted() {
      this.initVerify();
    },
    methods: {
      initVerify() {
        api.verifyCode()
          .then((res) => {
            this.verifycode = res.headers["verifycode"];
            let blob = new Blob([res.data], {type: "image/png"});
            document.getElementById("yanzhengma").src = window.URL.createObjectURL(blob);
          })
      },
      login() {
        if (this.account == "") {
          Message.warning("请输入账户");
          return;
        }
        if (this.password == "") {
          Message.warning("请输入密码");
          return;
        }
        if (this.yanzhengma == "") {
          Message.warning("请输入验证码");
          return;
        }
        if (this.verifycode.toLowerCase() != this.yanzhengma.toLowerCase()) {
          Message.error("验证码错误");
          this.yanzhengma = "";
          this.initVerify();
          return;
        }
        let param = {
          account: this.account,
          password: this.password,
          yanzhengma: this.yanzhengma,
        }
        api.login(param)
          .then((res) => {
            if (res.data.code === -1) {
              Message.error("账户或者密码错误");
              this.yanzhengma = "";
              this.initVerify();
              return;
            }
            sessionStorage["userId"] = res.data.result;
            $("#js_toast").show();
            setTimeout(()=>{
              $("#js_toast").hide();
              this.$router.push({name: 'index'})
            },1000)

          })
      },
      toRegister() {
        this.$router.push({name: 'register'})
      },
    }
  }
</script>

<style scoped>

</style>
