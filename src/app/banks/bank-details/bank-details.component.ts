import { Component, OnInit } from '@angular/core';
import { Bank } from '../bank.model';
import { Router, ActivatedRoute, Params, Data } from '@angular/router';
import { BanksService } from '../banks.service';

@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.component.html',
  styleUrls: ['./bank-details.component.css']
})
export class BankDetailsComponent implements OnInit {

  bank: Bank;
  allowEdit = false;

  constructor(private router: Router
            , private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.queryParams.subscribe(
      (params: Params) => {
        this.allowEdit = params.allowEdit === 'true';
      });

    this.route.data.subscribe(
      (data: Data) => {
        this.bank = data.bank;
      });

  }

  onBankEdit() {
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
  }

}
