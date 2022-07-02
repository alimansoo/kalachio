<?php
const datas = array(
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
Template::Include(datas[$request]);
echo json_encode(RenderData()) ;
