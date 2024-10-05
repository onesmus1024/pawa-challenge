<?php

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Route;

Route::get('/', function (Illuminate\Http\Request $request) {
    $city = $request->query('city') ?? 'London';
    $apiKey = env('OPENWEATHER_API_KEY');
    
    // Fetching weather data for a single city
    $singleCityResponse = Http::get("https://api.openweathermap.org/data/2.5/weather", [
        'q' => $city,
        'appid' => $apiKey,
        'units' => 'metric' // or 'imperial' for Fahrenheit
    ]);

    // Handling the response to ensure proper data is returned
    if ($singleCityResponse->failed()) {
        return response()->json(['error' => 'Unable to fetch weather data for the city'], 500);
    }

    $lat = $singleCityResponse->json()['coord']['lat'] ?? null;
    $lon = $singleCityResponse->json()['coord']['lon'] ?? null;
    
    if (!$lat || !$lon) {
        return response()->json(['error' => 'Invalid coordinates for the city'], 500);
    }

    $cnt = 7;
    
    // Fetching forecast data
    $forecastResponse = Http::get("https://api.openweathermap.org/data/2.5/forecast", [
        'lat' => $lat,
        'lon' => $lon,
        'appid' => $apiKey,
        'units' => 'metric',
        'cnt' => $cnt
    ]);

    if ($forecastResponse->failed()) {
        return response()->json(['error' => 'Unable to fetch forecast data'], 500);
    }

    // Adding forecast data to the single city response
    $weatherData = $singleCityResponse->json();
    $weatherData['forecast'] = array_slice($forecastResponse->json()['list'], 0, 3);

    return response()->json($weatherData);
});