<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */
$factory->define(App\Order::class, function (Faker\Generator $faker) {


    return [
        'user_id' => function () {
            return factory(App\User::class)->create()->id;
        },
        'adress' => $faker->sentence(5)
    ];
});
