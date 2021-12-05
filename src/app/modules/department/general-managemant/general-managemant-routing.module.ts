import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndividualComponent } from './individual/individual.component';
import { CheckDivergenceComponent } from './individual/check-divergence/check-divergence.component';

const routes: Routes = [
  {
    path: 'individual-proprietorship',
    component: IndividualComponent,
    children: [
      {
        path: ':id', redirectTo: '/department/general-management/individual-proprietorship/:id',
      },
    ]
  },
  { 
    path: 'individual-proprietorship/:id', 
    component: CheckDivergenceComponent,
 },
 {
   path: '**', component: IndividualComponent
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralManagemantRoutingModule { }
