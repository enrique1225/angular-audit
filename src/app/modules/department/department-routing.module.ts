import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GeneralManagemantComponent } from './general-managemant/general-managemant.component';

const routes: Routes = [
  { 
    path: 'general-management', 
    component: GeneralManagemantComponent
  },
  {
    path: 'general-management',
    loadChildren: () => import('./general-managemant/general-managemant.module')
    .then(mod => mod.GeneralManagemantModule)
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentRoutingModule { }
