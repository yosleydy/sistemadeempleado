<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Countries;
use Illuminate\Http\Request;

class CountriesController extends Controller
{
    //
    public function getAll(){
        $data = Countries::all();
        return response()->json($data, 200);
      }
}
