<?php


namespace App\Repositories;


use App\Models\Books;

interface BooksRepositoryInterface
{
    /**
     * @param $bookSP
     * @param $faker
     * @return Books
     */
    public function save($bookSP, $faker): Books;

    /**
     * @param $shopifyId
     * @return Books
     */
    public function getByShopifyId($shopifyId);
}
