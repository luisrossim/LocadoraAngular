import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClasseListComponent } from './classe-list/classe-list.component';
import { ClasseFormComponent } from './classe-form/classe-form.component';

const routes: Routes = [
  {
    path: '',
    component: ClasseListComponent,
  },
  {
    path: 'new',
    component: ClasseFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClasseRoutingModule { }
