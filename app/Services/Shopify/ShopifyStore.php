<?php

namespace App\Services\Shopify;

use Oseintow\Shopify\Facades\Shopify;

/**
 * Class ShopifyStore
 * @package App\Services\Shopify
 */
class ShopifyStore
{
    /**
     * @return mixed
     */
    public function connect()
    {
        $scope = ["write_products", "read_orders"];
        $shopify = Shopify::setShopUrl(env("SHOP_URL"));

        return $shopify->getAuthorizeUrl($scope, env("REDIRECT_URL"));
    }

    /**
     * @param $code
     * @return mixed
     */
    public function getAccessToken($code)
    {
        return Shopify::setShopUrl(env("SHOP_URL"))->getAccessToken($code);
    }

    /**
     * @param $accessToken
     * @return mixed
     */
    public function getAllProducts($accessToken)
    {
        return Shopify::setShopUrl(env("SHOP_URL"))->setAccessToken($accessToken)->get("admin/products.json");
    }

    /**
     * @param $accessToken
     * @param $productId
     * @return mixed
     */
    public function getByProductId($accessToken, $productId)
    {
        return Shopify::setShopUrl(env("SHOP_URL"))->setAccessToken($accessToken)->get(
            "admin/products/{$productId}.json"
        );
    }
}