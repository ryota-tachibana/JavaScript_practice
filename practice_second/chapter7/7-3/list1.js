// 7-16 strage
var storage = localStorage;

storage.setItem('fruit1', 'みかん');
storage.fruit2 = 'いちご';
storage['fruit3'] = 'ぶどう';

console.log(storage.getItem('fruit1'));
console.log(storage.fruit2);
console.log(storage['fruit3']);

// 7-17 strage_all
var storage = localStorage;

for (var i = 0, len = storage.length; i < len; i++) {
  var k = storage.key(i);
  var v = storage[k];
  console.log(k + '：' + v);
}

// 7-18 strage_obj
var storage = localStorage;
var apple = { name: 'りんご', price: 150, made: '青森' };

storage.setItem('apple', JSON.stringify(apple));

var data = JSON.parse(storage.getItem('apple'));
console.log(data.name);

// 7-19 MySstrage
var MyStorage = function(app) {
  this.app = app;
  this.storage = localStorage;
  this.data = JSON.parse(this.storage[this.app] || '{}');
};

MyStorage.prototype = {
  getItem: function(key) {
    return this.data[key];
  },

  setItem: function(key, value) {
    this.data[key] = value;
  },

  save: function() {
    this.storage[this.app] = JSON.stringify(this.data);
  }
};

// 7-20 strage_call
var storage = new MyStorage('JSSample');

storage.setItem('hoge', 'ほげ');
console.log(storage.getItem('hoge'));
storage.save();

// 7-21 strage_ev
window.addEventListener('storage', function (e) {
  
  console.log('変更されたキー：' + e.key);
  console.log('変更前の値：' + e.oldValue);
  console.log('変更後の値：' + e.newValue);
  console.log('発生元ページ：' + e.url);
}, false);



