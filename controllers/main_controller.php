<?php
const pages = array(
    'home' => ['template'=>'home','data'=>true],
    'login' => ['template'=>'login','data'=>false],
    'verif' => ['template'=>'login2','data'=>false],
    'category' => ['template'=>'category','data'=>true],
    'search' => ['template'=>'search','data'=>true],
    'product' => ['template'=>'product','data'=>true],
    'cart' => ['template'=>'cart','data'=>true],
    'userpanel' => ['template'=>'userpanel','data'=>true],
    'myorders' => ['template'=>'myorders','data'=>true],
    'deatordr' => ['template'=>'deatordr','data'=>true],
    //ADMIN
    'admin.dashboard' => ['template'=>'admin/dashboard','data'=>true],
    'admin.listproduct' => ['template'=>'admin/listproduct','data'=>true],
    'admin.listuser' => ['template'=>'admin/listuser','data'=>true],
);
$Page = pages[$request];
$Page['template'] = file_get_contents(Template::IncludePath('page/'.$Page['template']));
echo json_encode($Page);