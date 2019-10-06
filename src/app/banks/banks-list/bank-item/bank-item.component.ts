import { Component, OnInit, Input } from '@angular/core';
import { Bank } from '../../bank.model';

@Component({
  selector: 'app-bank-item',
  templateUrl: './bank-item.component.html',
  styleUrls: ['./bank-item.component.css']
})
export class BankItemComponent implements OnInit {

  @Input() bank: Bank;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
