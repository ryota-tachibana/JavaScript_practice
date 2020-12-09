//関数
//4-23 args
function showMessage(value) {
  console.log(value);
}

showMessage();
showMessage('日');
showMessage('光', '山');

//4-24 args_check
function showMessage2(value) {
  if (arguments.length !== 1) {
    throw new Error('引数の不一致：' + arguments.length);
  }
  console.log(value);
}
try {
  showMessage2(' 亜', '円');
} catch(e) {
  window.alert(e.message);
}

//4-25 default_args
function getTriangle(base, height) {
  if (base === undefined) {base = 1;}
  if (height === undefined) {height = 1;}
  return base * height / 2;
}

console.log(getTriangle(5));

//4-26 variable_args
function sum() {
  var result = 0;
  for (var i = 0, len = arguments.length; i < len; i++) {
    var tmp = arguments[i];
    if (typeof tmp !== 'number') {
      throw new Error('数値ではありません');
    }
    result += tmp;
  }
  return result
}

try {
  console.log(sum(1, 3, 5, 7, 9));
} catch(e) {
  window.alert(e.message);
}

//4-27 variable_args2
function printf(format) {
  for (var i = 0, len = arguments.length; i < len; i++) {
    var pattern = new RegExp('\\{' + (i - 1) + '\\}', 'g');
    format = format.replace(pattern, arguments[i]);
  }
  console.log(format);
}

printf('こんにちは、{0}さん。私は{1}です。', '声', '田');

//4-28 named_args2
function getTriangle(args) {
  if (args.base === undefined) { args.base = 1; }
  if (args.height === undefined) { args.height = 1; }
  return args.base * args.height / 2;
}

console.log(getTriangle({ base:5, height:4 }));
