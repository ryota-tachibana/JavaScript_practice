//5-25 private
function Triangle() {
  var _base;
  var _height;
  var _checkArgs = function(val) {
    return (typeof val === 'number' && val > 0);
  }
  this.setBase = function(base) {
    if (_checkArgs(base)) { _base = base;}
  }
  this.getBase = function() { return _base;}

  this.setHeight = function(height) {
    if (_checkArgs(height)) { _height = height;}
  }
  this.getHeight = function() { return _height; }
}

Triangle.prototype.getArea = function() {
  return this.getBase() * this.getHeight() / 2;
}

var t = new Triangle();
t._base = 10;
t._height = 2;
console.log(t.getArea());

t.setBase(10);
t.setHeight(2);
console.log(t.getBase());
console.log(t.getHeight());
console.log(t.getArea());

//5-26 accessor_define
function Triangle1() {
  var _base;
  var _height;
  Object.defineProperty(
    this,
    'base',
    {
      get: function() {
        return _base;
      },
      set : function(base) {
       if(typeof base === 'number' && base > 0 ) {
        _base = base;
       }
      }
    }
  );

  Object.defineProperty(
    this,
    'height',
    {
      get: function() {
        return _height;
      },
      set : function(height) {
        if (typeof height === 'number' && height > 0 ) {
          _height = height;
        }
      }
    }
  );
};

Triangle1.prototype.getArea = function() {
  return this.base * this.height / 2;
};

 var t = new Triangle1();
 t.base = 10;
 t.height = 2;
 console.log(t.base);
 console.log(t.height);
 console.log(t.getArea());

//5-27 accessor_define2
function Triangle2() {
  var _base;
  var _height;
  Object.defineProperties(this, {
    base: {
      get: function() {
        return _base;
      },
      set: function(base) {
        if (typeof base === 'number' && base > 0) {
          _base = base;
        }
      }
    },

    height: {
      get: function() {
        return _height;
      },
      set: function(height) {
        if(typeof height === 'number' && height > 0) {
          _height = height;
        }
      }
    }
  });
}

Triangle2.prototype.getArea = function() {
  return this.base * this.height / 2;
};

 var t = new Triangle2();
 t.base = 10;
 t.height = 2;
 console.log(t.base);
 console.log(t.height);
 console.log(t.getArea());

//5-28 namespase
var Wings = Wings || {};
Wings.Member = function(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
};

Wings.Member.prototype = {
  getName : function() {
    return this.lastName + this.firstName;
  }
};

var mem = new Wings.Member('A', 'B');
console.log(mem.getName());

//5-29 namespase_util
function namespace(ns) {
  var names = ns.split('.');
  var parent = window;
  for (var i = 0, len = names.length; i < len; i++) {
    parent[names[i]] = parent[names[i]] || {};
    parent = parent[names[i]];
  }
  return parent;
}

var my = namespace('Wing.Go.Ya');
my.Person = function() {};
var p = new my.Person();
console.log(p instanceof Wing.Go.Ya.Person);