<section class="content p1 d-grid col-sm-1 col-md-1 col-lg-4 gap_4 grid-lg-auto">
    <aside id="sidebar" class="content-box bg-white sidebar">
        <ul class="sidebar_list border-item">
            <li class="sidebar_list_item"><i class='fas fa-box'></i><a href="<?php echo Rout::full_url('userpanel.myorder');?>">تمام سفارشات</a></li>
            <li class="sidebar_list_item"><i class='fas fa-heart'></i><a href="<?php echo Rout::full_url('userpanel.likeproduct');?>">محصولات موردعلاقه</a></li>
            <li class="sidebar_list_item"><i class='fas fa-bookmark'></i><a href="<?php echo Rout::full_url('userpanel.bookmarkproduct');?>">محصولات ذخیره شده</a></li>   
            <li class="sidebar_list_item"><i class='fas fa-comment'></i><a href="">نظرات من</a></li>   
            <li class="sidebar_list_item"><i class='fas fa-shopping-cart'></i><a href="<?php echo Rout::full_url('cart');?>">سبد خرید</a></li>   
            <li class="sidebar_list_item"><i class='fas fa-sign-out-alt'></i><a href="<?php echo Rout::full_url('logout');?>">خروج</a></li>   
        </ul>
    </aside>
    <section class="content-box bg-white grid-lg-2to5 grid-sm-auto">
        <h3 class="content-box_title">سفارشات من </h3>
        <div class="orderRow">
            <div></div>
            <div class="orderRow_header">
                <p>تاریخ تحویل سفارش :<span class="date">2022-06-27</span></p>
                <p>قیمت سفارش :<span>1,350,000</span> ریال </p>
            </div>
            <div class="orderRow_content">
                            <img class="productImg" src="http://localhost/front-project/assets/images/products/987943.jpg">
                            <img class="productImg" src="http://localhost/front-project/assets/images/products/395243.jpg">
                    </div>
            <div class="orderRow_footer">
                <a href="http://localhost/front-project/userpanel/deatailorder?orderId=50"> مشاهده سفارش <i class="fas fa-angle-left"></i></a>
            </div>
        </div>
    <div class="orderRow">
        <div></div>
        <div class="orderRow_header">
            <p>تاریخ تحویل سفارش :<span class="date">2022-06-27</span></p>
            <p>قیمت سفارش :<span>1,350,000</span> ریال </p>
        </div>
        <div class="orderRow_content">
                        <img class="productImg" src="http://localhost/front-project/assets/images/products/987943.jpg">
                        <img class="productImg" src="http://localhost/front-project/assets/images/products/395243.jpg">
                </div>
        <div class="orderRow_footer">
            <a href="http://localhost/front-project/userpanel/deatailorder?orderId=50"> مشاهده سفارش <i class="fas fa-angle-left"></i></a>
        </div>
    </div>
    </section> 
</section>