<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/home', function () {
    return view('welcome');
});


Route::get('/', 'BooksController@index');
Route::get('process_oauth_result', 'BooksController@verifyOath');
Route::get('products', 'BooksController@showProducts');
Route::get('books/get-book/{id}', 'BooksController@getBook');