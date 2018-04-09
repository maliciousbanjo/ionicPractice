import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-planets',
  templateUrl: 'planets.html'
})
export class PlanetsPage {

  planets: any;
  constructor(public navCtrl: NavController, public restProvider: RestProvider) {
    this.getPlanets();
  }

  getPlanets() {
    this.restProvider.getPlanets()
    .then((data: any) => {
      this.planets = data.results;
      console.log(this.planets);
    });
  }
}
