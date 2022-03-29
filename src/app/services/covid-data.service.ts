import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class CovidDataService {

  constructor(private http:HttpClient) {

   }
  users()
  {
    return this.http.get('https://api.covidtracking.com/v1/states/current.json')
  }
}
