<?php

namespace App\Http\Controllers;

use App\Category;
use App\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller
{
    //
    public function showProducts(){
        $products = Product::leftjoin('order_products', 'id', '=', 'product_id')
            ->select(DB::raw('sum(quant) as max '), 'id','name', 'image_path', 'price')->groupBy('id')
            ->orderBy('max', 'desc')->take(12)->get();
        return response()->json($products);
    }

    public function showProductsInCategory($id) {
        $products = Category::find($id)->products()->paginate(2);
        return response()->json($products);
    }

    public function showProduct($id){
        $product = Product::find($id);
        return response()->json($product);
    }
}
