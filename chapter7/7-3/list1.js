// 7-16 strage
var storage = localStorage;
storage.setItem('fruit1', 'りんご');
storage.fruit2 = 'みかん';
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