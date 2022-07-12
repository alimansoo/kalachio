<?php
const controllers_rout = array(
    'view' => ['url'=>'','controller'=>'render_controller.php'], 
    'main' => ['url'=>'b','controller'=>'main_controller.php'],
    'action' => ['url'=>'a','controller'=>'action_controller.php'],
    'structor' => ['url'=>'s','controller'=>'structor_controller.php'],
    'data' => ['url'=>'d','controller'=>'data_controller.php'],
    'link' => ['url'=>'l','controller'=>'link_controller.php'],
);

$request = $_SERVER['REQUEST_SCHEME'].'://'.$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'];
$request = str_replace(SITE_URL,'',$request);
$qustnIndex = strpos($request,"?");
if($qustnIndex){
    $request = substr($request,0,$qustnIndex);
}
// echo $request;

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

const address = array(
    'home' => 'home', 
    'login' => 'login',
    'logout' => "logout",
    'verif' => 'verif',
    'category' => 'category',
    'search' => 'search',
    'product' => 'product',
    'cart' => 'cart',
    'addcart' => 'adcart',
    'removecart' => 'rmcart',
    //UserPanel
    'userpanel' => 'userpanel',
    'myorders' => 'myorders',
    'deatordr' => 'deatordr',
    //ADMIN
    'admin.dashboard' => 'admin/',
    'admin.listproduct' => 'admin/listproduct',
    'admin.listuser' => 'admin/listuser',
);

$PageName = '';
if ($request === '') {
    $request = 'home';
}
foreach (address as $key => $value) {
    if ($request === $value) {
        $PageName = $key;
        break;
    }
}

include "controllers/".$controller;