import { Injectable } from '@angular/core';
import { Beneficiary } from './beneficiary.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BeneficiariesService {

  beneficiariesList: Beneficiary[] = [];

  beneficiariesChanged = new Subject<Beneficiary[]>();

  constructor() { }

  getAllBeneficiaries() {
    return this.beneficiariesList.slice();
  }

  addNewBeneficiaries(newBeneficiary: Beneficiary) {
    this.beneficiariesList.push(newBeneficiary);
    this.beneficiariesChanged.next(this.getAllBeneficiaries());
  }

}
