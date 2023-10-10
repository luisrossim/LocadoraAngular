import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    ReactiveFormsModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    DynamicDialogModule,
    ToastModule,
    ConfirmDialogModule
  ],
  providers: [ConfirmationService]
})
export class SharedModule { }
