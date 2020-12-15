// 7-8 log
console.log('ログ');
console.info('情報');
console.warn('警告');
console.error('エラー');

// 7-9 log_format
console.log('初めまして。%sです。%d歳です。','田中', 30;
console.log('%.2f度です', 24.0);

// 7-10 log_group
console.group('親グループ');

for (var i = 0; i < 3; i++) {
  console.group('子グループ');

  for (var j = 0; j < 3; j++) {
    console.log(i,j);
  }
  console.groupEnd();
}

console.groupEnd();

// 7-11 log_count
for (var i = 0; i < 3; i++) {
  for (var j = 0; j < 3; j++) {
    console.count('ループ');
  }
}

console.count('ループ');

// 7-12 log_trace
function call1() {
  call2();
}

function call2() {
  call3();
}

function call3() {
  console.trace();
}

call1();

// 7-13 log_timer
console.time('タイマー');
window.alert('確認してください');
console.timeEnd('タイマー');

// 7-14 log_assert
function circle(radius) {
  console.assert(typeof radius === 'number' && radius > 0,
    '不正値です');
  return radius * radius * Math.PI;
}

console.log(circle(-5));

//7-15 log_dir
document.addEventListener('DOMContentLoaded', function() {
  var d = document.getElementById('main');
  
  console.log(d);
  console.dir(d);
}, false);

