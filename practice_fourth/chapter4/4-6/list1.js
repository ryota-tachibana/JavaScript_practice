//4-43 return_array
function getMaxMin(...nums) {
  return [Math.max(...nums), Math.min(...nums)];
}

let result = getMaxMin(3, 8, -100, 1000);
console.log(result);
let [max, min] = getMaxMin(3, 8, -100, 1000);
console.log(max);
console.log(min);

//4-44 recursive
function factrial(n) {
  if (n != 0) { return n * factrial( n-1 )};
  return 1;
}

console.log(factrial(5));

//4-45 higher
function arrayWalk(data, f) {
  for (var key in data) {
    f(data[key], key);
  }
}

function showElement(value, key) {
  console.log(key + ':' + value);
}

var ary = [1, 2, 4, 8, 16];
arrayWalk(ary, showElement);

//4-46 higher2
function arraywalk(data, f) {
  for (var key in data) {
    f(data[key], key);
  }
}

var result2 = 0;
function sumElement(value, key) {
  result2 += value;
}

var ary = [1, 2, 4, 8, 16];
arrayWalk(ary, sumElement);
console.log(result2);

//4-47 anonymous
function arrayWalk(data, f) {
  for (var key in data) {
    f(data[key], key);
  }
}

var ary = [1, 2, 4, 8, 16];
arrayWalk(
  ary,
  function(value, key) {
    console.log(key + ':' + value);
  }
);