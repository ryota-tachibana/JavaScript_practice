//6-29 append_child
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('btn').addEventListener('click', function() {
    var name = document.getElementById('name');
    var url = document.getElementById('url');
    var anchor = document.createElement('a');
    anchor.href= url.value;
    var text = document.createTextNode(name.value);
    anchor.appendChild(text);
    var br = document.createElement('br');
    var list = document.getElementById('list');
    list.appendChild(anchor);
    list.appendChild(br);
  }, false);
}, false);

//6-30 append_complex
document.addEventListener('DOMContentLoaded', function() {
  var books = [
    { title: 'test1', price: 10 },
    { title: 'test2', price: 100 },
    { title: 'test3', price: 1000 }
  ];
  var list = document.getElementById('list');
  for(var i = 0, len = books.length; i < len; i++) {
    var b = books[i]
    var li = document.createElement('li');
    var text = document.createTextNode(b.title + '：'+ b.price + '円');
    li.appendChild(text);
    list.appendChild(li);
  }
}, false);

//6-31 append_complex2
document.addEventListener('DOMContentLoaded', function() {
  var books = [
    { title: 'testA', price: 100 },
    { title: 'testB', price: 200 },
    { title: 'testC', price: 300 }
  ];
  var frag = document.createDocumentFragment();
  for(var i = 0, len = books.length; i < len; i++) {
    var b = books[i]
    var li = document.createElement('li');
    var text = document.createTextNode(b.title + '：'+ b.price + '円');
    li.appendChild(text);
    frag.appendChild(li);
  }
  document.getElementById('list2').appendChild(frag);
}, false);

//6-32 replace
document.addEventListener('DOMContentLoaded', function() {
  var list = document.getElementById('list');
  var pic = document.getElementById('pic');
  var del = document.getElementById('del');
  list.addEventListener('click', function(e) {
    var isbn = e.target.getAttribute('data-isbn');
    if (isbn) {
      var img = document.createElement('img');
      img.src = 'http://www.wings.msn.to/books/' + isbn + '/' + isbn + '.jpg';
      img.alt = e.target.textContent;
      img.height = 100;
      img.width = 200;
      if(pic.getElementsByTagName('img').length > 0){
        pic.replaceChild(img, pic.lastChild);
      } else {
        del.disabled = false;
        pic.appendChild(img);
      }
    }
  }, false);
  del.addEventListener('click', function() {
    pic.removeChild(pic.lastChild);
    del.disabled = true;
  }, false);
}, false);


