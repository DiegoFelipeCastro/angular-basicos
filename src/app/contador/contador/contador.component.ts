import {Component} from '@angular/core';
/*impt y al tab */

@Component({
    selector:'app-contador',
    template:`
    <h1>{{titulo}}</h1>
    <h3>La base es: <strong>{{base}}</strong> </h3>

    <!-- <button (click)="numero = numero +1;"> +1</button> -->

    <button (click)="acumular(base);"> +{{base}}</button>

    <span>{{numero}}</span>

    <button (click)="acumular(-base);"> - {{base}}</button>
    `
})
export class ContadorComponent{ /*exportar utilizarla en otros lugares fuera del archivo*/
    titulo: string = 'Contador App';
    numero: number =10;

    // sumar(){ /*Es un metodo es necesario el this ya que
    // se hace refenrecia a la instancia */
    //   this.numero +=1;
    // }

    // restar(){
    //   this.numero -=1;
    // }

    base: number = 5;

    acumular (valor: number){
        this.numero += valor;
    }
}