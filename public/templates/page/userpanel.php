<main class="content p1 d-grid col-sm-1 col-md-1 col-lg-4 gap_4 grid-lg-auto">
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
    <section class="content-box bg-white grid-lg-2to5 grid-sm-auto">
        <table class="table">
            <tr class="cartitem h-fit p1">
                <td class="item_key">نام کاربر:</td>
                <td class="item_value">علی منصوری</td>
            </tr>
            <tr class="cartitem h-fit p1">
                <td class="item_key">شهر محل سکونت:</td>
                <td class="item_value">اصفهان</td>
            </tr>
            <tr class="cartitem h-fit p1">
                <td class="item_key">ایمیل:</td>
                <td class="item_value">alimansi1382@gmail.com</td>
            </tr>
        </table>
    </section>
</main>