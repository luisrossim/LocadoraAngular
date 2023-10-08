import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiretorListComponent } from './diretor-list/diretor-list.component';
import { DiretorFormComponent } from './diretor-form/diretor-form.component';

const routes: Routes = [
  {
    path: '',
    component: DiretorListComponent,
  },
  {
    path: 'new',
    component: DiretorFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiretorRoutingModule { }
