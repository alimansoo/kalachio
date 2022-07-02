<?php
function RenderData()
{
    return [
        "cart_item" => [
            "data"=>[
                [
                    "imgsrc"=>"img/p1.jpg",
                    "title"=>" گوشی موبایل",
                    "price"=>"3,000,000",
                    "qty"=>"5",
                ],
                [
                    "imgsrc"=>"img/p2.jpg",
                    "title"=>" afdfdfdf",
                    "price"=>"200,000",
                    "qty"=>"6",
                ],
                [
                    "imgsrc"=>"img/p2.jpg",
                    "title"=>"ساعت اورواچ",
                    "price"=>"3,000,000",
                    "qty"=>"4",
                ],
                [
                    "imgsrc"=>"img/p2.jpg",
                    "title"=>" afdfdfdf",
                    "price"=>"200,000",
                    "qty"=>"6",
                ],
                [
                    "imgsrc"=>"img/p3.jpg",
                    "title"=>" هنذفری مدل s",
                    "price"=>"200,000",
                    "qty"=>"2",
                ],
            ],
            "template"=>file_get_contents(Template::IncludePath("cart_item"))
        ],
    ];
}