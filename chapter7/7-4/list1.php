<!--7-23 hello_ajax -->
<?php
sleep(3);
print('こんにちは、'.$_REQUEST['name'].'さん！');

//7-25 bm
<?php
mb_http_output('UTF-8');
mb_internal_encoding('UTF-8');
header('Content-Type: application/json;charset=UTF-8');
$url = 'http://b.hatena.ne.jp/entry/jsonlite/?url='.$_GET['url'];
print(file_get_contents($url, false, stream_context_create(['http' => 
  ['header' => 'User-Agent: MySample']])));