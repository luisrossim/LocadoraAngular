import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtorRoutingModule } from './ator-routing.module';
import { AtorComponent } from './ator/ator.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    AtorComponent
  ],
  imports: [
    CommonModule,
    AtorRoutingModule,
    SharedModule
  ]
})
export class AtorModule { }
