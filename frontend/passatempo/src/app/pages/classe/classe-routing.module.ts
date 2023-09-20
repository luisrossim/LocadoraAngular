import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClasseComponent } from './classe.component';
import { classeResolver } from 'src/app/core/guards/classe.resolver';
import { ClasseFormComponent } from './classe-form/classe-form.component';

const routes: Routes = [
  { path: '', component: ClasseComponent },
  { path: 'new', component: ClasseFormComponent, resolve: { classe: classeResolver} },
  { path: 'edit/:id', component: ClasseFormComponent, resolve: { classe: classeResolver } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClasseRoutingModule { }
