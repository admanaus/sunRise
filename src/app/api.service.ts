import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // We use this weatehr api get a lat & lon off a zipcode.
  weatherApiKey: string = "cc8ef8e5c209d938ab3801daa42b5e31";
  weatherUrl: string = "http://api.openweathermap.org/geo/1.0/zip?";

  sunUrl: string = "http://api.sunrise-sunset.org/json?";

  constructor(private http: HttpClient) { }

  getLatAndLon(zipcode: string){
    return this.http.get(
      this.weatherUrl + "zip=" + zipcode + 
      "&appid=" + this.weatherApiKey)
  }

  getSunInfo(lat: string, lon: string){
    return this.http.get(this.sunUrl + "lat=" + lat + "&lng=" + lon)
  }
}
