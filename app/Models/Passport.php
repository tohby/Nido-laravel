<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Passport extends Model
{
    use HasFactory;

    protected $fillable = [
        'member_id',
        'number',
        'image',
        'date_of_issue',
        'expiry_date'
    ];
}
