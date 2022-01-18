<template>
  <div class="page">
    <div class="page__bd" style="height: 100%;">
      <div class="weui-tab">
        <div id="panel1" role="tabpanel" aria-labelledby="tab1" class="weui-tab__panel">
          <some-bolgs></some-bolgs>
          <div style="height: 62.79px"></div>
        </div>
        <div id="panel2" role="tabpanel" aria-labelledby="tab2" class="weui-tab__panel" style="display: none;">
          <message-index></message-index>
          <div style="height: 62.79px"></div>
        </div>
        <div id="panel3" role="tabpanel" aria-labelledby="tab3" class="weui-tab__panel" style="display: none;">
          <my-index></my-index>
          <div style="height: 62.79px"></div>
        </div>
        <div role="tablist" aria-label="选项卡标题" class="weui-tabbar" style=" position: fixed; bottom: 0; width: 100%;">
          <div id="tab1" role="tab" aria-labelledby="t1_title" aria-describedby="t1_tips" aria-selected="true"
               aria-controls="panel1" class="weui-tabbar__item weui-bar__item_on">
            <div id="t1_tips" aria-hidden="true" style="display: inline-block; position: relative;">

              <img src="../../static/images/index.png" alt="" class="weui-tabbar__icon">
              <!--              <span class="weui-badge" style="position: absolute; top: -2px; right: -13px;">8</span>-->
            </div>
            <p id="t1_title" aria-hidden="true" class="weui-tabbar__label">微博</p>
          </div>
          <div id="tab2" role="tab" aria-labelledby="t2_title" aria-selected="false" aria-controls="panel2"
               class="weui-tabbar__item">
            <img alt="" class="weui-tabbar__icon">
            <p aria-hidden="true" id="t2_title" class="weui-tabbar__label">消息</p>
          </div>
          <div id="tab3" role="tab" aria-labelledby="t3_title" aria-describedby="t3_tips" aria-selected="false"
               aria-controls="panel3" class="weui-tabbar__item">
            <div id="t3_tips" aria-hidden="true" style="display: inline-block; position: relative;">
              <img alt="" class="weui-tabbar__icon">
              <!--              <span class="weui-badge weui-badge_dot" role="img" alt="new" style="position: absolute; top: 0; right: -6px;"></span>-->
            </div>
            <p id="t3_title" aria-hidden="true" class="weui-tabbar__label">我</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import MessageIndex from "./message/messageIndex";
  function init(){
    $(function(){
      $('.weui-tabbar__item').on('click', function () {
        $(this).attr('aria-selected','true').addClass('weui-bar__item_on');
        $(this).siblings('.weui-bar__item_on').removeClass('weui-bar__item_on').attr('aria-selected','false');
        var panelId = '#' + $(this).attr('aria-controls');
        $(panelId).css('display','block');
        $(panelId).siblings('.weui-tab__panel').css('display','none');
      });
    });
  }
  import myIndex from './my/myIndex.vue'
  import SomeBolgs from "./index/blogIndex";
  export default {
    components: {MessageIndex, SomeBolgs, myIndex},
    name: 'index',
    data() {
      return {}
    },
    mounted() {
      init();
    }
  }
</script>

<style scoped>

</style>
