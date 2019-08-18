import { Component } from "@angular/core";

export interface PeriodicElement {
  status: string;
  dealName: string;
  lastModifiedDate: Date;
  issueTracker: string;
  totalIssueSave: string;
  tenor: string;
  currency: string;
  dealComment: string;
  dealAction: string;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "ngapp";

  ELEMENT_DATA: PeriodicElement[] = [
    {
      status: "Announced",
      dealName: "Deal_001",
      lastModifiedDate: new Date(),
      issueTracker: "102D921",
      totalIssueSave: "10MM",
      tenor: "5Y/6Y/7Y",
      currency: "USD",
      dealComment: "test comment",
      dealAction: "",
    },
    {
      status: "Announced",
      dealName: "Deal_001",
      lastModifiedDate: new Date(),
      issueTracker: "102D921",
      totalIssueSave: "10MM",
      tenor: "5Y/6Y/7Y",
      currency: "USD",
      dealComment: "test comment",
      dealAction: "",
    },
    {
      status: "Announced",
      dealName: "Deal_001",
      lastModifiedDate: new Date(),
      issueTracker: "102D921",
      totalIssueSave: "10MM",
      tenor: "5Y/6Y/7Y",
      currency: "USD",
      dealComment: "test comment",
      dealAction: "",
    },
    {
      status: "Announced",
      dealName: "Deal_001",
      lastModifiedDate: new Date(),
      issueTracker: "102D921",
      totalIssueSave: "10MM",
      tenor: "5Y/6Y/7Y",
      currency: "USD",
      dealComment: "test comment",
      dealAction: "",
    },
    {
      status: "Announced",
      dealName: "Deal_001",
      lastModifiedDate: new Date(),
      issueTracker: "102D921",
      totalIssueSave: "10MM",
      tenor: "5Y/6Y/7Y",
      currency: "USD",
      dealComment: "test comment",
      dealAction: "",
    },
    {
      status: "Announced",
      dealName: "Deal_001",
      lastModifiedDate: new Date(),
      issueTracker: "102D921",
      totalIssueSave: "10MM",
      tenor: "5Y/6Y/7Y",
      currency: "USD",
      dealComment: "test comment",
      dealAction: "",
    },
  ];
  displayedColumns: any[];
  dataSource: any[];
  constructor() {}

  ngOnInit() {
    this.displayedColumns = [
      "status",
      "dealName",
      "lastModifiedDate",
      "issueTracker",
      "totalIssueSave",
      "tenor",
      "dealAction",
    ];
    this.dataSource = this.ELEMENT_DATA;
  }
}
