//5-1 simpe
var Member = function() {};

//5-2 simpe
var mem = new Member();

//5-3 simpe2
var Member = function(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.getName = function() {
  	return this.lastName + ' ' + this.firstName;
  }
};

var mem = new Member('山田', '一気');
console.log(mem.getName());

//5-4 dynamic
var Member = function(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
};

var mem = new Member('田中','太郎');
mem.getName = function() {
  return this.lastName + this.firstName;
}

console.log(mem.getName());

//5-6 call
var data = 'Global';
var obj1 = {data: 'obj1'};
var obj2 = {data: 'obj2'};
function hoge() {
  console.log(this.data);
}

hoge.call(null);
hoge.call(obj1);

//5-7 call_arguments
function hoge() {
  var args = Array.prototype.slice.call(arguments);
  console.log(args.join('／'));
}

hoge('A', 'B', 'C');

//5-9 simple3
var Member = function(firstName, lastName) {
  if(!(this instanceof Member)) {
    return new Member(firstName, lastName);
  }
  this.firstName = firstName;
  this.lastName = lastName;
  this.getName = function(){
    return this.lastName + ' ' + this.firstName;
  }
};

var m = Member('大野', '慎太郎');
console.log(m);
console.log(m.firstName);