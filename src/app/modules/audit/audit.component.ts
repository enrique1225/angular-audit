import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.css']
})
export class AuditComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  items = [
    {
      id: 1,
      name: "Audit 2013",
      auditor: "Cristina",
      type: "Single Type",
      started_at: "2013/06/25",
      closed_at: "2013/12/05",
      status: 1,
      link: "individual-proprietorship",
    },
    {
      id: 2,
      name: "Audit 2014",
      auditor: "Cristina",
      type: "Single Type",
      started_at: "2014/08/15",
      closed_at: "2014/12/03",
      status: 1,
      link: "partnership",
    },
    {
      id: 3,
      name: "Audit 2015",
      auditor: "Cristina",
      type: "Single Type",
      started_at: "2015/06/25",
      closed_at: "2025/12/05",
      status: 0,
      link: "joint-stock-company",
    },
    {
      id: 4,
      name: "Audit 2016",
      auditor: "Cristina",
      type: "Single Type",
      started_at: "2016/08/15",
      closed_at: "2016/12/03",
      status: 0,
      link: "co-operative-societies",
    },
    {
      id: 5,
      name: "Audit 2017",
      auditor: "Cristina",
      type: "Single Type",
      started_at: "2017/08/15",
      closed_at: "2017/12/03",
      status: 1,
      link: "public-sector-undertakings",
    },
    {
      id: 6,
      name: "Audit 2018",
      auditor: "Cristina",
      type: "Single Type",
      started_at: "2018/11/15",
      closed_at: "2018/12/03",
      status: 0,
      link: "individual-proprietorship",
    },
    {
      id: 7,
      name: "Audit 2019",
      auditor: "Cristina",
      type: "Single Type",
      started_at: "2019/01/15",
      closed_at: "2019/12/03",
      status: 0,
      link: "individual-proprietorship",
    },
    {
      id: 8,
      name: "Audit 2020",
      auditor: "Cristina",
      type: "Single Type",
      started_at: "2020/08/15",
      closed_at: "2020/12/03",
      status: 0,
      link: "individual-proprietorship",
    },
    {
      id: 9,
      name: "Audit 2021",
      auditor: "Cristina",
      type: "Single Type",
      started_at: "2021/01/15",
      closed_at: "2021/09/03",
      status: 0,
      link: "individual-proprietorship",
    },
  ]
}
