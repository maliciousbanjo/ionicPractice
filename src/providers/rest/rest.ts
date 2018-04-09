import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  apiUrl = 'https://swapi.co/api';

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  getPeople() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/people').subscribe(data => {
        resolve(data);
      }, (err) => {
        console.log(err);
      });
    });
  }

  getStarships() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/starships').subscribe(data => {
        resolve(data);
      }, (err) => {
        console.log(err);
      });
    });
  }

  getPlanets() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/planets').subscribe(data => {
        resolve(data);
      }, (err) => {
        console.log(err);
      });
    });
  }
}
