import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'ator'
  },
  {
    path: 'ator',
    loadChildren: () => import('./pages/ator/ator.module').then(m => m.AtorModule)
  },
  {
    path: 'classe',
    loadChildren: () => import('./pages/classe/classe.module').then(m => m.ClasseModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
