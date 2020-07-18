<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;

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
    return view('welcome');
});

Route::post('/messageCreate', function(Request $request){
    $user = \App\User::find($request->user_id);
    $message = $user->messages()->create([
        'content' => $request->content,
        'receptor_id' => $request->receptor_id
    ]);
});

Route::get('/message', function(){
    return response(\App\Message::all());
});

Route::post('/contactCreate', function(){

});

Route::get('/contact', function(){
    return response(\App\Contact::all());
});
