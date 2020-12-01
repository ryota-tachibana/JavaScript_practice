// 7-8 log
console.log('ログ');
console.info('情報');
console.warn('警告');
console.error('エラー');

// 7-9 log_format
console.log('初めまして。%sです。%d歳です。','鈴木', 20);
console.log('%.2f度です', 24.6);

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
