// 2-11 template
let name = '鈴木';
let str = `こんにちは、${name}さん。
今日も良い天気ですね！`;
console.log(str);
// 2-12 array
var data = ['JavaScript', 'Ajax', 'ASP.NET'];
console.log(data[0]);
// 2-13 array2
var data1 = ['JavaScript', ['jQuery', 'prototype.js'], 'ASP.NET'];
console.log(data1[1][0]);
// 2-14 object
var obj = { x:1, y:2, z:3 };
console.log(obj.x);
console.log(obj['x']);
// 2-15 undefined
var x;
var obj1 = { a:12345 };
console.log(x);
console.log(obj1.b);