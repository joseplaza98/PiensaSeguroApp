import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ContenidoPage } from '../contenido/contenido';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  aContenido() {
    this.navCtrl.push(ContenidoPage);

  }

  //** Arreglo items menu inicial */
  items = [
    { image: "http://ionic.io/img/2.png", name: 'Empezar' },
    { image: "http://ionic.io/img/2.png", name: 'Prólogo' },
    { image: "http://ionic.io/img/2.png", name: 'Propósito' },
    { image: "http://ionic.io/img/2.png", name: 'Contenido' },];

//** navegacion del menu inicial */
  itemSelected(item) {
    this.navCtrl.push(ContenidoPage, { item: item });
  }


  
  /**
    
            <button class="btnMenu" (click)="aContenido()">
                Empezar
                <br/>
              <ion-icon name="md-arrow-dropright-circle"></ion-icon>
              </button>
  
              <button class="btnMenu" (click)="mIntroduccion()">
              Introducción
              <br/>
              <ion-icon name="md-attach"></ion-icon>
            </button>
  
   
            <button class="btnMenu" (click)="mProposito()">
              Propósito
              <br/>
              <ion-icon name="md-bookmarks"></ion-icon>
              </button>
  
  
         
            <button class="btnMenu" (click)="mIntroduccion()">
              Contenido
              <br/>
              <ion-icon name="md-briefcase"></ion-icon>
            </button>
  
  
   */

}
