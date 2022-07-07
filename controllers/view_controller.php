<?php

const address = array(
    'home' => 'home', 
    'login' => 'login',
    'verif' => 'verif',
    'category' => 'category',
    'pcategory' => 'pcategory',
    'product' => 'product',
    'cart' => 'cart',
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

include "render_controller.php";