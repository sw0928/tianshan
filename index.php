<?php 

 error_reporting(E_ALL & ~E_NOTICE);


 $pathinfo = $_SERVER['PATH_INFO'];

    // substr()  截取字符串
	// print_r() 打印
	// explode() 字符串分割
	// print_r(explode('/', substr($pathinfo, 1)));
 $pathinfo = explode('/',substr($pathinfo, 1));

 //文件夹名称
 $folder = $pathinfo[0];
 // 文件名称
 $filename = $pathinfo[1];

 //处理路径
 if(count($pathinfo) == 1){
     if($folder == ''){
          $folder = 'index';
     }

    $filename = $folder;
    $folder = 'index';
 };
 include './views/'.$folder .'/' .$filename .'.html'
?>