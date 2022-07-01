<?php
const controllers_rout = array(
    'view' => ['url'=>'','controller'=>'view_controller.php'], 
    'main' => ['url'=>'b','controller'=>'main_controller.php'],
    'action' => ['url'=>'a','controller'=>'action_controller.php'],
    'structor' => ['url'=>'s','controller'=>'structor_controller.php'],
    'data' => ['url'=>'d','controller'=>'data_controller.php'],
);

$request = $_SERVER['REQUEST_SCHEME'].'://'.$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'];
$request = str_replace(SITE_URL,'',$request);

$controller = '';
$requestData = explode("/",$request);
foreach (controllers_rout as $key => $value) {
    if ($requestData[0] == $value['url']) {
        $request = str_replace($value['url'].'/',"",$request);
        $controller = $value['controller'];
        break;
    }
}
if ($controller === '') {
    $controller = controllers_rout['view']['controller'];
}

include "controllers/".$controller;