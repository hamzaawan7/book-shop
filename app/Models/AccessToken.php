<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class AccessToken
 * @package App
 *
 * @property string access_token
 */
class AccessToken extends Model
{
    protected $table = 'access_token';

    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = [
        'access_token',
    ];
}
