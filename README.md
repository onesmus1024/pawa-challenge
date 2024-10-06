# pawa-challenge
weather app that contains both frontend and backend and it live on "https://firstchoicedomestic.com/"

<!-- images -->

[weather-app]: ./image1.png

[weather-app]: ./image2.png
## Features

- Get the current weather for a city
- Get the weather forecast for a city
- Get the weather for a city for the next 5 days in 3-hour intervals




## Backend
The backend is a simple REST API that fetches weather data from the OpenWeatherMap API. The backend is 
laraavel based and can be found in the `weather-backend` directory. The backend can be run using the following commands:

```bash
cd weather-backend
composer install
cp .env.example .env

# Add your OpenWeatherMap API key to the .env file
# You can get an API key from https://openweathermap.org/api

```

## Frontend

The frontend is a next.js app that fetches weather data from the backend. The frontend can be run using the following commands:

```bash
cd weather-frontend
npm install

# Add your backend URL to the .env file

npm run dev
```

## Running the app

To run the app, you need to run both the backend and frontend. 

