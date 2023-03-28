import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations:[/*componentes que contiene el modulo  */
        HeroeComponent,
        ListadoComponent
    ],
    exports: [/*públicos todos los componentes, para que se puedan visualizar en otro lado*/
        ListadoComponent
    ],
    imports: [/*solo se colocan los modulos unicamente */
        CommonModule
    ]
})
export class HeroesModule {}