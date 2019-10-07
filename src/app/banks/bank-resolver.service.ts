import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Bank } from './bank.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { BanksService } from './banks.service';

@Injectable({
  providedIn: 'root'
})
export class BankResolver implements Resolve<Bank> {

  constructor(private banksService: BanksService) { }

  resolve(route: ActivatedRouteSnapshot
        , state: RouterStateSnapshot): Observable<Bank> | Promise<Bank> | Bank {
          return this.banksService.getBankByCode(route.params.code);
        }
}
