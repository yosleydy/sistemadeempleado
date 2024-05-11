<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Type_Identification;
use Illuminate\Http\Request;

class IdentificationController extends Controller
{
    //
    public function getAll(){
        $data = Type_Identification::all();
        return response()->json($data, 200);
      }
}
