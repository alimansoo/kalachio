<?php
function RenderData()
{
    return [
        "product" => [
            "data"=>[
                [
                    "imgSrc"=>"img/p1.jpg",
                    "title"=>" گوشی موبایل",
                    "price"=>"3,000,000",
                ],
                [
                    "imgSrc"=>"img/p2.jpg",
                    "title"=>" گوشی موبایل",
                    "price"=>"3,000,000",
                ],
                [
                    "imgSrc"=>"img/p3.jpg",
                    "title"=>" گوشی موبایل",
                    "price"=>"3,000,000",
                ],
                [
                    "imgSrc"=>"img/p4.jpg",
                    "title"=>" گوشی موبایل",
                    "price"=>"3,000,000",
                ],
                [
                    "imgSrc"=>"img/p5.jpg",
                    "title"=>" گوشی موبایل",
                    "price"=>"3,000,000",
                ],
                [
                    "imgSrc"=>"img/p6.jpg",
                    "title"=>" گوشی موبایل",
                    "price"=>"3,000,000",
                ],
                [
                    "imgSrc"=>"img/p7.jpg",
                    "title"=>" گوشی موبایل",
                    "price"=>"3,000,000",
                ],
                [
                    "imgSrc"=>"img/p8.jpg",
                    "title"=>" گوشی موبایل",
                    "price"=>"3,000,000",
                ],
                [
                    "imgSrc"=>"img/p9.jpg",
                    "title"=>" گوشی موبایل",
                    "price"=>"3,000,000",
                ],
            ],
            "template"=>file_get_contents(Template::IncludePath("product"))
        ],
    ];
}