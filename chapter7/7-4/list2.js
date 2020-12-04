//7-26 bm
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('btn').addEventListener('click', function() {
    var result = document.getElementById('result');
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          var data = JSON.parse(xhr.responseText);
          if (data === null) {
            result.textContent = 'ブックマークは存在しませんでした。';
          } else {
            var bms = data.bookmarks;
            var ul = document.createElement('ul');
            for (var i = 0; i < bms.length; i++) { 
              var li = document.createElement('li');
              var anchor = document.createElement('a');
              anchor.href = 'http://test' + bms[i].user
              var text = document.createTextNode(bms[i].user + ' ' + bms[i].comment);
              anchor.appendChild(text);
              li.appendChild(anchor);
              ul.appendChild(li);
            }
              result.replaceChild(ul, result.firstChild);
          }
        } else {
          result.textContent = 'サーバーエラーが発生しました。';
        }
      } else {
        result.textContent = '通信中...';
      }
    };

    xhr.open('GET', 'bm.php?url=' +
      encodeURIComponent(document.getElementById('url').value), true);
    xhr.send(null);
  }, false);
}, false);
//7-27 json
document.getElementById('btn').addEventListener('click', function() {
  var url = 'http://test='
    + encodeURIComponent(document.getElementById('url').value);
  var scr = document.createElement('script');
  scr.src = url;
  document.getElementsByTagName('body').item(0).appendChild(scr);
}, false);
function show(data) {
  if (data === null) {
    result.textContent = 'ブックマークは存在しませんでした。';
  } else {
    var bms = data.bookmarks;
    var ul = document.createElement('ul');
    for (var i = 0; i < bms.length; i++) { 
      var li = document.createElement('li');
      var anchor = document.createElement('a');
      anchor.href = 'http://test.ne.jp/' + bms[i].user
      var text = document.createTextNode(bms[i].user + ' ' + bms[i].comment);
      anchor.appendChild(text);
      li.appendChild(anchor);
      ul.appendChild(li);
    }
    result.appendChild(ul);
  }
} 
//7-28 cross_main
document.addEventListener('DOMContentLoaded', function() {
  var target = 'http://www.test';
  document.getElementById('btn').addEventListener('click', function() {
    document.getElementById('frame').contentWindow.postMessage(
      document.getElementById('message').value, target);
  }, false);
  window.addEventListener('message', function(e) {
    if (e.origin !== target) { return; }
    console.log(e.data);
  }, false);
}, false);
//7-29 cross_other
document.addEventListener('DOMContentLoaded', function() {
  window.addEventListener('message', function(e) {
    var origin = 'http://localhost';
    if (e.origin !== origin) { return; }
    document.getElementById('result1').textContent = e.data;
    var current = new Date();
    e.source.postMessage(current, origin);
  }, false);
}, false);