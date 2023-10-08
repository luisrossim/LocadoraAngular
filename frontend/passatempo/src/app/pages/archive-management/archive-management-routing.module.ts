import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchiveManagementComponent } from './archive-management.component';

const routes: Routes = [
  {
    path: '',
    component: ArchiveManagementComponent,
  },
  {
    path: 'ator',
    loadChildren: () => import('./ator/ator.module').then(m => m.AtorModule)
  },
  {
    path: 'classe',
    loadChildren: () => import('./classe/classe.module').then(m => m.ClasseModule)
  },
  {
    path: 'diretor',
    loadChildren: () => import('./diretor/diretor.module').then(m => m.DiretorModule)
  },
  {
    path: 'item',
    loadChildren: () => import('./item/item.module').then(m => m.ItemModule)
  },
  {
    path: 'titulo',
    loadChildren: () => import('./titulo/titulo.module').then(m => m.TituloModule)
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArchiveManagementRoutingModule { }
