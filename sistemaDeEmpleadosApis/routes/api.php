<?php

use App\Http\Controllers\API\AreaController;
use App\Http\Controllers\API\CountriesController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\EmployeesController;
use App\Http\Controllers\API\IdentificationController;
use App\Http\Controllers\API\StateController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::prefix('employees')->group(function () {
    Route::get('/',[ EmployeesController::class, 'getAll']);
    Route::post('/',[ EmployeesController::class, 'create']);

    Route::get('/countries',[ CountriesController::class, 'getAll']);
    Route::get('/areas',[ AreaController::class, 'getAll']);
    Route::get('/state',[ StateController::class, 'getAll']);
    Route::get('/typeIdentification',[ IdentificationController::class, 'getAll']);


    Route::get('/{id}',[ EmployeesController::class, 'get']);
    Route::put('/{id}',[ EmployeesController::class, 'update']);
    Route::delete('/{id}',[ EmployeesController::class, 'destroy']);
});
