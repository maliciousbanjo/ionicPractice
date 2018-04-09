import { Component } from '@angular/core';

import { StarshipsPage } from '../starships/starships';
import { PlanetsPage } from '../planets/planets';
import { PeoplePage } from '../people/people';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PeoplePage;
  tab2Root = StarshipsPage;
  tab3Root = PlanetsPage;

  constructor() { 
    
  }
}