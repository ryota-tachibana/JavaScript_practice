//7-32 promise
function asyncProcess(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value) {
        resolve(`入力値： ${value}`);
      } else {
        reject('入力は空です');
      }
    }, 500);
  });
}

asyncProcess('トクジロウ').then(
  response => {
    console.log(response);
  },
  error => {
    console.log(`エラー： ${error}`);
  }
);
//7-33 promise2
function asyncProcess(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value) {
        resolve(`入力値： ${value}`);
      } else {
        reject('入力は空です');
      }
    }, 500);
  });
}

asyncProcess('トクジロウ')
.then(
  response => {
    console.log(response);
    return asyncProcess('ニンサブロウ');
  }
)

.then(
  response => {
    console.log(response);
  },
  error => {
    console.log(`エラー： ${error}`);
  }
);
//7-34 promise_all
function asyncProcess(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value) {
        resolve(`入力値： ${value}`);
      } else {
        reject('入力は空です');
      }
    }, 500);
  });
}

Promise.all([
  asyncProcess('トクジロウ'),
  asyncProcess('ニンザブロウ'),
  asyncProcess('リンリン')
]).then(
  response => {
    console.log(response);
  },
  error => {
    console.log(`エラー： ${error}`);
  }
);
//7-35 promise_race
for (var key in Promise) {
    console.log(key);
    }
function asyncProcess(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value) {
        resolve(`入力値： ${value}`);
      } else {
        reject('入力は空です');
      }
    }, 500);
  });
}

Promise.race([
  asyncProcess('トクジロウ'),
  asyncProcess('ニンザブロウ'),
  asyncProcess('リンリン')
]).then(
  response => {
    console.log(response);
  },
  error => {
    console.log(`エラー： ${error}`);
  }
);