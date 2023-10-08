import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtorListComponent } from './ator-list/ator-list.component';
import { AtorFormComponent } from './ator-form/ator-form.component';

const routes: Routes = [
  {
    path: '',
    component: AtorListComponent,
  },
  {
    path: 'new',
    component: AtorFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtorRoutingModule { }
