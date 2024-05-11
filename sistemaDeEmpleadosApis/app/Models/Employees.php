<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employees extends Model
{
    use HasFactory;

    protected $table = "employees";
    protected $fillable = [

        'name',
        'o_name',
        'lastname',
        's_lastname',
        'email',
        'n_identification',
        'country_id',
        'area_id',
        'state_id',
        'type_identification_id',
        'admision_at',
        'created_at',
    ];
}
