import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllocationComponent } from './allocation/allocation.component';

const routes: Routes = [
  {
    path: '',
    component: AllocationComponent
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllocationManagementRoutingModule { }
