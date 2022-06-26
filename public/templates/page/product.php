<main class="content p1">
    <section class="grid-display col-sm-1 .col-md-1 col-lg-3-product-view productView">
            <section class="productView_image">
                <img src="img/p1.jpg" width="90%" alt="" class="image">
            </section>
            <section class="productView_detail">
                <h1 class="productView_detail_title">
                    موبایل
                </h1>
                <div class="productView_detail_score">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <div class="productView_detail_description">
                    <ul>
                        <li>دارای ابعاد استاندارد</li>
                        <li>متنوع در ضخامت های گوناگون</li>
                        <li>نهیه شده از مواد مرغوب</li>
                    </ul>
                </div>
                
            </section>
            <section class="content-box">
                <h6 class="content-box_title">مبلغ نهایی سفارش شما :</h6>
                <div class="content-box_secondtitle">1,000,000<span class="price_component">ریال</span></div>
                <hr>
                <ul>
                    <li>مبلغ نهایی بدون محاسبه مالیات است.</li>
                    <li>قیمت ارسال سفارش در مراحل بعد محاسبه می شود.</li>
                </ul>
                <button type="button" class="btn block-btn btn-primary">افرودن به سبد خريد</button>
            </section>
        </section>

        <section id="comment" class="content-box box-block mtop-1">
            <h4 class="content-box_title">بخش نظرات این محصول</h4>

            <div class="comment_user">
                <i class="fas fa-user-circle"></i>
                <h5 class="comment_user_username">علی منصوری</h5>
                <h6 class="comment_user_subject">کیفیت</h6>
                <p class="comment_user_message">کیفیت افتضاحی داره</p>
            </div>

            <h4 class="page_content_title">اضافه کردن کامنت جدید</h4>
            <form action="productcomment?pid=" method="get" id="CommentForm">
                <div class="form-outline mb-4">
                    <input type="email" class="form-controll" name="email" id="email">
                    <label for="email" class="form-label">موضوع نظر</label>
                </div>
                <div class="form-outline mb-4">
                    <textarea type="email" class="form-controll" name="email" id="email"></textarea>
                    <label for="email" class="form-label">متن نظر</label>
                </div>
                <input type="submit" value="ثبت نظر" class="btn btn-primary">
            </form>
        </section>
</main>