<?php

namespace App\Repositories;

use App\Models\Books;

/**
 * Class AccessTokenRepository
 * @package App\Repositories
 */
class BooksRepository implements BooksRepositoryInterface
{
    /**
     * @param $book
     * @return Books
     */
    public function save($bookSP, $faker)
    {
        $book = $this->getByShopifyId($bookSP->id);

        if (!$book) {
            $book = new Books();
            $book->shopify_product_id = $bookSP->id;
            $book->author = $faker->name;
            $book->no_of_pages = $faker->randomDigitNotNull;
            $book->wholesale_price = $bookSP->variants[0]->price;

            $book->save();
        }

        return $book;
    }

    /**
     * @param $shopifyId
     * @return Books
     */
    public function getByShopifyId($shopifyId)
    {
        return Books::where('shopify_product_id', $shopifyId)->first();
    }
}
