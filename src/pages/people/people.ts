import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { ItemdetailsPage } from '../itemdetails/itemdetails';

@Component({
  selector: 'page-people',
  templateUrl: 'people.html'
})
export class PeoplePage {
  people: any;
  
  constructor(public navCtrl: NavController, public restProvider: RestProvider) {
    this.getPeople();
  }

  getPeople() {
    this.restProvider.getPeople()
    .then((data: any) => {
      this.people = data.results;
      console.log(this.people);
    });
  }

  itemTapped(event, person) {
    this.navCtrl.push(ItemdetailsPage, {item: person})
  }
}