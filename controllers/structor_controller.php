<?php
const structors = array(
    'home' => "normal",
    'login' => "login",
    'category' => "normal",
    'pcategory' => "normal",
    'product' => "normal",
    'cart' => "normal",
    'userpanel' => "normal",
    'myorders' => "normal",
    'deatordr' => "normal",
    //ADMIN
    'admin.dashboard' => "normal",
    'admin.listproduct' => "normal",
    'admin.listuser' => "normal",
);
const typeOfstructor = array(
    "normal"=> "festival+header+navbar+sidebar+main+footer",
    "login"=> "festival+header+navbar+sidebar+main"
);
$pageStructor = structors[$request];
$Structor = typeOfstructor[$pageStructor];

$Data = explode("+",$Structor);
$Data['structor'] = str_replace("+"," ",$Structor);
$path = '';
foreach ($Data as $key => $value) {
    $path = Template::IncludePath($value);
    if (file_exists($path)) {
        unset($Data[$key]);
        $Data[$value] = file_get_contents($path);
    }
}
echo json_encode($Data);