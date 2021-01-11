// 2-47 while
var x = 3;

while(x < 10) {
  console.log('xの値は' + x);
  x++;
}

// 2-48 do
var x = 4;

do {
  console.log('xの値は' + x);
  x++;
} while(x < 10);

// 2-49 for
for (var x = 8; x < 10; x++) {
  console.log('xの値は' + x);
}

// 2-50 comma
for (var i = 1, j = 1; i < 5; i++, j++) {
  console.log('i * jは'+ i * j);
}

// 2-51 forin
var data = { apple:300, orange:100, banana: 200 };

for (var key in data) {
  console.log(key + '=' + data[key]);
}

// 2-52 forin_array
var data = [ 'apple', 'orange', 'banana' ];

for (var key in data) {
  console.log(data[key]);
}

// 2-53 forin_array_ng
var data = [ 'apple', 'orange', 'banana' ];

Array.prototype.hoge = function () {}

for (var key in data) {
  console.log(data[key]);
}

// 2-54 forin_array_ok
var data = [ 'apple', 'orange', 'banana' ];

for (var i = 0, len = data.length; i < len; i++) {
  console.log(data[i]);
}

// 2-55 forin_array_ok
var data = [ 'apple', 'orange', 'banana' ];

Array.prototype.hoge = function () {}

for (var value of data) {
  console.log(value);
}

// 2-56 forof
var result = 0;

for (var i = 1; i <= 100; i++) {
  result += i;
  if (result > 1000) { break; }
}

console.log('合計値が1000を超えるのは' + i);

// 2-57 continue
var result = 0;

for (var i = 1; i < 100; i++) {
  if (i % 2 === 0) { continue; }
  result += i;
}

console.log('合計：' + result);

// 2-58 label_no
for (var i = 1; i < 10; i++) {
  for (var j = 1; j < 10; j++) {
    var k = i * j
    if (k > 30) { break; }
    document.write(k + '&nbsp');
  }
  document.write('<br />');
}

// 2-59 label
kuku :

for (var i = 1; i < 10; i++) {
  for (var j = 1; j < 10; j++) {
    var k = i * j
    if (k > 30) { break kuku; }
    document.write(k + '&nbsp');
  }
  document.write('<br />');
}

// 2-60 try
var i = 1;

try{
  i = i * j;
} catch(e) {
  console.log(e.message);
} finally {
  console.log('処理は完了しました。');
}

// 2-61 throw
var x = 1;
var y = 0;

try{
  if (y === 0) { throw new Error('0で除算しようとしました。'); }
  var z = x / y;
} catch(e) {
  console.log(e.message);
}





