import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Partidas, PartidasProvider } from '../../providers/partidas/partidas';

/**
 * Generated class for the AddTimePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-time',
  templateUrl: 'add-time.html',
})
export class AddTimePage {

  partida: Partidas;
  key: string;
 

  constructor(public navCtrl: NavController, public navParams: NavParams, private partidasPdvr: PartidasProvider, private toast: ToastController) {
    if (this.navParams.data.contact && this.navParams.data.key) {
      this.partida = this.navParams.data.contact;
      this.key =  this.navParams.data.key;
    } else {
      this.partida = new Partidas();
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddTimePage');
  }

  save() {
    this.saveContact()
      .then(() => {
        this.toast.create({ message: 'Contato salvo.', duration: 3000, position: 'botton' }).present();
        this.navCtrl.pop();
      })
      .catch(() => {
        this.toast.create({ message: 'Erro ao salvar o contato.', duration: 3000, position: 'botton' }).present();
      });
  }
 
  private saveContact() {
    if (this.key) {
      return this.partidasPdvr.update(this.key, this.partida);
    } else {
      return this.partidasPdvr.insert(this.partida);
    }
  }
 

}
