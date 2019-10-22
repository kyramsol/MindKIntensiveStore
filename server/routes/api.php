<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:api');

Route::get('/category', 'CategoryController@showCategories');

Route::get('/products', 'ProductController@showProducts');

Route::get('/product/{id}', 'ProductController@showProduct');

Route::get('category/{id}', 'CategoryController@showProductsInCategory');

Route::get('image', 'ProductController@showImage');