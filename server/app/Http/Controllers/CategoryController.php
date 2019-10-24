<?php

namespace App\Http\Controllers;

use App\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{

    public function showCategories() {
        $categories=Category::all();
        return response()->json($categories);
    }

    public function showProductsInCategory($id) {
        $products=Category::find($id)->products()->SimplePaginate(2);
        return response()->json($products);
    }

}
