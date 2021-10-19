<?php


namespace App\Repositories;


use App\Models\Books;

interface BooksRepositoryInterface
{
    /**
     * @param $book
     * @return Books
     */
    public function save($book): Books;

    /**
     * @param $shopifyId
     * @return Books
     */
    public function getByShopifyId($shopifyId): Books;
}