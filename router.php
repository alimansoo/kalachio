<?php
const controllers_rout = array(
    'view' => ['url'=>'','controller'=>'renderpage.php'], 
    'controller' => ['url'=>'b/','controller'=>'main_controller.php'],
    'action' => ['url'=>'a/','controller'=>'action_controller.php'],
);

$request = $_SERVER['REQUEST_SCHEME'].'://'.$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'];
$request = str_replace(SITE_URL,'',$request);
// echo $request;
if (strpos($request,"b/") !== false) {
    $request = substr($request,2);
    include "controllers/main_controller.php";
}elseif (strpos($request,"a/") !== false) {
    $request = substr($request,2);
    include "controllers/action_controller.php";
}else{
    if ($request === "") {
        $request = "home";
    }
    include "controllers/render_controller.php";
}