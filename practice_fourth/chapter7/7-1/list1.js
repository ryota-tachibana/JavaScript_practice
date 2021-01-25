// 7-1 confirm
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('fm').addEventListener('submit', function(e) {
  	if (!window.confirm('送信しますか？')) {
  		e.preventDefault();
  	}
  }, false);
}, false);

// 7-2 interval
document.addEventListener('DOMContentLoaded', function() {
  var timer = window.setInterval(
    function() {
      var dat = new Date();
      document.getElementById('result').textContent = dat.toLocaleTimeString();
    }, 5000);
  document.getElementById('btn').addEventListener('click', function() {
    window.clearInterval(timer);
  }, false);
}, false);

//7-3 interval_async
function hoge() {
  console.log('あいうえお');
  setTimeout(function() {
    console.log('かきくけこ');
  }, 0);
  console.log('さしすせそ');
}

hoge();

//7-4 href
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('isbn').addEventListener('change', function() {
  	location.href = 'http://www.test' + this.value;
  }, false);
}, false);

//7-6 history_push
var count = 0;
var result = document.getElementById('result1');
document.getElementById('btn1').addEventListener('click', function() {
  result.textContent = ++count;
  history.pushState(count, null, '/chapter7/7-1/list1.html' + count);
});

window.addEventListener('popstate', function(e) {
  count = e.state;
  result.textContent = count;
});

//7-7 navigator
var agent = window.navigator.userAgent.toLowerCase();
var version = window.navigator.appVersion.toLowerCase();
var msie = (agent.indexOf('msie') > -1) && (agent.indexOf('opr') === -1);
var ie9 = msie && (version.indexOf('msie 9.') > -1);
console.log('Internet Explorer9：' + ie9);

var ie10 = msie && (version.indexOf('msie 10.') > -1);
console.log('Internet Explorer10：' + ie10);

var ie11 = (agent.indexOf('trident/7') > -1);
console.log('Internet Explorer11：' + ie11);

var edge = (agent.indexOf('edge') > -1);
console.log('Edge：' + edge);

var chrome = (agent.indexOf('chrome') > -1) && (agent.indexOf('edge') === -1)  && (agent.indexOf('opr') === -1);
console.log('Chrome：' + chrome);

var firefox = (agent.indexOf('firefox') > -1);
console.log('Firefox：' + firefox);

var opera = (agent.indexOf('opr') > -1); 
console.log('Opera：' + opera);

var safari = (agent.indexOf('safari') > -1) && (agent.indexOf('chrome') === -1); 
console.log('Safari：' + safari);



