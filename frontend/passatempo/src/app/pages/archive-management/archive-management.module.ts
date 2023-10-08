import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArchiveManagementRoutingModule } from './archive-management-routing.module';
import { ArchiveManagementComponent } from './archive-management.component';


@NgModule({
  declarations: [
    ArchiveManagementComponent
  ],
  imports: [
    CommonModule,
    ArchiveManagementRoutingModule
  ]
})
export class ArchiveManagementModule { }
