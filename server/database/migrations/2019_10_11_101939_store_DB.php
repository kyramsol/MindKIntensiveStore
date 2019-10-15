<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class StoreDB extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('producers', function (Blueprint $table)
        {
            $table->increments('id')->unsigned();
            $table->string('name');
            $table->text("description");
            $table->timestamps();
        });
        Schema::create('categories', function (Blueprint $table)
        {
            $table->increments('id')->unsigned();
            $table->string('name');
            $table->integer("parent_id");
            $table->timestamps();
        });
        Schema::create('products', function (Blueprint $table)
        {
            $table->increments('id')->unsigned();
            $table->string('name');
            $table->integer("price");
            $table->integer('count');
            $table->string('image_path');
            $table->integer('producer_id')->unsigned();
            $table->timestamps();

            $table->foreign('producer_id')->references('id')->on('producers');
        });
        Schema::create('orders', function (Blueprint $table)
        {
            $table->increments('id')->unsigned();
            $table->integer('user_id')->unsigned();
            $table->string('adress');
            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users');
        });

        Schema::create('categories_products', function (Blueprint $table)
        {
            $table->integer('product_id')->unsigned();
            $table->integer('category_id')->unsigned();
            $table->timestamps();

            $table->foreign('product_id')->references('id')->on('products');
            $table->foreign('category_id')->references('id')->on('categories');
        });

        Schema::create('order_products', function (Blueprint $table)
        {
            $table->integer('quant');
            $table->integer('order_id')->unsigned();
            $table->integer('product_id')->unsigned();
            $table->timestamps();

            $table->foreign('product_id')->references('id')->on('products');
            $table->foreign('order_id')->references('id')->on('orders');

        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('order_products');
        Schema::dropIfExists('categories_products');
        Schema::dropIfExists('orders');
        Schema::dropIfExists('products');
        Schema::dropIfExists('categories');
        Schema::dropIfExists('producers');





    }
}
