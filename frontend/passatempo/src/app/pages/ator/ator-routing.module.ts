import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtorFormComponent } from './ator-form/ator-form.component';
import { atorResolver } from 'src/app/core/guards/ator.resolver';
import { AtorComponent } from './ator.component';

const routes: Routes = [
  { path: '', component: AtorComponent },
  { path: 'new', component: AtorFormComponent, resolve: { ator: atorResolver} },
  { path: 'edit/:id', component: AtorFormComponent, resolve: { ator: atorResolver } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtorRoutingModule { }
