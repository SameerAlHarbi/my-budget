import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beneficiaries-summary',
  templateUrl: './beneficiaries-summary.component.html',
  styleUrls: ['./beneficiaries-summary.component.css']
})
export class BeneficiariesSummaryComponent implements OnInit {

  totalCash: number;

  constructor() { }

  ngOnInit() {
    this.totalCash = 0;
  }

}
