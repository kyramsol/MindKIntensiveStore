<?php


/** @var \Illuminate\Database\Eloquent\Factory $factory */
$factory->define(App\Product::class, function (Faker\Generator $faker) {


    return [
        'name' => $faker->sentence(5),
        'price' => $faker->randomDigit,
        'count' => $faker->randomDigit,
        'image_path' => $faker->imageUrl(250, 250, 'technics', true, 'img', false),
        'producer_id' => function () {
        return factory(App\Producer::class)->create()->id;
    },
    ];
});
