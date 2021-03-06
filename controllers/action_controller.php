<?php
const functions = array(
    'home' => "homedata",
    'login' => "Login",
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
$fun = functions[$request];
echo json_encode($fun());

function Login()
{
    define('check', 2);
    define('login', 1);

    $Result = [
        'status'=>220,
        'errore'=>0,
        'do'=>[]
    ];

    $status = check;
    if (!empty($_POST['password'])) {
        $status = login;
    }
    $db = new db('localhost','root','','kalachio');
    switch ($status) {
        case check:
            $email = $_POST['email'];
            $resultdb = $db->query(
                QueryBuilder::select("users","*",['email'=>$email])
            )->fetchArray();
            if ($resultdb) {
                $Result['do'] = [
                    [
                        'type'=>'loadpage',
                        'name'=>'verif'
                    ],
                    [
                        'type'=>'addElement',
                        'to'=>'.ajaxForm.verif',
                        'element'=>[
                            'tagname'=>'input',
                            'type'=>'hidden',
                            'name'=>'email',
                            'value'=>$email
                        ]
                    ]
                ];
            }else{
                $Result['do'] = [
                    [
                        'type'=>'erorre',
                        'message'=>'کاربر با این ایمیل وجود ندارد.'
                    ]
                ];
            }
            break;
        case login:
            $email = $_POST['email'];
            $password = $_POST['password'];
            $resultdb = $db->query(
                QueryBuilder::select("users","*",['email'=>$email,'password'=>$password])
            )->fetchArray();
            if ($resultdb) {
                $Result['do'] = [
                    [
                        'type'=>'loadpage',
                        'name'=>'userpanel'
                    ]
                ];
                foreach ($resultdb as $key => $value) {
                    $_SESSION[$key] = $value;
                }
            }else{
                $Result['do'] = [
                    [
                        'type'=>'erorre',
                        'message'=>'رمز عبور کاربر اشتباه است.'
                    ]
                ];
            }
            break;
    }
    
    $db->close();
    return $Result;
}