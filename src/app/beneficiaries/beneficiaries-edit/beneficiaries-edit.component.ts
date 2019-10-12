import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-beneficiaries-edit',
  templateUrl: './beneficiaries-edit.component.html',
  styleUrls: ['./beneficiaries-edit.component.css']
})
export class BeneficiariesEditComponent implements OnInit {

  relations = ['Family', 'Frind']
  beneficiaryForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.beneficiaryForm = new FormGroup(
      {
        'code': new FormControl(null, Validators.required),
        'name': new FormControl(null, Validators.required),
        'email': new FormControl(null, [Validators.required, Validators.email]),
        'relation': new FormControl('Frind')
      });
  }

  onSubmit() {
    console.log(this.beneficiaryForm);
  }

}
