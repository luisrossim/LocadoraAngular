import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClasseRoutingModule } from './classe-routing.module';
import { ClasseListComponent } from './classe-list/classe-list.component';
import { ClasseFormComponent } from './classe-form/classe-form.component';
import { ClasseComponent } from './classe.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';


@NgModule({
  declarations: [
    ClasseComponent,
    ClasseFormComponent,
    ClasseListComponent
  ],
  imports: [
    CommonModule,
    ClasseRoutingModule,
    ReactiveFormsModule,
    ConfirmDialogModule
  ],
  providers: [ConfirmationService]
})
export class ClasseModule { }
