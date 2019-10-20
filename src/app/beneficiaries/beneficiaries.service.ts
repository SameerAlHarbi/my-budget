import { Injectable } from '@angular/core';
import { Beneficiary } from './beneficiary.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BeneficiariesService {

  private beneficiariesList: Beneficiary[] = [
    new Beneficiary('0000', 'Rami', 'Brother', '0569663742', 'rwmiw14@gmail.com'),
    new Beneficiary('0001', 'Samer', 'Brother'),
  ];

  beneficiariesChanged = new Subject<Beneficiary[]>();

  constructor() { }

  getAllBeneficiaries() {
    return this.beneficiariesList.slice();
  }

  getBeneficiaryByCode(code: string) {
    return this.beneficiariesList.find(b => b.code === code );
  }

  getBeneficiaryByName(name: string) {
    return this.beneficiariesList.find(b => b.name === name );
  }

  getBeneficiaryByRelation(relation: string) {
    return this.beneficiariesList.filter(b => b.relation === relation );
  }

  addNewBeneficiaries(newBeneficiary: Beneficiary) {
    this.beneficiariesList.push(newBeneficiary);
    this.beneficiariesChanged.next(this.getAllBeneficiaries());
  }

  updateBeneficiary(newBeneficiary: Beneficiary) {
    const currentBeneficiary = this.getBeneficiaryByCode(newBeneficiary.code);
    if (currentBeneficiary) {
      currentBeneficiary.name = newBeneficiary.name;
      currentBeneficiary.relation = newBeneficiary.relation;
      currentBeneficiary.mobile = newBeneficiary.mobile;
      currentBeneficiary.email = newBeneficiary.email;
      this.beneficiariesChanged.next(this.getAllBeneficiaries());
    }
  }

  deleteBeneficiary(code: string) {
    const currentBeneficiary = this.getBeneficiaryByCode(code);
    if (currentBeneficiary) {
      const index = this.beneficiariesList.indexOf(currentBeneficiary);
      this.beneficiariesList.splice(index, 1);
      this.beneficiariesChanged.next(this.beneficiariesList);
    }

  }

}
