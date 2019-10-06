import { Injectable } from '@angular/core';
import { Bank } from './bank.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BanksService {

  banksChanged = new Subject<Bank[]>();

  private banksList: Bank[] = [
      new Bank('0001', 'SAMBA')
    , new Bank('0002', 'AlFransi')
    , new Bank('0003', 'AlBilad')
  ];

  constructor() { }

  getBanks() {
    return this.banksList.slice();
  }

  getBankByCode(bankCode: string) {
    return this.getBanks().find(b => b.code === bankCode);
  }

  addBank(newBank) {
    this.banksList.push(newBank);
    this.banksChanged.next(this.getBanks());
  }
}
