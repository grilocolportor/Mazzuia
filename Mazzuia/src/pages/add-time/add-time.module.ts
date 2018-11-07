import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddTimePage } from './add-time';

@NgModule({
  declarations: [
    AddTimePage,
  ],
  imports: [
    IonicPageModule.forChild(AddTimePage),
  ],
})
export class AddTimePageModule {}
