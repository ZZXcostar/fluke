//判断是否在微信中
function isWechat() {
  var ua = window.navigator.userAgent.toLowerCase();
  if (ua.match(/micromessenger/i) == "micromessenger") {
    return true;
  } else {
    return false;
  }
}
// 判断安卓
function isAndroid() {
  var u = navigator.userAgent;
  if (u.indexOf("Android") > -1 || u.indexOf("Linux") > -1) {
    if (window.ShowFitness !== undefined) return true;
  }
  return false;
}
// 判断 ios
function isIos() {
  var u = navigator.userAgent;
  if (u.indexOf("iPhone") > -1 || u.indexOf("iOS") > -1) {
    return true;
  }
  return false;
}