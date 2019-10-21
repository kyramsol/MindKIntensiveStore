<?php


/** @var \Illuminate\Database\Eloquent\Factory $factory */
$factory->define(App\Product::class, function (Faker\Generator $faker) {


    return [
        'name' => $faker->sentence(5),
        'price' => $faker->randomDigit,
        'count' => $faker->randomDigit,
        'image_path' => $faker->imageUrl(350,250,'cats', true, 'img, false'),
        'description' => $faker ->sentence(20),
        'producer_id' => function () {
        return factory(App\Producer::class)->create()->id;
    },
    ];
});
