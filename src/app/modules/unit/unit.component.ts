import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css']
})
export class UnitComponent implements OnInit {
  units = [
    {
      id: 1,
      title: "Individual Proprietorship",
      department: "General Department",
      category: 'general_department',
      description: "Sole or individual proprietorship is the oldest and simplest form of business organisation. In this type of organisation, an individual is the sole ownership of the business.",
      link: "individual-proprietorship",
    },
    {
      id: 2,
      title: "Partnership",
      department: "General Department",
      category: 'general_department',
      description: "Sole or individual proprietorship is the oldest and simplest form of business organisation. In this type of organisation, an individual is the sole ownership of the business.",
      link: "partnership",
    },
    {
      id: 3,
      title: "Joint Stock Company",
      department: "General Department",
      category: 'general_department',
      description: "Sole or individual proprietorship is the oldest and simplest form of business organisation. In this type of organisation, an individual is the sole ownership of the business.",
      link: "joint-stock-company",
    },
    {
      id: 4,
      title: "Co-Operative Societies",
      department: "General Department",
      category: 'general_department',
      description: "Sole or individual proprietorship is the oldest and simplest form of business organisation. In this type of organisation, an individual is the sole ownership of the business.",
      link: "co-operative-societies",
    },
    {
      id: 5,
      title: "Public Sector Undertaking",
      department: "General Department",
      category: 'general_department',
      description: "Sole or individual proprietorship is the oldest and simplest form of business organisation. In this type of organisation, an individual is the sole ownership of the business.",
      link: "public-sector-undertakings",
    },
    {
      id: 6,
      title: "Unit 06",
      department: "Marketing Department",
      category: 'marketing_department',
      description: "Sole or individual proprietorship is the oldest and simplest form of business organisation. In this type of organisation, an individual is the sole ownership of the business.",
      link: "individual-proprietorship",
    },
    {
      id: 7,
      title: "Unit 07",
      department: "Marketing Department",
      category: 'marketing_department',
      description: "Sole or individual proprietorship is the oldest and simplest form of business organisation. In this type of organisation, an individual is the sole ownership of the business.",
      link: "individual-proprietorship",
    },
    {
      id: "8",
      title: "Unit 08",
      department: "Operations Department",
      category: 'operations_department',
      description: "Sole or individual proprietorship is the oldest and simplest form of business organisation. In this type of organisation, an individual is the sole ownership of the business.",
      link: "individual-proprietorship",
    },
  ]

  constructor() {

  }

  ngOnInit(): void {
    
  }
}
