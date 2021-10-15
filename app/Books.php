<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Books extends Model
{
   
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = [
        'book_id',
        'no_of_pages',
        'author',
        'wholesale_price',
    ];
}
