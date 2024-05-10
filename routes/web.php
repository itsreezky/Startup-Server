<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('Home');
});

Route::get('/portofolio', function () {
    return view('Portofolio');
});
