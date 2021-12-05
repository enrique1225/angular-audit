import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuditDetailRoutingModule } from './audit-detail-routing.module';
import { NgxChartsModule }from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuditDetailRoutingModule,
    BrowserAnimationsModule,
    NgxChartsModule,
  ]
})
export class AuditDetailModule { }
