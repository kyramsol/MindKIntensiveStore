<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    public $table="products";
    public function category(){
        return $this->belongsToMany('App\Category', 'categories_products');
    }
    function orders()
    {
        return $this->belongsToMany('App\Order', 'order_products')->withPivot('quant');
    }
}
