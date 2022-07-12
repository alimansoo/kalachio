<?php
const structors = array(
    'home' => ['structor'=>"normal","title"=>"کلاچیو"],
    'login' => ['structor'=>"login","title"=>"صفحه ورود"],
    'verif' => ['structor'=>"login","title"=>"ورود رمز"],
    'category' => ['structor'=>"normal","title"=>"دسته بندی ها"],
    'search' => ['structor'=>"normal","title"=>"محصولات"],
    'product' => ['structor'=>"normal","title"=>"مشخصات محصول"],
    'cart' => ['structor'=>"normal","title"=>"سبد خرید"],
    'userpanel' => ['structor'=>"normal","title"=>"پنل کاربری"],
    'myorders' => ['structor'=>"normal","title"=>"سفارشات من"],
    'deatordr' => ['structor'=>"normal","title"=>"جزئیات سفارش"],
    //ADMIN
    'admin.dashboard' => ['structor'=>"normal","title"=>""],
    'admin.listproduct' => ['structor'=>"normal","title"=>""],
    'admin.listuser' => ['structor'=>"normal","title"=>""],
);
const typeOfstructor = array(
    "normal"=> "festival+header+navbar+sidebar+main+footer",
    "login"=> "festival+header+navbar+sidebar+main",
    "userpanel"=> "festival+header+navbar+sidebar+usrpnlsidebar+usrpnlmain+footer"
);
$pageStructor = structors[$PageName]['structor'];
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
$Data['title'] = structors[$PageName]['title'];
echo json_encode($Data);