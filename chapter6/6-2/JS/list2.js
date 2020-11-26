//HTML,XMLでの文書を操作する　
//6-7 child_nodes
var s = document.getElementById('food');
var opts = s.childNodes;
for (var i = 0, len = opts.length; i < len; i++) {
  var opt = opts.item(i);
  if (opt.nodeType === 1) {
    console.log(opt.value);
  }
}

//6-8 first_child
var s = document.getElementById('food');
var child = s.firstChild;
while (child) {
  if (child.nodeType === 1) {
    console.log(child.value);
  }
  child = child.nextSibling;
}

//6-9 first_child_element
var s = document.getElementById('food');
var child = s.firstElementChild;
while (child) {
  console.log(child.value);
  child = child.nextElementSibling;
}

//6-10 handle
function btn_click() {
  window.alert('ボタンがクリックされました。');
}




