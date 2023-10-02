import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtorRoutingModule } from './ator-routing.module';
import { AtorListComponent } from './ator-list/ator-list.component';
import { AtorFormComponent } from './ator-form/ator-form.component';
import { AtorComponent } from './ator.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';


@NgModule({
  declarations: [
    AtorListComponent,
    AtorFormComponent,
    AtorComponent
  ],
  imports: [
    CommonModule,
    AtorRoutingModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    ConfirmDialogModule
  ],
  providers: [ConfirmationService]
})
export class AtorModule { }
