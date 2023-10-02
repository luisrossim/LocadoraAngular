import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiretorComponent } from './diretor.component';
import { DiretorFormComponent } from './diretor-form/diretor-form.component';
import { diretorResolver } from 'src/app/core/guards/diretor.resolver';

const routes: Routes = [
  { path: '', component: DiretorComponent },
  { path: 'new', component: DiretorFormComponent, resolve: { diretor: diretorResolver} },
  { path: 'edit/:id', component: DiretorFormComponent, resolve: { diretor: diretorResolver } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiretorRoutingModule { }
