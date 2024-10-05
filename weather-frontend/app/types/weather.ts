import exp from "constants";

interface Coord {
    readonly lon: number;
    readonly lat: number;
  }
  
  interface Weather {
    readonly id: number;
    readonly main: string;
    readonly description: string;
    readonly icon: string;
  }
  
  interface MainWeatherData {
    readonly temp: number;
    readonly feelsLike: number;
    readonly tempMin: number;
    readonly tempMax: number;
    readonly pressure: number;
    readonly humidity: number;
    readonly seaLevel?: number;
    readonly grndLevel?: number;
  }
  
  interface Wind {
    readonly speed: number;
    readonly deg: number;
  }
  
  interface Clouds {
    readonly all: number;
  }
  
  interface Sys {
    readonly type: number;
    readonly id: number;
    readonly country: string;
    readonly sunrise: number;
    readonly sunset: number;
  }
  
  interface WeatherResponse {
    readonly coord: Coord;
    readonly weather: ReadonlyArray<Weather>;
    readonly base: string;
    readonly main: MainWeatherData;
    readonly visibility: number;
    readonly wind: Wind;
    readonly clouds: Clouds;
    readonly dt: number;
    readonly sys: Sys;
    readonly timezone: number;
    readonly id: number;
    readonly name: string;
    readonly cod: number;
    forecast: any[];
  }

  
  export type { WeatherResponse, MainWeatherData, Weather, Coord, Wind, Clouds, Sys };