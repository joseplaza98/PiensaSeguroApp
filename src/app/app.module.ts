import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

/** Menus de navegacion */
import { HomePage } from '../pages/home/home';
import { ContenidoPage } from '../pages/contenido/contenido';
import { ContenidoSrPage } from '../pages/contenido-sr/contenido-sr';


/** Videos de aprendizaje */
import { SeguridadRedesPage } from '../pages/seguridad-redes/seguridad-redes';


/** Formularios de aprendizaje */
import { SegRedFormularioPage } from '../pages/seg-red-formulario/seg-red-formulario';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ContenidoPage,
    ContenidoSrPage,
    SeguridadRedesPage,
    SegRedFormularioPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ContenidoPage,
    ContenidoSrPage,
    SeguridadRedesPage,
    SegRedFormularioPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
