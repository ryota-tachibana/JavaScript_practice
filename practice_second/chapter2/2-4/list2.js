// 2-25 dest_obj3
let book = { title: 'A', publish: 'B' };
let { title: name, publish: company } = book;

console.log(name);
console.log(company);

// 2-26 equal_ref
var data1 = ['1', '2', '3'];
var data2 = ['S', 'F', 'P'];
console.log(data1 == data2);

// 2-27 not_strict
console.log('3.14E2' == 314);
console.log('0x10' == 16);
console.log('1' == 1);

// 2-28 strict
console.log('3.14E2' === 314);
console.log('0x10' === 16);
console.log('1' === 1);

// 2-29 condition
var x = 80;
console.log((x >= 70) ? '合格' : '不合格');

// 2-30 logical
var x = 1;
var y = 2;

console.log(x === 1 && y === 1);
console.log(x === 1 || y === 1);

// 2-31 logical2
var x = 1;

if (x === 1) { console.log('こんにちは'); }
x ===1 && console.log('こんにちは');

// 2-32 shortcut
var msg = '';
msg = msg || '世界！';
console.log(msg);

// 2-33 delete
var ary = ['J', 'A', 'S'];
console.log(delete ary[0]);
console.log(ary);

var obj = {x:1, y:2};
console.log(delete obj.x);
console.log(obj.x);

var obj2 = {x:obj, y:2};
console.log(delete obj2.x);
console.log(obj);

var data1 = 1;
console.log(delete data1);
console.log(data1);

data2 = 10;
console.log(delete data2);
console.log(data2);

// 2-34 typeof
var num = 1;
console.log(typeof num);

var str = 'こんにちは' ;
console.log(typeof str);

var flag = true;
console.log(typeof flag);

var ary = ['JavaScript', 'Ajax', 'NET'];
console.log(typeof ary);

var obj = {x:1, y:2};
console.log(typeof obj);




