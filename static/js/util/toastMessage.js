const showToast = {
  success(message, time, func,_this) {
    if (time === undefined)time=1000;
    $("#js_toastInfo").text(message);
    $("#js_toast").show();
    setTimeout(() => {
      $("#js_toast").hide();
      $("#js_toastInfo").text('');
      eval(func);
    }, time);
  },
  warn(message, time, func,_this) {
    if (time === undefined)time=1000;
    $("#warnToastInfo").text(message);
    $("#warnToast").show();
    setTimeout(() => {
      $("#warnToast").hide();
      $("#warnToastInfo").text('');
      eval(func);
    }, time);
  }
}
export default showToast;


