import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientManagementRoutingModule } from './client-management-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { SocioComponent } from './socio/socio.component';
import { DependenteComponent } from './dependente/dependente.component';
import { ClientManagementComponent } from './client-management.component';


@NgModule({
  declarations: [
    SocioComponent,
    DependenteComponent,
    ClientManagementComponent
  ],
  imports: [
    CommonModule,
    ClientManagementRoutingModule,
    SharedModule
  ]
})
export class ClientManagementModule { }
