<?php
function RenderData()
{
    return [
        "category_card" => [
            "data"=>[
                [
                    "imgSrc"=>"img/c1.jpg",
                    "title"=>" گوشی موبایل",
                ],
                [
                    "imgSrc"=>"img/c2.jpg",
                    "title"=>"تبلت",
                ],
                [
                    "imgSrc"=>"img/c3.jpg",
                    "title"=>"لپ تاب",
                ],
                [
                    "imgSrc"=>"img/c4.jpg",
                    "title"=>"ساعت هوشمند",
                ],
            ],
            "template"=>file_get_contents(Template::IncludePath("category_card"))
        ],
    ];
}