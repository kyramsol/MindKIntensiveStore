<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;
class InitDb extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('producer', function ( $table)
        {
            $table->increments('id');
            $table->string('name');
            $table->text("description");
            $table->timestamps();
        });
        Schema::create('category', function ( $table)
        {
            $table->increments('id');
            $table->string('name');
            $table->integer("parent_id");
            $table->timestamps();
        });


    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {

        Schema::dropIfExists('producer');
        Schema::dropIfExists('category');

    }
}
