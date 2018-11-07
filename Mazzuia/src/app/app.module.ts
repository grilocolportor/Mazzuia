import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, Component } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, NavController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ComponentsModule } from '../components/components.module';
import { EstatisticaPageModule } from '../pages/estatistica/estatistica.module';
import { PartidasProvider } from '../providers/partidas/partidas';
import { IonicStorageModule } from '@ionic/storage';
import { PartidasPageModule } from '../pages/partidas/partidas.module';
import { DatePipe } from '@angular/common';
import { AddTimePageModule } from '../pages/add-time/add-time.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ComponentsModule,
    EstatisticaPageModule,
    IonicStorageModule.forRoot(),
    PartidasPageModule,
    AddTimePageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PartidasProvider,
    DatePipe,
  ]
})
export class AppModule {}
