import { Component, OnInit } from '@angular/core';
import { BeneficiariesService } from '../beneficiaries.service';
import { Beneficiary } from '../beneficiary.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-beneficiaries-list',
  templateUrl: './beneficiaries-list.component.html',
  styleUrls: ['./beneficiaries-list.component.css']
})
export class BeneficiariesListComponent implements OnInit {

  beneficiariesList: Beneficiary[];

  constructor(private beneficiariesService: BeneficiariesService
            , private router: Router
            , private route: ActivatedRoute) { }

  ngOnInit() {
    this.beneficiariesList = this.beneficiariesService.getAllBeneficiaries();
  }

  onNewBeneficiary() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
