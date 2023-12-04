import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllocationManagementRoutingModule } from './allocation-management-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AllocationComponent } from './allocation/allocation.component';


@NgModule({
  declarations: [
    AllocationComponent
  ],
  imports: [
    CommonModule,
    AllocationManagementRoutingModule,
    SharedModule
  ]
})
export class AllocationManagementModule { }
