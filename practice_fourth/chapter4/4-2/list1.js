//4-6 return
var getTriangle = function(base, height) {
  return
  base * height / 2;
};
console.log('三角形の面積：' + getTriangle(5, 2));

//4-7 data
var getTriangle = function(base, height) {
  return base * height / 2;
};
console.log(getTriangle(5, 2));
getTriangle = 0;
console.log(getTriangle);

//4-8 data2
var getTriangle = function(base, height) {
  return base * height / 2;
};
console.log(getTriangle);

//4-9 static
console.log(getTriangle(5, 2));
function getTriangle(base, height) {
	return base * height / 2;
}