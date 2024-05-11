<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Type_Identification extends Model
{
    use HasFactory;

    protected $table = "type_identification";

    protected $fillable = ['name'];
}
