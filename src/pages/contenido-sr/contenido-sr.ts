import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SeguridadRedesPage } from '../seguridad-redes/seguridad-redes';

/**
 * Generated class for the ContenidoSrPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contenido-sr',
  templateUrl: 'contenido-sr.html',
})
export class ContenidoSrPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  aSegRedes(){
    this.navCtrl.push(SeguridadRedesPage);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContenidoSrPage');
  }

}
