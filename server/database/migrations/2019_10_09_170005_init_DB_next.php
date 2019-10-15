<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class InitDBNext extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('product', function ( $table)
        {
            $table->increments('id');
            $table->string('name');
            $table->integer("price");
            $table->integer('count');
            $table->string('image_path');
            $table->integer('developer_id')->unsigned();
            $table->timestamps();

           $table->foreign('developer_id')->references('id')->on('category');
        });


        Schema::create('linking_table', function ( $table)
        {
            $table->integer('product_id');
            $table->integer('category_id');
            $table->timestamps();

            $table->foreign('product_id')->references('id')->on('product');
            $table->foreign('category_id')->references('id')->on('category');
        });
        Schema::create('orders', function ( $table)
        {
            $table->increments('id');
            $table->integer('user_id');
            $table->string('adress');
            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users');
        });
        Schema::create('order_products', function ( $table)
        {
            $table->integer('quantity');
            $table->integer('order_id');
            $table->string('product_id');
            $table->timestamps();

            $table->foreign('product_id')->references('id')->on('product');
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
        Schema::dropIfExists('linking_table');
        Schema::dropIfExists('orders');
        Schema::dropIfExists('order_products');
        Schema::dropIfExists('product');
    }
}
