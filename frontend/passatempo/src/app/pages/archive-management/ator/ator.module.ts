import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtorRoutingModule } from './ator-routing.module';
import { AtorListComponent } from './ator-list/ator-list.component';
import { AtorFormComponent } from './ator-form/ator-form.component';


@NgModule({
  declarations: [
    AtorListComponent,
    AtorFormComponent
  ],
  imports: [
    CommonModule,
    AtorRoutingModule
  ]
})
export class AtorModule { }
