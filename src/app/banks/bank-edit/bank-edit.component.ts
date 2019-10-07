import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Bank } from '../bank.model';
import { BanksService } from '../banks.service';

@Component({
  selector: 'app-bank-edit',
  templateUrl: './bank-edit.component.html',
  styleUrls: ['./bank-edit.component.css']
})
export class BankEditComponent implements OnInit {

  title: string;
  editMode = false;
  bank: Bank;

  constructor(private router: Router
            , private route: ActivatedRoute
            , private banksService: BanksService) { }

  ngOnInit() {
    let bankCode = this.route.snapshot.params.code;
    this.bank = this.banksService.getBankByCode(bankCode);
    this.editMode = this.route.snapshot.params.code != null;
    this.title = this.editMode ? 'Edit Bank Information' : 'Add New Bank';

    this.route.params.subscribe(
      (params: Params) => {
       bankCode = params.code;
       this.bank = this.banksService.getBankByCode(bankCode);
       this.editMode = params.code != null;
       this.title = this.editMode ? 'Edit Bank Information' : 'Add New Bank';
      });
  }

}
