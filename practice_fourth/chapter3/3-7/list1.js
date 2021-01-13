//3-53 is_nan
console.log(isNaN('hoge'));
console.log(Number.isNaN('hoge'));

//3-54 encodeURI
var str = '!"#$%&()+-*/@~_|;:,.';

console.log(encodeURI(str));
console.log(encodeURIComponent(str));

//3-55 eval
var str = 'console.log("eval関数")';
eval(str);

//3-56 eval2
var obj = {hoge : 1, hoge2 : 2 };
var prop = 'hoge';
eval('console.log(obj.'+prop+')');

//3-57 json
var data = JSON.parse('{"hoge": 1, "hoge2": 2}');
console.log(data.hoge);