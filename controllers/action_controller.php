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

    $Result = ['available'=>false,'login'=>false];

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
                $Result['available'] = true;
            }
            break;
        case login:
            $email = $_POST['email'];
            $password = $_POST['password'];
            $resultdb = $db->query(
                QueryBuilder::select("users","*",['email'=>$email,'password'=>$password])
            )->fetchArray();
            if ($resultdb) {
                $Result['available'] = true;
                $Result['login'] = true;
                foreach ($resultdb as $key => $value) {
                    $_SESSION[$key] = $value;
                }
            }
            break;
    }
    
    $db->close();
    return $Result;
}