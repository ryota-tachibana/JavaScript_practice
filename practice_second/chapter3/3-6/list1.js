//3-49 obj_tostring
var obj = new Object();

console.log(obj.toString());
console.log(obj.valueOf());

var dat = new Date();

console.log(dat.toString());
console.log(dat.valueOf());

var ary = ['JavaScript', 'jQuery', 'rails'];

console.log(ary.toString());
console.log(ary.valueOf());

var num = 10;

console.log(num.toString());
console.log(num.valueOf());

var reg = /[0-9]{3}-[0-9]{4}/g;

console.log(reg.toString());
console.log(reg.valueOf());

//3-50 obj_assign
let pet = {
  type: 'ハムスター', 
  name: '太郎', 
  description: {
  	birth: '2011-4-13'
  }
};

let pet2 = {
  name: '二郎',
  color: 'しろ',
  description: {
  	food: 'たね'
  }
};

let pet3 = {
  weight: 300,
  photo: 'http://aiueo.com'
};

Object.assign(pet, pet2, pet3);
console.log(pet);

//3-51 obj
var obj = { x:1, y:2, z:3 };

var obj2 = new Object();

obj2.x = 1;
obj2.y = 2;
obj2.z = 3;

var obj3 = Object.create(Object.prototype, {
  x: { value: 1, writable: true, configurable: true, enumerable: true},
  y: { value: 2, writable: true, configurable: true, enumerable: true},
  z: { value: 3, writable: true, configurable: true, enumerable: true}
  }
);

console.log(obj3);

//3-52 freeze
'use strict';
var pet5 = { type:'かめ', name: '五郎', };
pet5.name = 'ごろう'
delete pet.type;
pet5.weight = 50;
console.log(pet5);
