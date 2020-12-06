//フォーム要素にアクセス
//6-35 style
document.addEventListener('DOMContentLoaded', function() {
  var elem = document.getElementById('elem');
  elem.addEventListener('mouseover', function() {
    this.style.backgroundColor = 'Yellow';
  }, false);
  elem.addEventListener('mouseout', function() {
    this.style.backgroundColor = '';
  }, false);
}, false);

//6-36 style_class
document.addEventListener('DOMContentLoaded', function() {
  var elem1 = document.getElementById('elem1');
  elem1.addEventListener('mouseover', function() {
    this.className = 'highlight';
  }, false);
  elem1.addEventListener('mouseout', function() {
    this.className = '';
  }, false);
}, false);

//6-37 style_toggle 
document.addEventListener('DOMContentLoaded', function() {
  var elem2 = document.getElementById('elem2');
  elem2.addEventListener('click', function() {
    this.className = (this.className === 'highlight' ? '' : 'highlight');
  }, false);
}, false);
//6-38 style_toggle2
document.addEventListener('DOMContentLoaded', function() {
  var elem3 = document.getElementById('elem3');
  elem3.addEventListener('click', function() {
    var classes = this.className.split(' ');
    var index = classes.indexOf('highlight');
    if(index === -1) {
      classes.push('highlight');
    } else {
      classes.splice(index, 1);
    }
    this.className = classes.join(' ');
  }, false);
}, false);

//6-39 class_list
document.addEventListener('DOMContentLoaded', function() {
  var elem4 = document.getElementById('elem4');
    elem4.addEventListener('click', function() {
    this.classList.toggle('highlight');
  }, false);
}, false);





