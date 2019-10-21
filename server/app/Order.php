<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    public $table='orders';
    function products()
    {
        return $this->belongsToMany('App\Product', 'order_products')->withPivot('quant');
    }
}
