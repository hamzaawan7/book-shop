<?php

namespace App\Http\Controllers;

use App\Repositories\AccessTokenRepository;
use App\Services\Shopify\ShopifyStore;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;

/**
 * Class ShopifyController
 * @package App\Http\Controllers
 */
class ShopifyController extends Controller
{
    /**
     * @var ShopifyStore
     */
    private $shopifyStore;
    /**
     * @var AccessTokenRepository
     */
    private $accessTokenRepository;

    /**
     * ShopifyController constructor.
     * @param ShopifyStore $shopifyStore
     * @param AccessTokenRepository $accessTokenRepository
     */
    public function __construct(ShopifyStore $shopifyStore, AccessTokenRepository $accessTokenRepository)
    {
        $this->shopifyStore = $shopifyStore;
        $this->accessTokenRepository = $accessTokenRepository;
    }

    /**
     * @return RedirectResponse
     */
    public function connect(): RedirectResponse
    {
        $redirectUrl = $this->shopifyStore->connect();

        return redirect()->to($redirectUrl);
    }

    /**
     * @param Request $request
     * @return RedirectResponse
     */
    public function verifyOauth(Request $request): RedirectResponse
    {
        $accessToken = $this->shopifyStore->getAccessToken($request->code);
        $this->accessTokenRepository->save($accessToken);

        return redirect()->to('home');
    }
}
