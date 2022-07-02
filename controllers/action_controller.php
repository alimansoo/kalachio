<?php
const functions = array(
    'home' => "homedata",
    'login' => "login",
    'category' => "categorydata",
    'pcategory' => "productdata",
    'product' => "normal",
    'cart' => "cartdata",
    'userpanel' => "normal",
    'myorders' => "normal",
    'deatordr' => "normal",
    //ADMIN
    'admin.dashboard' => "normal",
    'admin.listproduct' => "normal",
    'admin.listuser' => "normal",
);
$a = ["email"=>$_POST['email']];
echo json_encode($a);
function Login()
{
    
}