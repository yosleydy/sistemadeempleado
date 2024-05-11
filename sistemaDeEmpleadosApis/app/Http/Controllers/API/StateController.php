<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\State;
use Illuminate\Http\Request;

class StateController extends Controller
{
    //
    public function getAll(){
        $data = State::all();
        return response()->json($data, 200);
      }
}
