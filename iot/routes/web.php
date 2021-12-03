<?php

use App\Http\Controllers\FirebaseController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {           
    return view('admin.dashboard'); 
});
Route::get('/fire', function () {  
    $fireBase = new FirebaseController();         
    return response()->json([100,1,331,1,1,1,51,143,1,1,1,1,1,61,1]);
});

Route::get('/dashboard', function () {           
    return view('admin.dashboard'); 
});
Route::get('/control', function () {           
    return view('admin.control'); 
});

