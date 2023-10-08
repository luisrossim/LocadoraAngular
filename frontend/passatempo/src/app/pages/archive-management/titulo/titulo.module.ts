import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TituloRoutingModule } from './titulo-routing.module';
import { TituloListComponent } from './titulo-list/titulo-list.component';
import { TituloFormComponent } from './titulo-form/titulo-form.component';


@NgModule({
  declarations: [
    TituloListComponent,
    TituloFormComponent
  ],
  imports: [
    CommonModule,
    TituloRoutingModule
  ]
})
export class TituloModule { }
