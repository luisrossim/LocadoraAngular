import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtorRoutingModule } from './ator-routing.module';
import { AtorListComponent } from './ator-list/ator-list.component';
import { AtorFormComponent } from './ator-form/ator-form.component';
import { AtorComponent } from './ator.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AtorListComponent,
    AtorFormComponent,
    AtorComponent
  ],
  imports: [
    CommonModule,
    AtorRoutingModule,
    ReactiveFormsModule
  ]
})
export class AtorModule { }
