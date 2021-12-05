import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './modules/general/home/home.component';
import { RegisterComponent } from './modules/general/register/register.component';
import { SigninComponent } from './modules/general/signin/signin.component';
import { DepartmentComponent } from './modules/department/department.component';
import { GeneralManagemantComponent } from './modules/department/general-managemant/general-managemant.component';
import { DepartmentModule } from './modules/department/department.module';
import { GeneralManagemantModule } from './modules/department/general-managemant/general-managemant.module';
import { IndividualComponent } from './modules/department/general-managemant/individual/individual.component';
import { UnitComponent } from './modules/unit/unit.component';
import { AuditComponent } from './modules/audit/audit.component';
import { AuditDetailComponent } from './modules/audit/audit-detail/audit-detail.component';

import { NgxChartsModule }from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuditDetailModule } from './modules/audit/audit-detail/audit-detail.module';
import { IndividualModule } from './modules/department/general-managemant/individual/individual.module';
import { ImageCropperModule } from 'ngx-image-cropper';
import { CheckDivergenceModule } from './modules/department/general-managemant/individual/check-divergence/check-divergence.module';
import { CheckDivergenceComponent } from './modules/department/general-managemant/individual/check-divergence/check-divergence.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    SigninComponent,
    DepartmentComponent,
    GeneralManagemantComponent,
    IndividualComponent,
    UnitComponent,
    AuditComponent,
    AuditDetailComponent,
    CheckDivergenceComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    DepartmentModule,
    GeneralManagemantModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    AuditDetailModule,
    IndividualModule,
    ImageCropperModule,
    CheckDivergenceModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }