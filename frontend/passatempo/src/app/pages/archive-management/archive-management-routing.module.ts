import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchiveManagementComponent } from './archive-management.component';
import { AtorComponent } from './ator/ator.component';
import { ClasseComponent } from './classe/classe.component';
import { DiretorComponent } from './diretor/diretor.component';

const routes: Routes = [
  {
    path: '',
    component: ArchiveManagementComponent
  },
  {
    path: 'ator',
    component: AtorComponent
  },
  {
    path: 'classe',
    component: ClasseComponent
  },
  {
    path: 'diretor',
    component: DiretorComponent
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArchiveManagementRoutingModule { }
