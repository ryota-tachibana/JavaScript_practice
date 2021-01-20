//6-23 list
document.addEventListener('DOMContentLoaded', function() {
  var selectValue = function(name) {
  	var result = [];
    var opts = document.getElementById(name).options;
    for (var i = 0, len = opts.length; i < len ; i++) {
  	  var opt = opts.item(i);
  	  if (opt.selected) {
  	  	result.push(opt.value);
  	  }
  	}
  	return result;
  };
  document.getElementById('btn2').addEventListener('click', function() {
  	window.alert(selectValue('food2'));
  }, false);
}, false);

//6-24 list_set
document.addEventListener('DOMContentLoaded', function() {
  var setListValue = function(name, value) {
    var opts = document.getElementById(name);
    for(var i = 0, len = opts.length; i < len; i++) {
      var opt = opts.item(i);
      if (value.indexOf(opt.value) > -1) {
        opt.selected = true;
      }
    }
  };
  setListValue('food2', ['果物', 'パン']);
}, false);

//6-25 file_info
window.addEventListener('DOMContentLoaded', function() {
  document.getElementById("file").addEventListener('change', function(e) {
    var inputs = document.getElementById("file").files;
    for (var i = 0, len = inputs.length; i < len; i++) {
      var input = inputs[i];
      console.log('ファイル名：' + input.name);
      console.log('種類：' + input.type);
      console.log('サイズ：' + input.size / 1024 + 'KB');
      console.log('最終更新日：' + input.lastModifiedDate);
    }
  }, true);
});

//6-26 file_reader
window.addEventListener('DOMContentLoaded', function() {
  document.getElementById("file2").addEventListener('change', function(e) {
    var input = document.getElementById("file2").files[0];
    var reader = new FileReader();
    reader.addEventListener('load', function() {
      document.getElementById("result").textContent = reader.result;
    }, true);
    reader.addEventListener('error', function() {
      console.log(reader.error.message);
    }, true);
    reader.readAsText(input, 'UTF-8');
  }, true);
});

//6-28 file_image
window.addEventListener('DOMContentLoaded', function() {
  document.getElementById("file").addEventListener('change', function(e) {
    var input = document.getElementById("file").files[0];
    var reader = new FileReader();
    reader.addEventListener('load', function(e) {
      document.getElementById("result3").src = reader.result;
    }, true);
    reader.readAsDataURL(input);
  }, true);
});




