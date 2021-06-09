import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  url = 'https://api.openweathermap.org/data/2.5/';
  key = 'f60c65983b6456d54b7832a23cd56aa7';
  city = 'Pekanbaru';

  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get<any>(`${this.url}weather?q=${this.city}&appid=${this.key}&units=metric`);
  }
}
