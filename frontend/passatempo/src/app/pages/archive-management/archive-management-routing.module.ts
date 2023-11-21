import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchiveManagementComponent } from './archive-management.component';
import { AtorComponent } from './ator/ator.component';
import { ClasseComponent } from './classe/classe.component';
import { DiretorComponent } from './diretor/diretor.component';
import { TituloComponent } from './titulo/titulo.component';
import { ItemComponent } from './item/item.component';

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
  {
    path: 'titulo',
    component: TituloComponent
  },
  {
    path: 'item',
    component: ItemComponent
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArchiveManagementRoutingModule { }
