<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */
$factory->define(App\Category::class, function (Faker\Generator $faker) {


    return [

        'name' => $faker->name,
        'parent_id' => $faker->RandomDigit
    ];
});