<section class="content p1 d-grid col-sm-1 col-md-1 col-lg-4 gap_4 grid-lg-auto">
    <aside id="sidebar" class="content-box bg-white sidebar ">
        <ul class="sidebar_list border-item">
            <li class="sidebar_list_item"><i class='fas fa-box'></i><a href="<?php echo Rout::full_url('userpanel.myorder');?>">تمام سفارشات</a></li>
            <li class="sidebar_list_item"><i class='fas fa-heart'></i><a href="<?php echo Rout::full_url('userpanel.likeproduct');?>">محصولات موردعلاقه</a></li>
            <li class="sidebar_list_item"><i class='fas fa-bookmark'></i><a href="<?php echo Rout::full_url('userpanel.bookmarkproduct');?>">محصولات ذخیره شده</a></li>   
            <li class="sidebar_list_item"><i class='fas fa-comment'></i><a href="">نظرات من</a></li>   
            <li class="sidebar_list_item"><i class='fas fa-shopping-cart'></i><a href="<?php echo Rout::full_url('cart');?>">سبد خرید</a></li>   
            <li class="sidebar_list_item"><i class='fas fa-sign-out-alt'></i><a href="<?php echo Rout::full_url('logout');?>">خروج</a></li>   
        </ul>
    </aside>