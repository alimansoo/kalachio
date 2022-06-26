let timer = setInterval(sliderRender,500)

function sliderRender() {
    let allslider = document.querySelectorAll('.slider');
    if (allslider.length > 0) {
        clearInterval(timer);
        for (const slider of allslider) {
            //set picturs number
            slider.getAttribute
            let allpicture = slider.querySelectorAll('picture.slider-image');
            let i =0;
            for (const picture of allpicture) {
                picture.setAttribute('number',i++);
            }
            //set slide controller icon
            slider.querySelector('.slider-controller.next').innerHTML = '<i class="fa fa-chevron-right"></i>';
            slider.querySelector('.slider-controller.prev').innerHTML = '<i class="fa fa-chevron-left"></i>';
            //set clickable 
            slider.querySelector('.slider-controller.next').addEventListener('click',
            () => {
                nextSlide(slider);
            });
            slider.querySelector('.slider-controller.prev').addEventListener('click',
            () => {
                prevSlide(slider);
            });
            //set slider item
            let slideitem = slider.querySelector('.slider-item-group');
            if (slideitem) {
                for (let index = 0; index < i; index++) {
                    slideitem.innerHTML += "<span class='slider-item' number='"+index+"'></span>";
                }
            }
            //set clickable
            let allSliderItem = document.querySelectorAll('.slider-item');
            if (allSliderItem.length > 0) {
                for (const sliderItem of allSliderItem) {
                    sliderItem.addEventListener('click',goToslide);
                }
            }
        }
        for (const slider1 of allslider) {
            slider1.querySelector('.slider-image').classList.add('show');
            slider1.querySelector('.slider-item-group .slider-item').classList.add('active');
        }
    }
    function goToslide(e) {
        let parent = this.closest('.slider');
        let allSliderImages = parent.querySelectorAll('.slider-image');
        let allSliderItem = parent.querySelectorAll('.slider-item');
        let sliderlength = allSliderImages.length;
        let indexed = this.getAttribute('number');
        //hide all slider images
        for (const sliderImages of allSliderImages) {
            sliderImages.classList.remove('show');
            number = sliderImages.getAttribute('number');
            if (number == indexed) {
                sliderImages.classList.add('show');
            }
        }
        //hide all slideritem
        for (const SliderItem of allSliderItem) {
            SliderItem.classList.remove('active');
            number = SliderItem.getAttribute('number');
            if (number == indexed) {
                SliderItem.classList.add('active');
            }
        }
    }
    function nextSlide(element) {
        let parent = element.closest('.slider');
        let allSliderImages = parent.querySelectorAll('.slider-image');
        let allSliderItem = parent.querySelectorAll('.slider-item');
        let sliderlength = allSliderImages.length;
        let indexed = parent.querySelector('.slider-image.show').getAttribute('number');
        indexed++;
        if (indexed > sliderlength-1) {
            indexed = 0;
        }
        let number;
        //hide all slider images
        for (const sliderImages of allSliderImages) {
            sliderImages.classList.remove('show');
            number = sliderImages.getAttribute('number');
            if (number == indexed) {
                sliderImages.classList.add('show');
            }
        }
        //hide all slideritem
        for (const SliderItem of allSliderItem) {
            SliderItem.classList.remove('active');
            number = SliderItem.getAttribute('number');
            if (number == indexed) {
                SliderItem.classList.add('active');
            }
        }
    }
    function prevSlide(element) {
        let parent = element.closest('.slider');
        let allSliderImages = parent.querySelectorAll('.slider-image');
        let allSliderItem = parent.querySelectorAll('.slider-item');
        let sliderlength = allSliderImages.length;
        let indexed = parent.querySelector('.slider-image.show').getAttribute('number');
        indexed--;
        if (indexed < 0) {
            indexed = sliderlength-1;
        }
        let number;
        //hide all slider images
        for (const sliderImages of allSliderImages) {
            sliderImages.classList.remove('show');
            number = sliderImages.getAttribute('number');
            if (number == indexed) {
                sliderImages.classList.add('show');
            }
        }
        //hide all slideritem
        for (const SliderItem of allSliderItem) {
            SliderItem.classList.remove('active');
            number = SliderItem.getAttribute('number');
            if (number == indexed) {
                SliderItem.classList.add('active');
            }
        }
    }

    let allAutoplaySlides = document.querySelectorAll('.slider.autoplay');
    if (allAutoplaySlides.length >0) {
        for (const AutoplaySlide of allAutoplaySlides) {
            setInterval(() => {
                nextSlide(AutoplaySlide);
            }, 5000);
        }
    }
}