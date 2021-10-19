<?php

namespace App\Http\Controllers;

use GuzzleHttp\Client;
use GuzzleHttp\Exception\RequestException;
use Guzzle\Http\Exception\ClientErrorResponseException;
use GuzzleHttp\Exception\ServerException;
use GuzzleHttp\Exception\BadResponseException;
use Illuminate\Support\Facades\DB;
use App\Books;
use App\AccessToken;
use Illuminate\Http\Request;
use Oseintow\Shopify\Facades\Shopify;

class BooksController extends Controller
{
    private $accessToken;

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $scope = ["write_products","read_orders"];
        $shopify = Shopify::setShopUrl(env("SHOP_URL"));
        return redirect()->to($shopify->getAuthorizeUrl($scope,env("REDIRECT_URL")));
    }

    public function verifyOath(Request $request)
    {
        $accessToken = Shopify::setShopUrl(env("SHOP_URL"))->getAccessToken($request->code);
        $ifAccessTokenExists = AccessToken::get()->first();
        if($ifAccessTokenExists == null)
        {
            $token = new AccessToken;
            $token->access_token = $accessToken;
            $token->save();
        }else{
            $token = AccessToken::get()->first();
            $token->access_token = $accessToken;
            $token->save();
        }
      
        return redirect()->to('http://localhost:8000/home');
    }

    public function showProducts()
    {
        $this->storeProducts();
        $books = \App\Books::get()->toArray();
        return $books;
    }

    public function storeProducts()
    {
        $accessToken = AccessToken::get()->first()->value('access_token');
        $products = Shopify::setShopUrl(env("SHOP_URL"))->setAccessToken($accessToken)->get("admin/products.json");
        foreach($products as $product)
        {
             $ifBookAlreadyExists = \App\Books::where('book_id',$product->id)->first();
             if(!$ifBookAlreadyExists)
             {
                $book = new Books;
                $book->book_id = $product->id;
                $book->author = $product->vendor;
                $book->wholesale_price = $product->variants[0]->price;
                $book->save();
             }else
             {
                $book = Books::where('book_id',$product->id)->first();
                $book->book_id = $product->id;
                $book->author = $product->vendor;
                $book->wholesale_price = $product->variants[0]->price;
                $book->save();
             }
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
