import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PartidasPage } from '../partidas/partidas';
import { PartidaList, PartidasProvider } from '../../providers/partidas/partidas';

/**
 * Generated class for the EstatisticaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-estatistica',
  templateUrl: 'estatistica.html',
})
export class EstatisticaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EstatisticaPage');
  }

  callPartidasPage(){
    this.navCtrl.push(PartidasPage);
  }

}
