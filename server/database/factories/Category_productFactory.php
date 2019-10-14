<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */
$factory->define(App\Order::class, function (Faker\Generator $faker) {


    return [
        'product_id' => function () {
            return factory(App\Product::class)->create()->id;
        },
        'category_id' => function () {
            return factory(App\Category::class)->create()->id;
        },

    ];
});
