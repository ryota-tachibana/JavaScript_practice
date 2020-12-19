// 2-35 if
var x = 15;

if (x >= 10) {
  console.log('変数xは10以上です。');
} else {
 console.log('変数xは10未満です。');
}

// 2-36 if2
var x = 15;

if (x >= 10) {
  console.log('変数xは10以上です。');
}

// 2-37 if_else
var x = 30;

if (x >= 20) {
  console.log('変数xは20以上です。');
} else if (x >= 10) {
  console.log('変数xは10以上です。');
} else {
  console.log('変数xは10未満です。');
}

// 2-38 if_else_ng
var x = 30;

if (x >= 10) {
 console.log('変数xは10以上です。');
} else if (x >= 20) {
 console.log('変数xは20以上です。');
} else {
 console.log('変数xは10未満です。');
}

// 2-39 if_nest
var x = 30;

if (x >= 10) {
  if (x >= 20) {
    console.log('変数xは20以上です。');
  } else {
    console.log('変数xは10以上20未満です。');
  }
} else {
  console.log('変数xは10未満です。');
}

// 2-40 if_omit
var x = 15;

if (x >= 10)
  console.log('変数xは10以上です。');
else
  console.log('変数xは10未満です。');

// 2-41 if_omit_ng
var x = 1;
var y = 2;

if (x === 1)
  if (y === 1) console.log('変数x、yは共に1です。');
else
  console.log('変数xは1ではありません。');

// 2-42 if_omit_ok
var x = 1;
var y = 2;

if (x === 1) {
  if (y === 1) {
    console.log('変数x、yは共に1です。');
  }
} else {
  console.log('変数xは1ではありません。');
}

// 2-43 switch_pre
var rank = 'B';

if (rank === 'A') {
  console.log('Aランクです。');
} else if (rank === 'B') {
  console.log('Bランクです。');
} else if (rank === 'C') {
  console.log('Cランクです。');
} else {
  console.log('ランク外です。');
}

// 2-44 switch
var rank = 'B';

switch(rank) {
  case 'A' :
    console.log('Aランクです。');
    break;
  case 'B' :
    console.log('Bランクです。');
    break;
  case 'C' :
    console.log('Cランクです。');
    break;
  default :
    console.log('ランク外です。');
    break;
}

// 2-45 switch_fall
var rank = 'B';

switch(rank) {
  case 'A' :
  case 'B' :
  case 'C' :
    console.log('合格！');
    break;
  case 'D' :
    console.log('不合格...');
    break;
}

// 2-46 switch_fall
var x = '0';

switch (x) {
  case 0 :
    console.log('0です。');
    break;
}








