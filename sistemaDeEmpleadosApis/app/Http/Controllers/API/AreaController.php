<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Areas;
use Illuminate\Http\Request;

class AreaController extends Controller
{
    //
    public function getAll(){
        $data = Areas::all();
        return response()->json($data, 200);
      }
}
