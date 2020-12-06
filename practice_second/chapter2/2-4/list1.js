// 2-16 plus
console.log(10 + 1);
console.log('10'+ 1);
var today = new Date();
console.log(1234 + today);

// 2-17 increment
var x = 3;
var y = x++;
console.log(x);
console.log(y);

var x = 3;
var y = ++x;
console.log(x);
console.log(y);

// 2-18 float
console.log(0.2 * 3);
console.log(0.2 * 3 === 0.6);

console.log(((0.2 * 10) * 3) / 10);
console.log((0.2 * 10) * 3 === 0.6 * 10);

// 2-19 equal
var x = 1;
var y = x;
x = 2;
console.log(y);
var data1 = [0, 1, 2];
var data2 = data1;
data1[0] = 5;
console.log(data2);

// 2-20 dest
let data = [56, 40, 26, 82, 19, 17, 73, 99];
let [x0, x1, x2, x3, x4, x5, x6, x7] = data

console.log(x0);
console.log(x1);
console.log(x2);
console.log(x3);
console.log(x4);
console.log(x5);
console.log(x6);
console.log(x7);

// 2-21 dest_let
let data3 = [56, 40, 26, 82, 19, 17, 73, 99];
let [xa, xb, xc, ...other] = data3

console.log(xa);
console.log(xb);
console.log(xc);
console.log(other);

// 2-22 dest_replace
let xx = 1;
let yy = 2;
[x, y] = [y, x]

console.log(x, y);

// 2-23 dest_obj
let book = { title: 'a ', publish: 'b', price: 200 };
let { price, title, memo = 'なし' } = book;

console.log(title);
console.log(price);
console.log(memo);

// 2-24 dest_obj2
let book1 = { title1: 'A ', publish: 'B', price: 300,
  other1: { keywd: 'Java', logo: 'logo' } };
let { title1, other1, other1: { keywd } } = book1;

console.log(title1);
console.log(other1);
console.log(keywd);

