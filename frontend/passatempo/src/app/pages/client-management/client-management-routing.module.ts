import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientManagementComponent } from './client-management.component';
import { SocioComponent } from './socio/socio.component';
import { DependenteComponent } from './dependente/dependente.component';

const routes: Routes = [
  {
    path: '',
    component: ClientManagementComponent
  },
  {
    path: 'socio',
    component: SocioComponent
  },
  {
    path: 'dependente',
    component: DependenteComponent
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientManagementRoutingModule { }
