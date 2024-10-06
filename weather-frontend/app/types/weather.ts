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

interface Main {
  readonly temp: number;
  readonly feels_like: number;
  readonly temp_min: number;
  readonly temp_max: number;
  readonly pressure: number;
  readonly humidity: number;
  readonly sea_level?: number;
  readonly grnd_level?: number;
  readonly temp_kf?: number;
}

interface Wind {
  readonly speed: number;
  readonly deg: number;
  readonly gust?: number;
}

interface Clouds {
  readonly all: number;
}

interface Sys {
  readonly type?: number;
  readonly id?: number;
  readonly country?: string;
  readonly sunrise?: number;
  readonly sunset?: number;
  readonly pod?: string;
}

interface WeatherData {
  dt: number;
  main: Main;
  weather: Weather[];
  clouds: Clouds;
  wind: Wind;
  visibility: number;
  pop: number;
  sys: Sys;
  dt_txt: string;
}

interface WeatherResponse {
  readonly coord: Coord;
  readonly weather: Weather[];
  readonly base: string;
  readonly main: Main;
  readonly visibility: number;
  readonly wind: Wind;
  readonly clouds: Clouds;
  readonly dt: number;
  readonly sys: Sys;
  readonly timezone: number;
  readonly id: number;
  readonly name: string;
  readonly cod: number;
  readonly forecast: WeatherData[];
}

export type { WeatherResponse, WeatherData, Main, Weather, Coord, Wind, Clouds, Sys };
