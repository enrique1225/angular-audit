import { Component } from '@angular/core';

@Component({
  selector: 'app-audit-detail',
  templateUrl: './audit-detail.component.html',
  styleUrls: ['./audit-detail.component.css']
})
export class AuditDetailComponent{
  auditData = [
    { name: "January", value: 80 },
    { name: "Febrary", value: 100 },
    { name: "March", value: 90 },
    { name: "April", value: 50 },
    { name: "May", value: 90 },
    { name: "Jun", value: 60 },
    { name: "July", value: 100 },
    { name: "August", value: 80 },
    { name: "September", value: 100 },
    { name: "Octorbor", value: 80 },
    { name: "Nowember", value: 70 },
    { name: "December", value: 100 }
  ];
  auditName = "Audit 2013";
  auditor = "Cristina";
  startedAt = "2013/01/12";
  closedAt = "2013/11/19";
}
