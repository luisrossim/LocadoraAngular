import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TituloListComponent } from './titulo-list/titulo-list.component';
import { TituloFormComponent } from './titulo-form/titulo-form.component';

const routes: Routes = [
  {
    path: '',
    component: TituloListComponent,
  },
  {
    path: 'new',
    component: TituloFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TituloRoutingModule { }
