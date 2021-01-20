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
    '<a href="http://www.test1/">test1</a>';
  document.getElementById('result_html').innerHTML =
    '<a href="http://www.test2/">test2</a>';
}, false);

//6-16 text_get
document.addEventListener('DOMContentLoaded', function() {
  var list = document.getElementById('list');
  console.log(list.innerHTML);
  console.log(list.textContent);
}, false);

//6-17 text_ng
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('btn').addEventListener('click', function() {
    var name = document.getElementById('name');
    var resultg = document.getElementById('result');
    result.innerHTML = 'こんにちは、' + name.value + 'さん！';
  }, false);
}, false);


