<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('Home');
});

Route::get('/portofolio', function () {
    return view('Portofolio');
});

Route::get('/contact', function () {
    return view('Contact');
});


Route::get('/{any}', function () {
    return view('404');
})->where('any', '.*');
