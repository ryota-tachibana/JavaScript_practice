//属性値やテキストを取得する
//6-14 attributes
document.addEventListener('DOMContentLoaded', function() {
  var logo = document.getElementById('logo');
  var attrs = logo.attributes;
  for (var i = 0, len = attrs.length; i < len; i++) {
    var attr = attrs.item(i);
    console.log(attr.name + ':' + attr.value);
  }
}, false);

//6-15 text
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('result_text').textContent =
    '<a href="http://www.a.mssswn.tsq/">A</a>';
  document.getElementById('result_html').innerHTML =
    '<a href="http://www.wus.itop/">B</a>';
}, false);

//6-16 text_get
document.addEventListener('DOMContentLoaded', function() {
  var list = document.getElementById('list');
  console.log(list.innerHTML);
  console.log(list.textContent);
}, false);