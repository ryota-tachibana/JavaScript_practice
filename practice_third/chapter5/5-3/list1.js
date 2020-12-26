//5-19 chain
var Animal = function() {};
Animal.prototype = {
  walk : function() {
    console.log('とことこ');
  }
};

var Dog = function() {
  Animal.call(this);
};

Dog.prototype = new Animal();
Dog.prototype.bark = function() {
  console.log('わんわん');
}

var d = new Dog();
d.walk();
d.bark();

//5-20 chain_dynamic
var Animal = function() {};
Animal.prototype = {
  walk : function() {
    console.log('とことこ');
  }
};

var SuperAnimal = function() {};
SuperAnimal.prototype = {
  walk : function() {
    console.log('ダッダッダッダ');
  }
};

var Dog = function() {};
Dog.prototype = new Animal();
var D1 = new Dog();
D1.walk();
Dog.prototype = new SuperAnimal();
var D2 = new Dog();
D2.walk();
D1.walk();

//5-21 obj_type
var Animal = function() {};
var Hamster = function() {};

Hamster.prototype = new Animal();

var a = new Animal();
var h = new Hamster();

console.log(a.constructor === Animal);
console.log(h.constructor === Animal);
console.log(h.constructor === Hamster);

//5-22 obj_type
var Animal = function() {};
var Hamster = function() {};

Hamster.prototype = new Animal();

var a = new Animal();
var h = new Hamster();

console.log(h instanceof Animal);
console.log(h instanceof Hamster);

//5-23 obj_type
var Animal = function() {};
var Hamster = function() {};

Hamster.prototype = new Animal();

var a = new Animal();
var h = new Hamster();

console.log(Hamster.prototype.isPrototypeOf(h));
console.log(Animal.prototype.isPrototypeOf(h));

//5-24 obj_in
var obj = { hoge: function(){}, foo: function(){} };

console.log('hoge' in obj);
console.log('piyo' in obj);