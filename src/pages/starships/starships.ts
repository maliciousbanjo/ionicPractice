import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-starships',
  templateUrl: 'starships.html'
})
export class StarshipsPage {

  starships: any;
  constructor(public navCtrl: NavController, public restProvider: RestProvider) {
    this.getStarships();
  }

  getStarships() {
    this.restProvider.getStarships()
    .then((data: any) => {
      this.starships = data.results;
      console.log(this.starships);
    });
  }
}