<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Relations\HasMany;


class Member extends Model
{
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'fullname',
        'phone',
        'email',
        'dob',
        'maritalStatus',
        'address',
        'stateOfOrigin',
        'nextOfKin',
        'nextOfKinPhone',
        'passportNumber',
        'passportImage',
        'employer',
        'institution',
        'occupation',
        'level_of_education',
        'gender',
        'LGA'
    ];

    public function passports(): HasMany
    {
        return $this->hasMany(Passport::class)->orderBy('created_at', 'desc');
    }

    public function visas(): HasMany
    {
        return $this->hasMany(Visa::class);
    }

    protected function currentPassport(): Attribute
    {
        return Attribute::make(
            get: fn($value, $attributes) => $attributes['passport']->latest()
        );
    }
}
