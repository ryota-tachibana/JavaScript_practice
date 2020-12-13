//6-33 live
document.addEventListener('DOMContentLoaded', function() {
  
  var li = document.getElementsByTagName('li');
  console.log('変更前：' + li.length);
  
  var ul = document.getElementById('list');
  ul.appendChild(document.createElement('li'));
  console.log('変更後：' + li.length);
}, false);

//6-34 live_ng
document.addEventListener('DOMContentLoaded', function() {
  
  var second = document.getElementById('second');
  var li1 = document.getElementsByTagName('li');
  
  for(var i = 0 ,len = li1.length; i < len; i++) {
    var item = li1.item(i);
    var new_li = document.createElement('li');
    var new_text = document.createTextNode(item.textContent);
    new_li.appendChild(new_text);
    second.appendChild(new_li);
  }
}, false);