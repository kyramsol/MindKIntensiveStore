<?php

namespace App\Http\Controllers;

use App\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller
{
    //
    public function ShowProducts(){
        $products=DB::table('products')
            ->leftjoin('order_products', 'id', '=', 'product_id')
            ->select('*')
            ->orderBy('quant', 'desc')->take(12)->get();
        return response()->json($products)->header('Access-Control-Allow-Origin',"*");
    }
    public function ShowProduct($id){
        $product=Product::find($id);
        return response()->json($product)->header('Access-Control-Allow-Origin', '*');
    }
}
