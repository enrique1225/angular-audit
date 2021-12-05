import { Component, OnInit } from '@angular/core';
import { Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-general-managemant',
  templateUrl: './general-managemant.component.html',
  styleUrls: ['./general-managemant.component.css']
})
export class GeneralManagemantComponent implements OnInit {

  features: any;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    this.features =
      [
        {
          name: 'Business Unit01 - Individual Proprietorship',
          description: 'Sole or individual proprietorship is the oldest and simplest form of business organisation. In this type of organisation, an individual is the sole ownership of the business. He supplies land; labour, capital, etc. individually. In case capital is insufficient it is borrowed on interest. Land may also be taken on rent. A single man performs twin functions of an organizer as well as that of an entrepreneur.',
          image: 'individual-proprietorship.png',
          alt: 'individual-proprietorship',
          link: 'individual-proprietorship'
        },
         {
          name: 'Business Unit02 - Partnership',
          description: 'As a form of business organisation, the partnership has much wider scope as compared to the individual proprietorship. When two or more than two persons join to start and run a business on the basis of their common and shared responsibility in the matter of profit or loss, it is called the partnership.',
          image: 'partnership.jpg',
          alt: 'partnership',
          link: 'partnership'
        },
        {
          name: 'Business Unit03 - Joint Stock Company',
          description: 'Joint Stock Company is one of the most important forms of business organisation of the modern age. There are certain large scale enterprises which cannot be operated on the basis of the individual proprietorship or partnership.',
          image: 'joint-stock-company.jpg',
          alt: 'joint-stock-company',
          link: 'joint-stock-company'
        },
        {
          name: 'Business Unit04 - Co-Operative Societies',
          description: 'In modem times, a co-operative enterprise is one of the important forms of business organisation. When a few persons, who are known to each other, start business on co-operative basis, it is called a co-operative society.',
          image: 'co-operative-societies.png',
          alt: 'co-operative-societies',
          link: 'co-operative-societies'
        },
        {
          name: 'Business Unit05 - Public Sector Undertaking',
          description: 'Industrial and commercial undertakings owned and run by the government are known as public sector undertakings. Some of them come under the category of public utilities such as railways, posts and telegraphs hydroelectric projects, road transport, etc.',
          image: 'public-sector-undertakings.jpg',
          alt: 'public-sector-undertakings',
          link: 'public-sector-undertakings'
        },
      ];
  }

  ngOnInit(): void {
  }
}
