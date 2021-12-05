import { Component, OnInit } from '@angular/core';
// import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-individual',
  templateUrl: './individual.component.html',
  styleUrls: ['./individual.component.css']
})
export class IndividualComponent {

  company : string;
  department: string;
  unit: string;
  start_date: string;
  end_date: string;
  checker_name: string;
  findings: string;
  type: string;
  version: string;

  selectedDrinkList : any;
  selectedHealthFoodList : any;
  selectedNutritionFoodList: any;
  checkedIDs : any;

  drinkDataList = [
    {
      id: '11111',
      category: 'apple',
      description: "Sole or individual proprietorship is the oldest and simplest form of business organisation. In this type of organisation, an individual is the sole ownership of the business.",
      isChecked: true,
      link: "divergence",
    },
    {
      id: '22222',
      category: 'banana',
      description: "Sole or individual proprietorship is the oldest and simplest form of business organisation. In this type of organisation, an individual is the sole ownership of the business.",
      isChecked: true,
      link: "divergence",
    },
    {
      id: '33333',
      category: 'pear',
      description: "Sole or individual proprietorship is the oldest and simplest form of business organisation. In this type of organisation, an individual is the sole ownership of the business.",
      isChecked: true,
      link: "divergence",
    },
  ]

  HealthFoodDataList = [
    {
      id: '10000',
      category: 'avocados',
      description: "Sole or individual proprietorship is the oldest and simplest form of business organisation. In this type of organisation, an individual is the sole ownership of the business.",
      isChecked: true,
      link: "divergence",
    },
    {
      id: '20000',
      category: 'kale',
      description: "Sole or individual proprietorship is the oldest and simplest form of business organisation. In this type of organisation, an individual is the sole ownership of the business.",
      isChecked: true,
      link: "divergence",
    },
    {
      id: '30000',
      category: 'broccoli',
      description: "Sole or individual proprietorship is the oldest and simplest form of business organisation. In this type of organisation, an individual is the sole ownership of the business.",
      isChecked: true,
      link: "divergence",
    },
  ]

  NutritionFoodDataList = [
    {
      id: '123',
      category: 'beans',
      description: "Sole or individual proprietorship is the oldest and simplest form of business organisation. In this type of organisation, an individual is the sole ownership of the business.",
      isChecked: true,
      link: "divergence",
    },
    {
      id: '456',
      category: 'greek yogurt',
      description: "Sole or individual proprietorship is the oldest and simplest form of business organisation. In this type of organisation, an individual is the sole ownership of the business.",
      isChecked: true,
      link: "divergence",
    },
    {
      id: '789',
      category: 'sweet potatos',
      description: "Sole or individual proprietorship is the oldest and simplest form of business organisation. In this type of organisation, an individual is the sole ownership of the business.",
      isChecked: true,
      link: "divergence",
    },

  ]

  constructor() {
    this.company = "Food Delivery";
    this.department = "General Department";
    this.unit = "Individual Proprietorship";
    this.start_date = "2019/06/25";
    this.end_date = "2020/08/25";
    this.checker_name = "Cristina";
    this.findings = "true";
    this.type = "Food";
    this.version = "1.0"
  }

  ngOnInit(): void {
    this.fetchSelectedItems()
  }

  changeSelection() {
    this.fetchSelectedItems()
  }

  fetchSelectedItems() {
    this.selectedDrinkList = this.drinkDataList.filter((value, index) => {
      return value.isChecked
    });

    this.selectedHealthFoodList = this.HealthFoodDataList.filter((value, index) => {
      return value.isChecked
    });

    this.selectedNutritionFoodList = this.NutritionFoodDataList.filter((value, index) => {
      return value.isChecked
    });
  }
}
