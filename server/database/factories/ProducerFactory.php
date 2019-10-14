<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */
$factory->define(App\Producer::class, function (Faker\Generator $faker) {


    return [

        'name' => $faker->name,
        'description' => $faker -> sentence(5)
    ];
});
