<?php


namespace App\Repositories;


interface AccessTokenRepositoryInterface
{
    /**
     * @param $accessToken
     * @return void
     */
    public function save($accessToken): void;

    /**
     * @return string
     */
    public function findAccessToken(): string;
}