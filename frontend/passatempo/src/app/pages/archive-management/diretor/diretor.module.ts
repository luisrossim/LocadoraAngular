import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiretorRoutingModule } from './diretor-routing.module';
import { DiretorListComponent } from './diretor-list/diretor-list.component';
import { DiretorFormComponent } from './diretor-form/diretor-form.component';


@NgModule({
  declarations: [
    DiretorListComponent,
    DiretorFormComponent
  ],
  imports: [
    CommonModule,
    DiretorRoutingModule
  ]
})
export class DiretorModule { }
