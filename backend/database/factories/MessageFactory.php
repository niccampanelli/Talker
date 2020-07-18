<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model;
use Faker\Generator as Faker;

$factory->define(\App\Message::class, function (Faker $faker) {
    return [
        'content' => $faker->sentence,
        'receptor_id' => rand(1, 40),
    ];
});
