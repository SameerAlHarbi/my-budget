import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banks-summary',
  templateUrl: './banks-summary.component.html',
  styleUrls: ['./banks-summary.component.css']
})
export class BanksSummaryComponent implements OnInit {

  totalCash: number;

  constructor() { }

  ngOnInit() {
    this.totalCash = 0;
  }

}
