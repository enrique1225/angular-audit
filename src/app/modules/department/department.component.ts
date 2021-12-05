import { Component } from '@angular/core';
import { Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent  {
  lists : any;
  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    this.lists = [
      {
        id: 1,
        name: "General Management",
        description: "This department develops and executes overall business strategies. It is responsible for the entire organization. General management deals with determining overall business strategies, planning, monitoring execution of the plans, decision making, and guiding the workforce, and maintaining punctuality and disciplinary issues.",
        link: "general-management"
      },
      {
        id: 2,
        name: "Marketing Department",
        description: "The workforce in this department is responsible in identifying customer needs and creating tourism products to satisfy them. The marketing managers mainly are involved.",
        link: "marketing-department"
      },
      {
        id: 3,
        name: "Operations Department",
        description: "The Operations Department combines two or more tourism components (among attractions, transportation, intermediaries, destination, accommodation, and activities) to create a package and sell it to the consumer.",
        link: "operations-department"
      },
      {
        id: 4,
        name: "Finance Department",
        description: "The Finance Department is responsible for acquiring and utilizing money for financing the activities of the tourism business. The finance people assess short term and long term capital requirements. Long term capital requirements in tourism are maintenance of office building, vehicles, office infrastructure, and business equipment. Short term capital requirements involve labor and staff payments, providing communication facility, payment of electricity and other resources. A large number of tourism businesses need to invest initial amount for hotel, lodges, and airline bookings. The owners of tourism business invest their money with the sole purpose of getting high returns out of the investment. Hence the head of the finance department is obliged for achieving the organization objectives by using the finances wisely.",
        link: "finance-department"
      },
      {
        id: 5,
        name: "Sales Department",
        description: "This department is solely responsible for selling the relevant tourism products to the consumers. The sales person in the tourism business is the first link between the tourism business itself and the consumer. The staff must have deep knowledge of the product and strong communication skills to convince the consumers. The sales person also promotes the destination.",
        link: "sales-department"
      },
      {
        id: 6,
        name: "Human Resource Department",
        description: "This department is responsible for recruiting skilled, and experienced manpower according to the positions at vacancies of different departments. It is also responsible for conducting orientation programs and trainings for new staff, recognizing the best facets of staff and motivating them to achieve organization objectives.",
        link: "human-resource-department"
      },
      {
        id: 7,
        name: "Purchase Department",
        description: "By following a standard procedure of procurement, this department ensures the enterprise has appropriate and timely supply of all the required goods and services. The purchasing department procures the goods and services to be consumed by other departments in the business organization.",
        link: "purchase-department"
      }
    ]
  }

  ngOnInit(): void {
    console.log('-------- listing -----');
    console.log(this.lists)
  }
}
