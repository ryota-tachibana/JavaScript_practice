//6-18 text_select
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('btn').addEventListener('click', function() {
    var name = document.getElementById('name');
    console.log(name.value);
  }, false);
}, false);

//6-19 check
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('btn').addEventListener('click', function() {
    
    var result = [];
    var foods = document.getElementsByName('food');
    
    for(var i = 0, len = foods.length; i < len; i++) {
      var food = foods.item(i);
      if (food.checked) {
        result.push(food.value);
      }
    }

    window.alert(result.toString());
  }, false);
}, false);

//6-20 radio
document.addEventListener('DOMContentLoaded', function() {
  var getRadioValue = function(name) {
    var result = '';
    var elems = document.getElementsByName(name);

    for(var i = 0, len = elems.length; i < len; i++) {
      var elem = elems.item(i);
      if (elem.checked) {
        result = elem.value;
        break;
      }
    }
    return result;
  };
  document.getElementById('botan').addEventListener('click', function() {
    window.alert(getRadioValue('food1'));
  }, false);
}, false);

//6-21 radio_set
document.addEventListener('DOMContentLoaded', function() {
  var setRadioValue = function(name, value) {
    var elems = document.getElementsByName(name);

    for(var i = 0, len = elems.length; i < len; i++) {
      var elem = elems.item(i);
      if (elem.value === value) {
        elem.checked = true;
        break;
      }
    }
  };
  
  setRadioValue('food1', '米');
}, false);

//6-22 check_set
document.addEventListener('DOMContentLoaded', function() {
  var setCheckValue = function(name, value) {
    var elems = document.getElementsByName(name);

    for(var i = 0, len = elems.length; i < len; i++) {
      var elem = elems.item(i);
      if (value.indexOf(elem.value) > -1) {
        elem.checked = true;
      }
    }
  };
  
  setCheckValue('food3', ['餃子', '焼き肉']);
}, false);


