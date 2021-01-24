//6-40 handler_remove
window.onload = function() {
  var btn = document.getElementById('btn');
  btn.onclick = function() {
    window.alert('こんにちは');
  };
  btn.onclick = null;
};

// 6-41 listener_remove
document.addEventListener('DOMContentLoaded', function() {
  var btn1 = document.getElementById('btn1');
  var listener = function() {
    window.alert('こんばんは');
  };
  btn1.addEventListener('click', listener, false);
  btn1.removeEventListener('click', listener, false);
}, false);

//6-42 event
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('btn2').addEventListener('click', function(e) {
    var target = e.target;
    console.log(target.nodeName+target.id);
    console.log(e.type);
  }, false);
}, false);

//6-43 event_xy
document.addEventListener('DOMContentLoaded', function() {
  var main = document.getElementById('main');
  main.addEventListener('mousemove', function(e) {
    main.innerHTML = 'screen' + e.screenX + '/' + e.screenY + '<br />'
      + 'page' + e.pageX + '/' + e.pageY + '<br />'
      + 'client' + e.clientX + '/' + e.clientY + '<br />'
      + 'offset' + e.offsetX + '/' + e.offsetY + '<br />';
  }, false);
}, false);

//6-44 event_key
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('key').addEventListener('keydown', function(e) {
    console.log(e.keyCode);
  }, false);
}, false);
//6-45 propagation
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('inner').addEventListener('click', function(e) {
    window.alert('innerクリックされました');
  }, false);
  document.getElementById('inner').addEventListener('click', function(e) {
    window.alert('innerクリックされました2');
  }, false);
  document.getElementById('outer').addEventListener('click', function(e) {
    window.alert('outerクリックされました')
  }, false);
}, false);


