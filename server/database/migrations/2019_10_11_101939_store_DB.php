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
    {}

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
