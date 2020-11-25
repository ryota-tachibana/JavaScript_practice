//HTML,XMLでの文書を操作する　
//6-2 element_id
var current = new Date();
var result = document.getElementById('result');
result.textContent = current.toLocaleString();

//6-3 element_tag
var list = document.getElementsByTagName('a');
for (var i = 0, len = list.length; i < len; i++) {
  console.log(list.item(i).href);
}

//6-4 element_name
var current = new Date();
var nam = document.getElementsByName('time');
nam[0].value = current.toLocaleTimeString();

//6-5 element_class
var list = document.getElementsByClassName('my');
for (var i = 0, len = list.length; i < len; i++) {
  console.log(list.item(i).href);
}
