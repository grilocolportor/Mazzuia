import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PartidasPage } from './partidas';
import { PartidasProvider } from '../../providers/partidas/partidas';

@NgModule({
  declarations: [
    PartidasPage,
  ],
  imports: [
    IonicPageModule.forChild(PartidasPage),
  ],
})
export class PartidasPageModule {}
