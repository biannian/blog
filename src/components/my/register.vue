<template>
  <div>
    <div class="weui-form">
      <div class="weui-form__text-area">
        <h2 class="weui-form__title">注册</h2>
        <div class="weui-form__desc"> </div>
      </div>
      <div class="weui-form__control-area">
        <div class="weui-cells__group weui-cells__group_form">

          <div class="weui-cells">
            <label for="js_input1" class="weui-cell weui-cell_active">
              <div class="weui-cell__hd"><span class="weui-label">邮箱</span></div>
              <div class="weui-cell__bd">
                <input id="js_input1" class="weui-input" placeholder="请输入邮箱地址"/>
              </div>
            </label>
            <label for="js_input1" class="weui-cell weui-cell_active">
              <div class="weui-cell__hd"><span class="weui-label">验证码</span></div>
              <div class="weui-cell__bd weui-flex">

                <input  style="margin-top: 5%" id="js_input3" class="weui-input" placeholder="请输入验证码"/>
                <button style="width: 200px" id="js_btn_vcode" role="button" class="js_target weui-cell__control weui-btn weui-btn_default weui-vcode-btn">
                  {{buttonMsg}}</button>

              </div>
            </label>
            <label for="js_input1" class="weui-cell weui-cell_active">
              <div class="weui-cell__hd"><span class="weui-label">登陆账号</span></div>
              <div class="weui-cell__bd">
                <input id="js_input2" class="weui-input" placeholder="请输入登陆账号"/>
              </div>
            </label>
            <label for="js_input1" class="weui-cell weui-cell_active">
              <div class="weui-cell__hd"><span class="weui-label">登陆密码</span></div>
              <div class="weui-cell__bd">
                <input id="js_input4" class="weui-input" placeholder="请输入登陆密码"/>
              </div>
            </label>
            <label for="js_input1" class="weui-cell weui-cell_active">
              <div class="weui-cell__hd"><span class="weui-label">确认密码</span></div>
              <div class="weui-cell__bd">
                <input id="js_input5" class="weui-input" placeholder="请确认密码"/>
              </div>
            </label>
          </div>
        </div>
        <div style=" display: flex; margin-top: 5px; justify-content: space-evenly;">
          <el-link type="_blank">收不到验证码</el-link>
        </div>

      </div>

      <br/><br/><br/><br/><br/><br/>

      <div class="weui-form__opr-area">
        <a role="button" class="weui-btn weui-btn_primary weui-btn"
           href="javascript:" id="showTooltips">注册</a>
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
  export default {
    name: "register",
    data(){
      return{
        buttonMsg:'获取验证码',
      }
    }
  }
</script>


<style scoped>

</style>
