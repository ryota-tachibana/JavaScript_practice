//3-37 match
var p = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/gi;

var str = 'サポートサイトはhttp://www.aです。';

str += 'サンプル紹介サイトHTTP://www..coam/もあります';
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

var str = 'http://www.abc/です。'
str += 'HTTP://www.1234/もある。'

var result = p.exec(str);

for (var i = 0, len = result.length; i < len; i++) {
  console.log(result[i]);
}

//3-44 exec2
var p = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- ./?%&=]*)?/gi;
var str = 'http://www.abc/です。'
str += 'HTTP://www.123.com/もある。'
while((result = p.exec(str)) !== null) {
  console.log(result[0]);
}

//3-45 test
var p = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%=]*)?/gi;
var str3 = 'http://www.abcd/です。'
var str4 = '他にもサイトはある。'

console.log(p.test(str3));
console.log(p.test(str4));

//3-46 search
var p = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%=]*)?/gi;
var str5 = 'http://www.abcd/です。'
var str6 = '他にもサイトはある。'

console.log(str5.search(p));
console.log(str6.search(p));

//3-47 replace
var p = /(http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?)/gi;

var str = 'サイトはhttp://www.abcd/です。';

document.write(str.replace(p, '<a href="$1">$1</a>'));

//3-48 split
var p = /[\/\.\-]/gi;

console.log('2016/12/04'.split(p));
console.log('2016-12-04'.split(p));
console.log('2016.12.04'.split(p));
