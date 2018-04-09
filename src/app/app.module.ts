import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { PlanetsPage } from '../pages/planets/planets';
import { PeoplePage } from '../pages/people/people';
import { TabsPage } from '../pages/tabs/tabs';
import { StarshipsPage } from '../pages/starships/starships';
import { ItemdetailsPage } from '../pages/itemdetails/itemdetails';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http';
import { RestProvider } from '../providers/rest/rest';

@NgModule({
  declarations: [
    MyApp,
    StarshipsPage,
    PlanetsPage,
    PeoplePage,
    TabsPage,
    ItemdetailsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    StarshipsPage,
    PlanetsPage,
    PeoplePage,
    TabsPage,
    ItemdetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider
  ]
})
export class AppModule {}
