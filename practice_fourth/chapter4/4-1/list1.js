//4-1 function
function getTriangle(base, height) {
  return base * height / 2;
}
console.log(getTriangle(5, 2));

//4-2 function_obj
var getTriangle = new Function('base', 'height', 'return base * height / 2');
console.log(getTriangle(5, 2));

//4-3 function_obj2
var param = 'height, width';
var formula = 'return height * width / 2;';
var diamond = new Function(param, formula);
console.log('面積：' + diamond(5, 2));

//4-4 function_literal
var getTriangle = function(base, height) {
  return base * height / 2;
}
console.log(getTriangle(5, 2));

//4-5 arrow
let getTriang = (base, height) => {
  return base * height / 2;
}
console.log(getTriang(5, 2));