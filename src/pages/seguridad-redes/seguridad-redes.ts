import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SegRedFormularioPage } from '../seg-red-formulario/seg-red-formulario';


/**
 * Generated class for the SeguridadRedesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-seguridad-redes',
  templateUrl: 'seguridad-redes.html',
})
export class SeguridadRedesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  /** Mostrar y ocultar texto de la pagina*/

  ocultar1: boolean = false;
  ocultartodos: boolean = false;

  accion1() {
    this.ocultar1 = !this.ocultar1;
    this.checkActiveButton();
  }

  checkActiveButton() {

    if (this.ocultar1) {

      this.ocultartodos = true;
    }
    else if (!this.ocultar1) {

      this.ocultartodos = false;
    }
  }

  acciontodos() {

    if (this.ocultartodos === false) {

      this.ocultar1 = true;

    }
    else {

      this.ocultar1 = false;

    }

    this.ocultartodos = !this.ocultartodos;
  }


  aEvaluacion() {
    this.navCtrl.push(SegRedFormularioPage);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SeguridadRedesPage');
  }

}


