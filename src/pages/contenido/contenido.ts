import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContenidoSrPage } from '../contenido-sr/contenido-sr';

/**
 * Generated class for the ContenidoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contenido',
  templateUrl: 'contenido.html',
})
export class ContenidoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

    aMenuSegRed() {
    this.navCtrl.push(ContenidoSrPage);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContenidoPage');
  }



}
