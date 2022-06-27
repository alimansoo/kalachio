<?php
const page_address = array(
    'home' => ['url'=>'','page'=>'home'], 
    'home' => ['url'=>'home','page'=>'home'],
    'login' => ['url'=>'login','page'=>'login'],
    'category' => ['url'=>'category','page'=>'category'],
    'pcategory' => ['url'=>'pcategory','page'=>'pcategory'],
    'product' => ['url'=>'product','page'=>'product'],
    'cart' => ['url'=>'cart','page'=>'cart'],
    'userpanel' => ['url'=>'userpanel','page'=>'userpanel'],
    'myorders' => ['url'=>'myorders','page'=>'myorders'],
);
$page = page_address[$request]['page'];
$maincontent = file_get_contents(Template::IncludePath("page/".$page));
// echo $request;


$festival = file_get_contents(Template::IncludePath("festival"));
$header = file_get_contents(Template::IncludePath("header"));
$navbar = file_get_contents(Template::IncludePath("navbar"));
$sidebar = file_get_contents(Template::IncludePath("sidebar"));
$footer = file_get_contents(Template::IncludePath("footer"));


$page_content = 
        $festival 
        . $header 
        . $navbar 
        . $sidebar 
        . $maincontent 
        . $footer ;
$array = array(
    "Title"=>"کالاچیو",
    "content"=>$page_content
);

echo json_encode($array);
