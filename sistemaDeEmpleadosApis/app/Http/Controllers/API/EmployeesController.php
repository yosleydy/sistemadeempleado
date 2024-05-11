<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Employees;
use App\Models\Type_Identification;
use Illuminate\Http\Request;

class EmployeesController extends Controller
{
    //
    public function getAll(){


        $employess = Employees::all();
        return response()->json($employess, 200);
      }

      public function create(Request $request){
        $data['name'] = $request['pName'];
        $data['o_name'] = $request['otherNames'];
        $data['lastname'] = $request['pLastName'];
        $data['s_lastname'] = $request['sLastName'];
        $data['email'] = $request['email'];
        $data['n_identification'] = $request['nId'];
        $data['country_id'] = $request['country']['id'];
        $data['area_id'] = $request['area']['id'];
        $data['state_id'] = 0;
        $data['type_identification_id'] = $request['typeID']['id'];
        $data['created_at'] = $request['dateR'];
        $data['admision_at'] = $request['dateI'];
        
        Employees::create($data);
        return response()->json([
            'message' => "Successfully created",
            'success' => true
        ], 200);
      }


      public function get($id){
        $data = Employees::find($id);
        return response()->json($data, 200);
      }


      public function update(Request $request,$id){

        $data['name'] = $request['name'];
        $data['o_name'] = $request['o_name'];
        $data['lastname'] = $request['lastname'];
        $data['s_lastname'] = $request['s_lastname'];
        $data['email'] = $request['email'];
        $data['n_identification'] = $request['nId'];
      
        
        Employees::find($id)->update($data);

        return response()->json([
            'message' => "Successfully updated",
            'success' => true
        ], 200);
      }


      public function destroy($id){
        $employee = Employees::find($id)->delete();
        return response()->json([
            'message' => "Successfully deleted",
            'success' => true
        ], 200);
      }
}
