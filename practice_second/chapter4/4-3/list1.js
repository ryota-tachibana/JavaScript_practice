//4-11 scope
var scope = 'Global scope';

function getValue(){
  var scope = 'Local variable';
  return scope;
}

console.log(getValue());
console.log(scope);

//4-12 scope2
scope2 = 'Global scope';

function getValue2(){
  scope2 = 'Local variable';
  return scope2;
}

console.log(getValue2());
console.log(scope2);

//4-12 scope2
var scope = 'Global Variable';

function getValue() {
  console.log(scope);
  var scope = 'Local Variable';
  return scope;
}

console.log(getValue());
console.log(scope);


//4-13 scope3
var scope = 'Global Variable';

function getValue() {
  console.log(scope);
  var scope = 'Local Variable';
  return scope;
}

console.log(getValue());
console.log(scope);

//4-14 reference
var value = 10;

function decrementValue(value) {
  value--;
  return value;
}

console.log(decrementValue(100));
console.log(value);

//4-15 reference2
var value = [1, 2, 4, 8, 16];

function deleteElement(value) {
  value.pop();
  return value;
}

console.log(deleteElement(value));
console.log(value);

//4-17 compare_scope
if (true) {
	 var i = 5;
}

console.log(i);

//4-18 block
(function() {
  var i2 = 5;
  console.log(i2);
}).call(this);

//4-22 scope4
var scope = 'Global';

function checkScope() {
  var scope = 'local';
  var f_1 = function() {return scope};
  console.log(f_1());
  var f_2 = new Function('return scope;');
  console.log(f_2());
}

checkScope();