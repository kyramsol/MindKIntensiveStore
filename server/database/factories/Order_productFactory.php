<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */
$factory->define(App\Order_product::class, function (Faker\Generator $faker) {


    return [
        'quant' => $faker-> randomDigit,
        'order_id' => function () {
            return factory(App\Order::class)->create()->id;
        },
        'product_id' => function () {
            return factory(App\Product::class)->create()->id;
        },

    ];
});
