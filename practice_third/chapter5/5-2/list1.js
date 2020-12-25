//5-10 prototype
var Member = function(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
};

Member.prototype.getName = function() {
  return this.lastName + this.firstName;
}

var mem = new Member('kenta', 'Suzuki');
console.log(mem.getName());

//5-11 dynamic_prototype
var Member = function(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
}

var mem = new Member('こうた', '玉木');

Member.prototype.getName = function() {
  return this.lastName + ' ' + this.firstName;
};

console.log(mem.getName());

//5-12 prototype2
var Member = function() {};
Member.prototype.sex = '男';
var mem1 = new Member();
var mem2 = new Member();

console.log(mem1.sex + '|' + mem2.sex);

mem2.sex = '女';

console.log(mem1.sex + '|' + mem2.sex);

//5-13 prototype3
var Member = function() {};
Member.prototype.sex = '男';
var mem1 = new Member();
var mem2 = new Member();

console.log(mem1.sex + '|' + mem2.sex);
mem2.sex = '女';

console.log(mem1.sex + '|' + mem2.sex);

delete mem1.sex
delete mem2.sex

console.log(mem1.sex + '|' + mem2.sex);

//5-14 undefined
var Member = function() {};
Member.prototype.sex = '男';
var mem1 = new Member();
var mem2 = new Member();

console.log(mem1.sex + '|' + mem2.sex);

mem2.sex = undefined;

console.log(mem1.sex + '|' + mem2.sex);

//5-15 undefined2
var Member = function() { };
Member.prototype.sex = '男';
var mem = new Member();
mem.sex = undefined;

for (var key in mem) {
  console.log(key + '|' + mem[key]);
}

//5-17 literal2
var Member = function(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
};

Member.prototype = {
  getName : function() {
    return this.lastName + ' ' + this.firstName;
  },
  toString : function() {
    return this.lastName + this.firstName;
  }
};

//5-18 static
var Area = function() {};

Area.version = '1.0';
Area.triangle = function(base, height) {
  return base * height / 2;
};

Area.diamond = function(width, height) {
  return width * height / 2;
};

console.log('Area：' + Area.version);
console.log('三角形：' + Area.triangle(5, 3));

var a = new Area();