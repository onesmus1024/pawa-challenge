'use client';
import React, { useState, useEffect } from 'react';
import { WeatherResponse } from '../types/weather';
import { dateFormatter } from '../utils/dataFormatter';

const WeatherSearch: React.FC = () => {
    const [city, setCity] = useState('Nairobi');
    const [error, setError] = useState('');
    const [unit, setUnit] = useState('metric');
    const [searchedCity, setSearchedCity] = useState('');
    const [weatherData, setWeatherData] = useState<WeatherResponse | null>(null);
    const [loading, setLoading] = useState(false);

    const fetchWeather = async () => {
        setLoading(true);
        setError(''); // Clear previous errors
        try {
            const response = await fetch(
                `https://backend.firstchoicedomestic.com/?city=${city}&units=${unit}`
            );

            if (!response.ok) {
                setLoading(false);
                setError(`Failed to fetch weather data for the city "${city}".`);
                return;
            }

            const data = await response.json();
            setWeatherData(data);
            setSearchedCity(city);
        } catch (error) {
            console.error('Error fetching weather data:', error);
            setError('An unexpected error occurred. Please try again later.');
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchWeather();
    }, [unit]);

    let iconurl = '';
    if (weatherData) {
        iconurl = `http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-500 to-blue-900 text-white">
            <div className="container mx-auto px-4 py-8">
                {/* Search and Unit Toggle */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                    <div className="flex items-center space-x-4 mb-4 md:mb-0">
                        <input
                            type="text"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            placeholder="Enter city name"
                            className="px-4 py-2 rounded-md text-black focus:outline-none"
                        />
                        <button
                            onClick={fetchWeather}
                            className="px-4 py-2 bg-blue-700 hover:bg-blue-800 rounded-md"
                        >
                            Search
                        </button>
                    </div>
                    <div className="flex space-x-2">
                        <button
                            onClick={() => setUnit('metric')}
                            className={`px-4 py-2 rounded-md ${unit === 'metric' ? 'bg-blue-700' : 'bg-blue-600 hover:bg-blue-700'
                                }`}
                        >
                            °C
                        </button>
                        <button
                            onClick={() => setUnit('imperial')}
                            className={`px-4 py-2 rounded-md ${unit === 'imperial' ? 'bg-blue-700' : 'bg-blue-600 hover:bg-blue-700'
                                }`}
                        >
                            °F
                        </button>
                    </div>
                </div>

                {/* Error Message */}
                {error && (
                    <div className="mb-4 p-4 bg-red-600 text-white rounded-md">
                        {error}
                    </div>
                )}

                {/* Loading Spinner */}
                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-white"></div>
                    </div>
                ) : (
                    weatherData && (
                        <>
                            {/* Current Weather */}
                            <div className="text-center mb-8">
                                <div className="inline-block">
                                    <img
                                        src={iconurl}
                                        alt="weather icon"
                                        className="w-24 h-24 mx-auto"
                                    />
                                    <h1 className="text-6xl font-bold">
                                        {weatherData.main.temp}°{unit === 'metric' ? 'C' : 'F'}
                                    </h1>
                                    <p className="capitalize text-xl">
                                        {weatherData.weather[0].description}
                                    </p>
                                    <p className="mt-2 text-lg">
                                        {dateFormatter(new Date().toString())} <br />
                                        {searchedCity}
                                    </p>
                                </div>
                            </div>

                            {/* Forecast */}
                            <div className="mb-8">
                                <h2 className="text-2xl font-semibold mb-4">Forecast</h2>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {weatherData.forecast.map((forecast) => (
                                        <div
                                            className="bg-white bg-opacity-10 p-4 rounded-md text-center"
                                            key={forecast.dt}
                                        >
                                            <h3 className="text-lg font-medium">
                                                {dateFormatter(new Date(forecast.dt_txt).toString())}
                                            </h3>
                                            <img
                                                src={`http://openweathermap.org/img/w/${forecast.weather[0].icon}.png`}
                                                alt="weather icon"
                                                className="w-16 h-16 mx-auto"
                                            />
                                            <p className="mt-2">
                                                {forecast.main.temp_min}° - {forecast.main.temp_max}°
                                                {unit === 'metric' ? 'C' : 'F'}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Additional Info */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* Wind Status */}
                                <div className="bg-white bg-opacity-10 p-6 rounded-md">
                                    <h2 className="text-xl font-semibold mb-2">Wind Status</h2>
                                    <p className="text-4xl font-bold">
                                        {weatherData.wind.speed}{' '}
                                        {unit === 'metric' ? 'm/s' : 'mph'}
                                    </p>
                                    <p className="mt-1">Direction: {weatherData.wind.deg}°</p>
                                </div>

                                {/* Humidity */}
                                <div className="bg-white bg-opacity-10 p-6 rounded-md">
                                    <h2 className="text-xl font-semibold mb-2">Humidity</h2>
                                    <p className="text-4xl font-bold">
                                        {weatherData.main.humidity}%
                                    </p>
                                </div>
                            </div>
                        </>
                    )
                )}
            </div>
        </div>
    );
};

export default WeatherSearch;
