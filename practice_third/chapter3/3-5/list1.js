//3-37 match
var p = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/gi;
var str = 'サポートサイトはhttp://a/です。';
str += 'サンプル紹介サイトHTTP://b.com/もよろしく！';
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
var str = 'http://です。'
str += 'HTTP://www.1もある。'
var result = p.exec(str);

for (var i = 0, len = result.length; i < len; i++) {
  console.log(result[i]);
}

//3-44 exec2
var p = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- ./?%&=]*)?/gi;
var str = 'http://123です。'
str += 'HTTP://www.abcもある。'

while((result = p.exec(str)) !== null) {
  console.log(result[0]);
}

//3-45 test
var p = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%=]*)?/gi;
var str3 = 'http://abcd/です。'
var str4 = '他サイト'

console.log(p.test(str3));
console.log(p.test(str4));

//3-46 search
var p = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%=]*)?/gi;
var str5 = 'http://abcdです。'
var str6 = '他サイト'

console.log(str5.search(p));
console.log(str6.search(p));

//3-47 replace
var p = /(http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?)/gi;

var str = 'サイトはhttp://123です。';

document.write(str.replace(p, '<a href="$1">$1</a>'));

//3-48 split
var p = /[\/\.\-]/gi;

console.log('2019/02/14'.split(p));
console.log('2019/02/14'.split(p));
console.log('2019/02/14'.split(p));
