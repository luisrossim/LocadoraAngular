import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'locacao',
    loadChildren: () => import('./pages/allocation-management/allocation-management.module').then((m) => m.AllocationManagementModule),
  },
  {
    path: 'acervo',
    loadChildren: () => import('./pages/archive-management/archive-management.module').then((m) => m.ArchiveManagementModule),
  },
  {
    path: 'cliente',
    loadChildren: () => import('./pages/client-management/client-management.module').then((m) =>m.ClientManagementModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/access/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/access/register/register.module').then((m) => m.RegisterModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
