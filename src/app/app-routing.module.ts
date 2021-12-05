import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './modules/general/home/home.component';
import { DepartmentComponent } from './modules/department/department.component';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';
import { RegisterComponent } from './modules/general/register/register.component';
import { SigninComponent } from './modules/general/signin/signin.component';
import { UnitComponent } from './modules/unit/unit.component';
import { AuditComponent } from './modules/audit/audit.component';
import { AuditDetailComponent } from './modules/audit/audit-detail/audit-detail.component';

const routes: Routes = [
  { path: '',  component: SigninComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'home', component: HomeComponent},
  { path: 'department', component: DepartmentComponent},
  {
    path: 'department',
    loadChildren: () => import('./modules/department/department.module')
    .then(mod => mod.DepartmentModule)
  },
  { path: 'unit', component: UnitComponent, children: [
    {
      path: ':id', redirectTo: '/department/general-management/:id',
    },
  ]},
  { path: 'audit', component: AuditComponent, children: [
    {
      path: ':id', redirectTo: '/audit-detail',
    },
  ]},
  { path: 'audit-detail', component: AuditDetailComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }