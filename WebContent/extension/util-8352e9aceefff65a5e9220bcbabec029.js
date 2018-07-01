function timestampToSimpleDateString(timestamp) {
  var isUnix = (timestamp / 10000000000) < 1 // 서버에서 주는 timestamp는 unix, 클라이언트에서 생성하는 timestamp와 다름
  var locale = window.navigator.userLanguage || window.navigator.language
  moment.locale(locale)
  if (locale.lastIndexOf('ko', 0) === 0 || locale.lastIndexOf('en', 0) === 0) {
    return isUnix ? moment.unix(timestamp).format('YYYY-MM-DD') : moment(timestamp).format('YYYY-MM-DD')
  }
  return isUnix ? moment.unix(timestamp).format('lll') : moment(timestamp).format('lll')
}


function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validateTel(tel) {
  var re = /^\d{2,3}-\d{3,4}-\d{4}$/;
  return re.test(tel);
}

function historyBack(url) {
  var link = document.createElement('a');
  link.setAttribute('href', url);
  if (document.referrer && document.referrer.indexOf(link.hostname) != -1) {
    var referrer = document.createElement('a');
    referrer.setAttribute('href', document.referrer);
    if (referrer.pathname == link.pathname) {
      history.back();
      return;
    }
  }
  location.href = url;
}