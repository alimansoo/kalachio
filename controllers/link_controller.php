<?php
const links = array(
    'home' => "Home",
    'login' => "Login",
    'logout' => "Logout",
    'category' => "Category",
    'search' => "searchProduct",
    'product' => "Product",
    'cart' => "Cart",
    'addcart' => "AddCart",
    'removecart' => "RemoveCart",
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
function Category()
{
    $Result=[
        'status'=>220,
        'errore'=>0,
        "do"=>[
            [
                'type'=>'loadpage',
                'name'=>'category'
            ]
        ]
    ];
    return $Result;
}
function searchProduct(){
    $PageName = "search";
    if (isset($_GET['category'])) {
        $PageName .= '?category='.$_GET['category'];
    }
    $Result=[
        'status'=>220,
        'errore'=>1,
        "do"=>[
            [
                'type'=>'loadpage',
                'name'=>$PageName
            ]
        ]
    ];
    return $Result;
}
function Product()
{
    $PageName = "product";
    if (isset($_GET['id'])) {
        $PageName .= '?id='.$_GET['id'];
    }
    else{
        $PageName = 'home';
    }
    $Result=[
        'status'=>220,
        'errore'=>1,
        "do"=>[
            [
                'type'=>'loadpage',
                'name'=>$PageName
            ]
        ]
    ];
    return $Result;
}
function AddCart()
{
    if (!isset($_SESSION['id'])) {
        return [
            'status'=>220,
            'errore'=>1,
            "do"=>[
                [
                    'type'=>'loadpage',
                    'name'=>'login'
                ]
            ]
        ];
    }
    $pid = $_GET['product'];
    $db = new db('localhost','root','','kalachio');
    $select = $db->query(
        QueryBuilder::select("carts",'*',['uid'=>$_SESSION['id'],'pid'=>$_GET['product']])
    )->fetchArray();
    if (count($select)<1) {
        $productInfo = $db->query(
            QueryBuilder::insert("carts",['uid'=>$_SESSION['id'],'pid'=>$_GET['product'],'qty'=>1])
        );
        return [
            'status'=>220,
            'errore'=>1,
            "do"=>[
                [
                    'type'=>'changecartnumber',
                    'value'=>cart_number($_GET['product'],$_SESSION['id'])
                ],
                [
                    'type'=>'alertsuccess',
                    'message'=>'محصول به سبد شما اضافه شد!!'
                ],
                [
                    'type'=>'changetargettext',
                    'text'=>'حذف از سبد'
                ]
            ]
        ];
    }

    $select = $db->query(
        QueryBuilder::delete("carts",['uid'=>$_SESSION['id'],'pid'=>$_GET['product']])
    );

    return [
        'status'=>220,
        'errore'=>1,
        "do"=>[
            [
                'type'=>'changecartnumber',
                'value'=>cart_number($_GET['product'],$_SESSION['id'])
            ],
            [
                'type'=>'alertwarning',
                'message'=>'محصول از سبد خرید شما حذف شد!!'
            ],
            [
                'type'=>'changetargettext',
                'text'=>'افزودن به سبد خرید'
            ]
        ]
    ];
}
function cart_number($pid,$uid){
    $db = new db('localhost','root','','kalachio');
    $cartnumber = count($db->query(QueryBuilder::select('carts','*',['uid'=>$_SESSION['id']]))->fetchAll());
    return $cartnumber;
}
function RemoveCart()
{
    $_GET['product'];
    $db = new db('localhost','root','','kalachio');
    $select = $db->query(
        QueryBuilder::delete("carts",['uid'=>$_SESSION['id'],'pid'=>$_GET['product']])
    );

    return [
        'status'=>220,
        'errore'=>1,
        "do"=>[
            [
                'type'=>'changecartnumber',
                'value'=>cart_number($_GET['product'],$_SESSION['id'])
            ],
            [
                'type'=>'alertwarning',
                'message'=>'محصول از سبد خرید شما حذف شد!!'
            ],
            [
                'type'=>'deletecartitem'
            ]
        ]
    ];
}