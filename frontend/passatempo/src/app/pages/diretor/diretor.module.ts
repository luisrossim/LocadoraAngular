import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiretorRoutingModule } from './diretor-routing.module';
import { DiretorComponent } from './diretor.component';
import { DiretorListComponent } from './diretor-list/diretor-list.component';
import { DiretorFormComponent } from './diretor-form/diretor-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DiretorComponent,
    DiretorListComponent,
    DiretorFormComponent
  ],
  imports: [
    CommonModule,
    DiretorRoutingModule,
    ReactiveFormsModule
  ]
})
export class DiretorModule { }
