var addParam = function(url, param, value) {
  param = encodeURIComponent(param);
  var a = document.createElement('a');
  param += (value ? "=" + encodeURIComponent(value) : "");
  a.href = url;
  a.search += (a.search ? "&" : "") + param;
  return a.href;
}
