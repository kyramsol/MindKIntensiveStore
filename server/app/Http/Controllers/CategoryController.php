<?php

namespace App\Http\Controllers;

use App\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function showCategories() {
        $categories=Category::all();
        return response()->json($categories)->header('Access-Control-Allow-Origin',"*");
    }
    public function showProductsInCategory($id) {
        $products=Category::find($id)->products;
        return response()->json($products)->header('Access-Control-Allow-Origin', '*');
    }
}
