import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PartidaList, PartidasProvider } from '../../providers/partidas/partidas';
import { AddTimePage } from '../add-time/add-time';

/**
 * Generated class for the PartidasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-partidas',
  templateUrl: 'partidas.html',
})
export class PartidasPage {
  
  partidas : PartidaList[];

  constructor(public navCtrl: NavController, public navParams: NavParams,  private partidasProvider: PartidasProvider) {
  }

  ionViewDidEnter(){
    this.partidasProvider.getAll()
    .then((result) => {
      this.partidas = result;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PartidasPage');
  }

  callAddTime(){
    this.navCtrl.push(AddTimePage)
  }

}
