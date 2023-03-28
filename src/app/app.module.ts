import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

//tarea:
//crear un modulo llamado contadormodule
//declaraciones, y exportaciones
import { HeroesModule } from './heroes/heroes.module';
import { ContadorModules } from './contador/contador.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [/*se importan los modulos de otro modulo */
    BrowserModule,
    HeroesModule,
    ContadorModules
    //importar aqui
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
