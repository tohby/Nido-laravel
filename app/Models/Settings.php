<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Settings extends Model
{
    use HasFactory;

    protected $fillable = ['key', 'value', 'type'];

    public function getValueAttribute($value)
    {
        switch ($this->type) {
            case 'integer':
                return (int) $value;
            case 'boolean':
                return (bool) $value;
            case 'json':
                return json_decode($value, true);
            default:
                return $value;
        }
    }

    public function setValueAttribute($value)
    {
        switch (gettype($value)) {
            case 'integer':
                $this->attributes['value'] = (int) $value;
                $this->attributes['type'] = 'integer';
                break;
            case 'boolean':
                $this->attributes['value'] = (bool) $value;
                $this->attributes['type'] = 'boolean';
                break;
            case 'array':
                $this->attributes['value'] = json_encode($value);
                $this->attributes['type'] = 'json';
                break;
            default:
                $this->attributes['value'] = $value;
                $this->attributes['type'] = 'string';
                break;
        }
    }
}
