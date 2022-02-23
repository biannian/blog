const dialog = {
  /**
   * 带按钮的 提示框
   * @param title 标题
   * @param message 提示信息
   * @param cancelName 取消按钮的名字
   * @param confirmName 确认的按钮的名字
   */
  showConfirm(title,message,cancelName,confirmName,cancelFunc,confirmFunc,_this){
    $("#iosDialog").show();
    $("#js_title1").text(title);
    $("#dialogMessage").text(message);
    $("#cancel").text(cancelName);
    $("#confirm").text(confirmName);
    $("#cancel").click(function(){
      eval(cancelFunc);
      $("#iosDialog").hide();
    });
    $("#confirm").click(function(){
      eval(confirmFunc);
      $("#iosDialog").hide();
    });
  }
}
export default dialog;
