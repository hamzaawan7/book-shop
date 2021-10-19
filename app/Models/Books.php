<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Books
 * @package App
 *
 * @property string shopify_product_id
 * @property string author
 * @property integer no_of_pages
 * @property double wholesale_price
 */
class Books extends Model
{
    protected $table = 'books';

    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = [
        'shopify_product_id',
        'no_of_pages',
        'author',
        'wholesale_price',
    ];

}
