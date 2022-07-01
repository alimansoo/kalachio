<?php

const address = array(
    'home' => '', 
    'login' => 'login',
    'category' => 'category',
    'pcategory' => 'pcategory',
    'product' => 'product',
    'cart' => 'cart',
    'userpanel' => 'userpanel',
    'myorders' => 'myorders',
    'deatordr' => 'deatordr',
    //ADMIN
    'admin.dashboard' => 'admin/',
    'admin.listproduct' => 'admin/listproduct',
    'admin.listuser' => 'admin/listuser',
);

$PageName = '';
foreach (address as $key => $value) {
    if ($request === $value) {
        $PageName = $key;
        break;
    }
}

include "render_controller.php";