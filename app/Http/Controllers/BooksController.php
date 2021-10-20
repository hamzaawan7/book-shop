<?php

namespace App\Http\Controllers;

use App\Models\Books;
use App\Repositories\AccessTokenRepository;
use App\Repositories\BooksRepository;
use App\Services\Shopify\ShopifyStore;
use Faker\Generator as Faker;

/**
 * Class BooksController
 * @package App\Http\Controllers
 */
class BooksController extends Controller
{
    /**
     * @var AccessTokenRepository
     */
    private $accessTokenRepository;
    /**
     * @var ShopifyStore
     */
    private $shopifyStore;
    /**
     * @var BooksRepository
     */
    private $booksRepository;
    /**
     * @var Faker
     */
    private $faker;

    /**
     * BooksController constructor.
     * @param AccessTokenRepository $accessTokenRepository
     * @param ShopifyStore $shopifyStore
     * @param BooksRepository $booksRepository
     * @param Faker $faker
     */
    public function __construct(
        AccessTokenRepository $accessTokenRepository,
        ShopifyStore $shopifyStore,
        BooksRepository $booksRepository,
        Faker $faker
    ) {
        $this->accessTokenRepository = $accessTokenRepository;
        $this->shopifyStore = $shopifyStore;
        $this->booksRepository = $booksRepository;
        $this->faker = $faker;
    }

    /**
     * @return array
     */
    public function index(): array
    {
        $accessToken = $this->accessTokenRepository->findAccessToken();
        $books = $this->shopifyStore->getAllProducts($accessToken);
        $allBooks = [];

        foreach ($books as $bookSP) {
            $bookDB = $this->booksRepository->save($bookSP, $this->faker);
            $allBooks[] = [
                'shopify_product_id' => $bookDB->shopify_product_id,
                'title'              => $bookSP->title,
                'author'             => $bookDB->author,
                'price'              => $bookSP->variants[0]->price,
            ];
        }

        return $allBooks;
    }

    /**
     * @param $bookId
     * @return array
     */
    public function show($bookId): array
    {
        $accessToken = $this->accessTokenRepository->findAccessToken();

        $bookSP = $this->shopifyStore->getByProductId($accessToken, $bookId);
        $bookDB = $this->booksRepository->getByShopifyId($bookId);

        return [
            'shopify_product_id' => $bookDB->shopify_product_id,
            'image'              => $bookSP['image']->src,
            'title'              => $bookSP['title'],
            'author'             => $bookDB->author,
            'price'              => $bookSP['variants'][0]->price,
            'pages'              => $bookDB->no_of_pages,
        ];
    }
}
