<main class="content p1 d-grid col-sm-1 col-md-1 gap_4 col-lg-4 grid-lg-auto">
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
        <h3 class="content-box_title">جزئیات سفارش</h3>
        <div>هزینه کل سفارش شما : <span>1350000</span>ریال</div>
                <div>هزینه حمل و نقل : <span>250000</span>ریال</div>
                <div>آدرس سفارش : <span>sdadsd</span></div>
                <div>تاریخ تحویل سفارش : <span>2022-06-27</span></div>
                <div>وضعيت سفارش : <span>1</span></div>
                <table class="table">
                    <tbody>
                        <tr class="cus-row">
                            <th>تصویر</th>
                            <th>نام محصول</th>
                            <th>قیمت</th>
                            <th>تعداد</th>
                        </tr>
                        <tr class="cus-row">
                            <td><img src="img/p1.jpg" alt="" width="50px"></td>
                            <td>بنر زیارتی</td>
                            <td><span>0</span>ریال</td>
                            <td>0</td>
                        </tr>
                        <tr class="cus-row">
                            <td><img src="img/p2.jpg" alt="" width="50px"></td>
                            <td>بنر استند</td>
                            <td><span>0</span>ریال</td>
                            <td>0</td>
                        </tr>
                                    </tbody></table>
    </section>
</main>