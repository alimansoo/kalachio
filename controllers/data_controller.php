<?php
const datas = array(
    'home' => "homeData",
    'category' => "categoryData",
    'search' => "searchData",
    'product' => "productData",
    'cart' => "cartData",
    'userpanel' => "usrpnlData",
    'myorders' => "normal",
    'deatordr' => "normal",
    //ADMIN
    'admin.dashboard' => "normal",
    'admin.listproduct' => "normal",
    'admin.listuser' => "normal",
);

function homeData()
{
    $Result = [];
    $db = new db('localhost','root','','kalachio');
    //Slider
    $resultdb = $db->query(
        QueryBuilder::select("slider","*")
    )->fetchAll();
    $Result['slider'] =
    [
        'data' => $resultdb,
        'template' => file_get_contents(Template::IncludePath("slider"))
    ];
    //sm_info
    $Result["sm_info"]=[
        "data"=>[
            [
                "text"=>"لینک",
                "imgsrc"=>"store/sm1.png"
            ],
            [
                "text"=>"لینک",
                "imgsrc"=>"store/sm2.png"
            ],
            [
                "text"=>"لینک",
                "imgsrc"=>"store/sm3.png"
            ],
            [
                "text"=>"لینک",
                "imgsrc"=>"store/sm4.png"
            ],
            [
                "text"=>"لینک",
                "imgsrc"=>"store/sm5.png"
            ],
            [
                "text"=>"لینک",
                "imgsrc"=>"store/sm6.png"
            ],
            [
                "text"=>"لینک",
                "imgsrc"=>"store/sm7.png"
            ],
            [
                "text"=>"لینک",
                "imgsrc"=>"store/sm7.png"
            ],
        ],
        "template" => file_get_contents(Template::IncludePath("sm_info"))
    ];
    $Result["small_card"] = [
        "data"=>[
            [
                "productimg"=>"img/p1.jpg",
                "percent"=>"20",
                "newprice"=>"1,000,000",
                "curentprice"=>"1,500,000",
            ],
            [
                "productimg"=>"img/p2.jpg",
                "percent"=>"20",
                "newprice"=>"1,000,000",
                "curentprice"=>"1,500,000",
            ],
            [
                "productimg"=>"img/p3.jpg",
                "percent"=>"20",
                "newprice"=>"1,000,000",
                "curentprice"=>"1,500,000",
            ],
            [
                "productimg"=>"img/p4.jpg",
                "percent"=>"20",
                "newprice"=>"1,000,000",
                "curentprice"=>"1,500,000",
            ],
            [
                "productimg"=>"img/p5.jpg",
                "percent"=>"20",
                "newprice"=>"1,000,000",
                "curentprice"=>"1,500,000",
            ],
            [
                "productimg"=>"img/p3.jpg",
                "percent"=>"20",
                "newprice"=>"1,000,000",
                "curentprice"=>"1,500,000",
            ],
            [
                "productimg"=>"img/p4.jpg",
                "percent"=>"20",
                "newprice"=>"1,000,000",
                "curentprice"=>"1,500,000",
            ],
        ],
        "template"=>file_get_contents(Template::IncludePath("small_card"))
    ];
    return $Result;
}
function categoryData()
{
    $Result = [];
    $db = new db('localhost','root','','kalachio');
    $resultdb = $db->query(
        QueryBuilder::select("categories","*")
    )->fetchAll();
    $Result['category_card'] =
    [
        'data' => $resultdb,
        'template' => file_get_contents(Template::IncludePath("category_card"))
    ];
    return $Result;
}
function searchData()
{
    $Result = [];
    $where = [];
    if (isset($_GET['category'])) {
        $where['category']=$_GET['category'];
    }
    
    $db = new db('localhost','root','','kalachio');
    if ($where === []) {
        $resultdb = $db->query(
            QueryBuilder::select("products","*")
        )->fetchAll();
    }else{
        $resultdb = $db->query(
            QueryBuilder::select("products","*",$where)
        )->fetchAll();
    }
    
    $Result['product']=
    [
        'data' => $resultdb,
        'template' => file_get_contents(Template::IncludePath("product"))
    ];
    return $Result;
}
function usrpnlData()
{
    $Result = [];
    $Result['userinfo'] = [
        'data'=>[
            [
                'fullname'=>$_SESSION['name'],
                'phone'=>$_SESSION['phone'],
                'email'=>$_SESSION['email'],
            ]
        ],
        'template'=>file_get_contents(Template::IncludePath("userinfo"))
    ];
    return $Result;
}
function productData()
{
    $Result = [];
    $where = [];
    if (isset($_GET['id'])) {
        $where['id']=$_GET['id'];
    }
    
    $db = new db('localhost','root','','kalachio');
    if ($where === []) {
        $productInfo = $db->query(
            QueryBuilder::select("products","*")
        )->fetchArray();
    }else{
        $productInfo = $db->query(
            QueryBuilder::select("products","*",$where)
        )->fetchArray();
    }

    $comments = $db->query(
        QueryBuilder::select("comments","*",['pid'=>$_GET['id']])
    )->fetchAll();

    $Result['productinfo']=
    [
        'data' => [$productInfo],
        'template' => file_get_contents(Template::IncludePath("productpage"))
    ];
    if (count($comments) < 1) {
        $Result['comments']=[
            'data' => [[]],
            'template' => file_get_contents(Template::IncludePath("nocomment"))
        ];
    }
    else{
        $Result['comments']=[
            'data' => $comments,
            'template' => file_get_contents(Template::IncludePath("comment"))
        ];
    }
    
    return $Result;
}
function cartData(){
    $db = new db('localhost','root','','kalachio');
    $cartitems = $db->query(
        QueryBuilder::select("carts",'*',['uid'=>$_SESSION['id']],["id"=>"DESC"])
    )->fetchAll();
    $allprice = 0;
    foreach ($cartitems as $key => $value) {
        $product = $db->query(
            QueryBuilder::select("products",'*',['id'=>$value['pid']])
        )->fetchArray();
        foreach ($product as $pkey => $pvalue) {
            $value[$pkey] = $pvalue;
        }
        $cartitems[$key] = $value;
        $allprice += (int)$value['price'];
    }
    $Result['cart_item']=[
        'data' => $cartitems,
        'template' => file_get_contents(Template::IncludePath("cart_item"))
    ];
    $Result['cart_content']=[
        'data' => [["allprice"=>$allprice,"discount"=>"0"]],
        'template' => file_get_contents(Template::IncludePath("cart_content"))
    ];
    return $Result;
}

$fun = datas[$request];
echo json_encode($fun());