//6-46 event_cancel
document.addEventListener('DOMContentloaded', function() {
  document.getElementById('inner').addEventListener('click', function(e) {
  	window.alert('innerクリック');
  	e.stopPropagation();
  }, false);
  document.getElementById('inner').addEventListener('click', function(e) {
  	window.alert('innerクリック2');
  }, false);
  document.getElementById('outer').addEventListener('click', function(e) {
  	window.alert('outerクリック');
  }, false);
}, false);

//6-47 event_cancel
document.addEventListener('DOMContentloaded', function() {
  document.getElementById('inner1').addEventListener('click', function(e) {
  	window.alert('innerクリック3');
  	e.stopImmediatePropagation();
  }, false);
  document.getElementById('inner1').addEventListener('click', function(e) {
  	window.alert('innerクリック3');
  }, false);
  document.getElementById('outer1').addEventListener('click', function(e) {
  	window.alert('outerクリック3');
  }, false);
}, false);

//6-48 event_cancel
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('inner2').addEventListener('click', function(e) {
    window.alert('innerクリック4');
    e.stopPropagation();
  }, false);
  document.getElementById('inner2').addEventListener('click', function(e) {
    window.alert('innerクリック4');
  }, false);
  document.getElementById('outer2').addEventListener('click', function(e) {
    window.alert('outerクリック4');
  }, false);
}, false);

//6-49 this_bind
document.addEventListener('DOMContentLoaded', function() {
  var data = {
    title: 'A',
    price: 2680,
    show: function() {
      console.log(this.title + '／' + this.price + '円');
    }
  };
document.getElementById('btn').addEventListener(
    'click', data.show.bind(data), false);
}, false);

//6-50 this_listener
document.addEventListener('DOMContentLoaded', function() {
  var data1 = {
    title: 'B',
    price: 2680,
    handleEvent: function() {
      console.log(this.title + '／' + this.price + '円');
    }
  };
  document.getElementById('btn1').addEventListener(
    'click', data1, false);
}, false);

//6-51 this_arraw
document.addEventListener('DOMContentLoaded', function() {
  var Counter = function(elem) {
    this.count = 0;
    this.elem = elem;
      elem.addEventListener('click', () => {
      this.count++;
      this.show();
      }, false);
  };
  Counter.prototype.show = function() {
    console.log(this.elem.id + 'は' + this.count + '回クリックされました。');
  }
  var c = new Counter(document.getElementById('btn2'));
}, false);

