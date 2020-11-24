//HTML,XMLでの文書を操作する　
//6-2 element_id
var current = new Date();
var result = document.getElementById('result');
result.textContent = current.toLocaleString();
