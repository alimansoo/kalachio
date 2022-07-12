<section class="content p1">
    <section class="grid-display col-sm-1 col-md-1 col-lg-1">
        {productinfo}

        <section id="comment" class="content-box box-block mtop-1 bg-white">
            <h4 class="content-box_title">بخش نظرات این محصول</h4>

            {comments}

            <h4 class="page_content_title">اضافه کردن کامنت جدید</h4>
            <form action="" method="get" id="CommentForm">
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
    </section>
</section>