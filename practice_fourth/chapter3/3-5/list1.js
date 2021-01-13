//3-37 match
var p = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/gi;
var str = 'サポートサイトはhttp:testです。';
str += 'サンプル紹介サイトHTTP://test.com/も';
var result = str.match(p);
for (var i = 0, len = result.length; i < len; i++) {
  console.log(result[i]);
}

//3-40 match_multi
var p = /^[0-9]{1,}/g;
var str = '101匹のワンちゃん。\n7人の小人'
var result = str.match(p);

for (var i = 0, len = result.length; i < len; i++) {
  console.log(result[i]);
}

//3-41 match_multi
var p = /^[0-9]{1,}/gm;
var str = '101匹のワンちゃん。\n7人の小人'
var result = str.match(p);

for (var i = 0, len = result.length; i < len; i++) {
  console.log(result[i]);
}

//3-42 match_unicode
let str1 = '叱ります';

console.log(str1.match(/^.ります$/gu));

//3-43 exec
var p = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- ./?%&=]*)?/gi;
var str = 'http://testです。'
str += 'HTTP://www.testもある。'
var result = p.exec(str);

for (var i = 0, len = result.length; i < len; i++) {
  console.log(result[i]);
}

//3-44 exec2
var p = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- ./?%&=]*)?/gi;
var str = 'http://test2です。'
str += 'HTTP://www.test2もある。'

while((result = p.exec(str)) !== null) {
  console.log(result[0]);
}

//3-45 test
var p = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%=]*)?/gi;
var str3 = 'http://test3です。'
var str4 = '他サイトあり'

console.log(p.test(str3));
console.log(p.test(str4));

//3-46 search
var p = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%=]*)?/gi;
var str5 = 'http://testです。'
var str6 = '他サイトあり'

console.log(str5.search(p));
console.log(str6.search(p));

//3-47 replace
var p = /(http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?)/gi;

var str = 'サイトはhttp://testです。';

document.write(str.replace(p, '<a href="$1">$1</a>'));

//3-48 split
var p = /[\/\.\-]/gi;

console.log('2019/02/14'.split(p));
console.log('2019/02/14'.split(p));
console.log('2019/02/14'.split(p));
