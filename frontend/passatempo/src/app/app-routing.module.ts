import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
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
