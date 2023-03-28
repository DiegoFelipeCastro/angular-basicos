import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent /*ngonit*/ {
  heroes: string[] = ['Spiderman','Ironman','Hulk','Thor','Capitan america'];
  /*heroeBorradoLista: string[] = [];*/
  heroeBorrado: string = '';

  borrarHeroe() {
    /*console.log('borrando....');
    const heroeBorrado = this.heroes.shift();

      // let heroeBorradod = heroeBorrado;
      console.log(heroeBorrado);
      if(heroeBorrado == undefined){
        
      }else{
        this.heroeBorradoLista.push(heroeBorrado);
      }
      console.log(this.heroeBorradoLista);*/
      this.heroeBorrado = this.heroes.shift() || '';
    }
    
}