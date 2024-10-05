<?php

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Route;

Route::get('/weather', function (Illuminate\Http\Request $request) {
    $city = $request->query('city');
    $apiKey = env('OPENWEATHER_API_KEY');
    
    $response = Http::get("https://api.openweathermap.org/data/2.5/weather", [
        'q' => $city,
        'appid' => $apiKey,
        'units' => 'metric' // or 'imperial' for Fahrenheit
    ]);

    return $response->json();
});


