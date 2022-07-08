<?php
const links = array(
    'home' => "Home",
    'login' => "Login",
    'logout' => "Logout",
    'category' => "categorydata",
    'pcategory' => "productdata",
    'product' => "normal",
    'cart' => "Cart",
    'userpanel' => "UserPanel",
    'myorders' => "normal",
    'deatordr' => "normal",
    //ADMIN
    'admin.dashboard' => "normal",
    'admin.listproduct' => "normal",
    'admin.listuser' => "normal",
);
$fun = links[$PageName];
echo json_encode($fun());
function Home()
{
    $Result = [
        'status'=>220,
        'errore'=>0,
        'do'=>[]
    ];
    $Result['do'] = [
        [
            'type'=>'loadpage',
            'name'=>'home'
        ]
    ];
    return $Result;
}
function Login()
{
    define('check', 2);
    define('login', 1);
    define('load', 0);

    if (isset($_SESSION['id'])) {
        return [
            'status'=>220,
            'errore'=>0,
            'do'=>[
                [
                    'type'=>'loadpage',
                    'name'=>'userpanel'
                ],
                [
                    'type'=>'alertsuccess',
                    'message'=>'به پنل کاربری خوش امدید!!'
                ]
            ]
        ];
    }

    $Result = [
        'status'=>220,
        'errore'=>0,
        'do'=>[]
    ];

    $status = load;
    if (isset($_POST['email'])) {
        if (isset($_POST['password'])) {
            $status = login;
        }else{
            $status = check;
        }
    }
    $db = new db('localhost','root','','kalachio');
    switch ($status) {
        case load:
            $Result['do'] = [
                [
                    'type'=>'loadpage',
                    'name'=>'login'
                ],
            ];
            break;
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
                    ],
                    [
                        'type'=>'alertsuccess',
                        'message'=>'به پنل کاربری خوش امدید!!'
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
function UserPanel()
{
    $Result = [
        'status'=>220,
        'errore'=>0,
        'do'=>[
            [
                'type'=>'loadpage',
                'name'=>'login'
            ],
            [
                'type'=>'alerterrore',
                'message'=>'شما هنوز وارد سایت نشده اید!!'
            ]
        ]
    ];
    if (isset($_SESSION['id'])) {
        $Result['do'] = [
            [
                'type'=>'loadpage',
                'name'=>'userpanel'
            ]
        ];
    }
    return $Result;
}
function Logout()
{
    foreach ($_SESSION as $key => $value) {
        unset($_SESSION[$key]);
    }
    $Result = [
        'status'=>220,
        'errore'=>0,
        'do'=>[
            [
                'type'=>'loadpage',
                'name'=>'home'
            ]
        ]
    ];
    return $Result;
}
function Cart()
{
    $Result = [
        'status'=>220,
        'errore'=>0,
        'do'=>[]
    ];
    if (isset($_SESSION['id'])) {
        $Result['do']=[
            [
                'type'=>'loadpage',
                'name'=>'cart'
            ]
        ];
    }else{
        $Result['do']=[
            [
                'type'=>'loadpage',
                'name'=>'login'
            ],
            [
                'type'=>'alerterrore',
                'message'=>'شما هنوز وارد سایت نشده اید!!'
            ]
        ];
    }
    return $Result;
}