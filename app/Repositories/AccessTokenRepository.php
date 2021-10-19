<?php

namespace App\Repositories;

use App\Models\AccessToken;

/**
 * Class AccessTokenRepository
 * @package App\Repositories
 */
class AccessTokenRepository implements AccessTokenRepositoryInterface
{
    /**
     * @param $accessToken
     */
    public function save($accessToken): void
    {
        $token = AccessToken::get()->first();

        if (!$token) {
            $token = new AccessToken;
        }

        $token->access_token = $accessToken;
        $token->save();
    }

    /**
     * @return string
     */
    public function findAccessToken(): string
    {
        return AccessToken::get()->first()->value('access_token');
    }
}