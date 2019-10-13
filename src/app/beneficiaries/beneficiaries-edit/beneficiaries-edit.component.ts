import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-beneficiaries-edit',
  templateUrl: './beneficiaries-edit.component.html',
  styleUrls: ['./beneficiaries-edit.component.css']
})
export class BeneficiariesEditComponent implements OnInit {

  relations = ['Family', 'Frind'];
  beneficiaryForm: FormGroup;
  forbiddenNames = ['Rami', 'Samer'];

  constructor() { }

  ngOnInit() {
    this.beneficiaryForm = new FormGroup(
      {
          'code': new FormControl(null, Validators.required),
          'personalData': new FormGroup({
          'name': new FormControl(null, [Validators.required, this.forbiddenName.bind(this)]),
          'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmail),
          'relation': new FormControl('Frind')
        }),
        hobbies: new FormArray([])
      });

    // this.beneficiaryForm.valueChanges.subscribe(
    //     (value) => console.log(value)
    //   );
    this.beneficiaryForm.statusChanges.subscribe(
        (status) => console.log(status)
      );

      // this.beneficiaryForm.setValue({
      //   'code':'0000',
      //   'personalData':{
      //     'name': 'sameer',
      //     'email':'smrhrbi@gmail.com',
      //     'relation': 'Family'
      //   },
      //   'hobbies':[]
      // });

      this.beneficiaryForm.patchValue({
        'code':'0000',
        'personalData':{
          'name': 'sameer',
          'email':'smrhrbi@gmail.com',
          'relation': 'Family'
        },
        'hobbies':[]
      });
  }

  getControls() {
    return (this.beneficiaryForm.get('hobbies') as FormArray).controls;
  }

  get controls() {
    return (this.beneficiaryForm.get('hobbies') as FormArray).controls;
  }


  onSubmit() {
    console.log(this.beneficiaryForm);
    this.beneficiaryForm.reset();
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (this.beneficiaryForm.get('hobbies') as FormArray).push(control);
  }

  forbiddenName(control: FormControl): {[s: string], boolean } {
    if (this.forbiddenNames.indexOf(control.value) !== -1) {
      return {nameIsForbidden: true};
    }
    return null;
  }

  forbiddenEmail(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({emailIsForbidden: true});
        } else {
          resolve(null);
        }
      }, 1500);
    });

    return promise;
  }


}
