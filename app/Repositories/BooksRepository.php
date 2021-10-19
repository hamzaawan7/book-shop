<?php

namespace App\Repositories;

use App\Models\Books;
use Faker\Generator as Faker;

/**
 * Class AccessTokenRepository
 * @package App\Repositories
 */
class BooksRepository implements BooksRepositoryInterface
{
    /**
     * @var Faker
     */
    private $faker;

    /**
     * @param Faker $faker
     */
    public function setFaker(Faker $faker): void
    {
        $this->faker = $faker;
    }

    /**
     * @param $book
     * @return Books
     */
    public function save($book): Books
    {
        $book = $this->getByShopifyId($book->id);

        if (!$book) {
            $book = new Books();

            $book->shopify_product_id = $book->id;
            $book->author = $this->faker->name;
            $book->no_of_pages = $this->faker->randomDigitNotNull;
            $book->wholesale_price = $book->variants[0]->price;

            $book->save();
        }

        return $book;
    }

    /**
     * @param $shopifyId
     * @return Books
     */
    public function getByShopifyId($shopifyId): Books
    {
        return Books::where('shopify_product_id', $shopifyId)->first();
    }
}