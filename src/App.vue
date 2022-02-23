<template>
  <div id="app">
    <transition :name="SkipSwitchName">
      <router-view/>
    </transition>
    <div role="alert" id="js_toast" style="display: none;">
      <div class="weui-mask_transparent"></div>
      <div class="weui-toast">
        <i class="weui-icon-success-no-circle weui-icon_toast"></i>
        <p class="weui-toast__content" id="js_toastInfo"></p>
      </div>
    </div>
    <!--BEGIN toast-->
    <div role="alert" id="warnToast" style="display: none;">
      <div class="weui-mask_transparent"></div>
      <div class="weui-toast">
        <i class="weui-icon-warn weui-icon_toast"></i>
        <p class="weui-toast__content" id="warnToastInfo"></p>
      </div>
    </div>
    <div class="js_dialog" role="dialog"  aria-hidden="true" aria-modal="true" aria-labelledby="js_title1" id="iosDialog" style="display: none;">
      <div class="weui-mask"></div>
      <div class="weui-dialog">
        <div class="weui-dialog__hd"><strong class="weui-dialog__title" id="js_title1"></strong></div>
        <div class="weui-dialog__bd" id="dialogMessage"></div>
        <div class="weui-dialog__ft">
          <a role="button" href="javascript:" class="weui-dialog__btn weui-dialog__btn_default" id="cancel" ></a>
          <a role="button" href="javascript:" class="weui-dialog__btn weui-dialog__btn_primary" id="confirm"></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        SkipSwitchName: '',
        toastMessage:'',
      }
    },
    methods:{
    },
    watch: {
      $route(to, from) {
        if (to.meta.tx > from.meta.tx) {
          this.SkipSwitchName= "Skright";
        } else {
          this.SkipSwitchName= "Skleft";
        }
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  .Skright-enter-active,
  .Skright-leave-active,
  .Skleft-enter-active,
  .Sklef-leave-active {
    transition: all 600ms;
  }

  .Skright-enter {
    transform: translate3d(-100%, 0, 0);
  }

  .Skright-leave-to {
    transform: translate3d(100%, 0, 0);
  }

  .Skleft-enter {
    transform: translate3d(100%, 0, 0);
  }

  .Skleft-leave-to {
    transform: translate3d(-100%, 0, 0);
  }

</style>
