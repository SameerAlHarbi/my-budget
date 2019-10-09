import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Bank } from '../bank.model';
import { BanksService } from '../banks.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-bank-edit',
  templateUrl: './bank-edit.component.html',
  styleUrls: ['./bank-edit.component.css']
})
export class BankEditComponent implements OnInit {

  title: string;
  editMode = false;
  bank: Bank;
  allowEdit = false;

  bankTypes = ['Salary, Saving'];

  @ViewChild('f', {static: true}) bankForm: NgForm;

  constructor(private router: Router
            , private route: ActivatedRoute
            , private banksService: BanksService) { }

  ngOnInit() {
    let bankCode = this.route.snapshot.params.code;
    this.bank = this.banksService.getBankByCode(bankCode);
    this.editMode = this.route.snapshot.params.code != null;
    this.title = this.editMode ? 'Edit ' + this.bank.name + ' Bank Information' : 'Add New Bank';
    this.allowEdit = this.route.snapshot.queryParams.allowEdit;

    this.route.params.subscribe(
      (params: Params) => {
       bankCode = params.code;
       this.bank = this.banksService.getBankByCode(bankCode);
       this.editMode = params.code != null;
       this.title = this.editMode ? 'Edit ' + this.bank.name + ' Bank Information' : 'Add New Bank';
      });

    this.route.queryParams.subscribe(
        (params: Params) => {
          this.allowEdit = params.allowEdit;
        }
      );
  }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  onSubmit() {
    console.log(this.bankForm);
  }

}
