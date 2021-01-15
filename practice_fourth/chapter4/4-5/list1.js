//4-29 default_new
function getTriangle(base = 1, height = 1) {
  return base * height / 2;
}
console.log(getTriangle(5));

//4-30 default_new2
function multi(a, b = a) {
  return a * b; 
}

console.log(multi(10, 5));
console.log(multi(3));

//4-32 default_new
function getTriangle(base = 1, height = 2) {
  return base * height / 2;
}

console.log(getTriangle(5, null));

//4-33 default_new
console.log(getTriangle(5, undefined));

//4-35 default_required
function show(x, y = 1) {
  console.log('x = ' + x);
  console.log('y = ' + y);
}

show();

//4-36 default_required2
function required() {
  throw new Error('引数不足です');
}

function hoge(value = required) {
  return value;
}

hoge();

//4-37 rest_param
function sum(...nums) {
  let result = 0;
  for (let num of nums) {
    if (typeof num !== 'number') {
      throw new Error('数値ではありません');
    }
    result += num;
  }
  return result;
}

try {
  console.log(sum(1, 3, 5, 7, 9));
} catch(e) {
  window.alert(e.message);
}

//4-38 spread
console.log(Math.max(15, -3, 78, 1));
console.log(Math.max([15, -3, 78, 1]));

//4-39 spread2
console.log(Math.max.apply(null, [15, -3, 78, 1]));

//4-40 spread3
console.log(Math.max(...[15, -3, 78, 1]));

//4-41 named_args_new
function getTriangle({base = 1, height = 2}) {
  return base * height / 2;
}

console.log(getTriangle({base:5, height:4}));

//4-42 named_args_prop
function show2({name}) {
  console.log(name);
};

let member = {
  id: '120',
  name: 'TANAKA'
};

show2(member);