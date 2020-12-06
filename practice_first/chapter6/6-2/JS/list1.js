//HTML,XMLでの文書を操作する　
//6-2 element_id
var current = new Date();
var result = document.getElementById('result');
result.textContent = current.toLocaleString();

//6-3 element_tag
var list1 = document.getElementsByTagName('a');
for (var i = 0, len = list1.length; i < len; i++) {
  console.log(list1.item(i).href);
}

//6-4 element_name
var current = new Date();
var nam = document.getElementsByName('time');
nam.value = current.toLocaleTimeString();

//6-5 element_class
var list2 = document.getElementsByClassName('my');
for (var i = 0, len = list2.length; i < len; i++) {
  console.log(list2.item(i).href);
}

//6-6 element_query
var list3 = document.querySelectorAll('#list .external');
for (var i = 0, len = list3.length; i < len; i++) {
  console.log(list3.item(i).href);
}
