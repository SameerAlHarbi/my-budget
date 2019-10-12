import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficiariesEditComponent } from './beneficiaries-edit.component';

describe('BeneficiariesEditComponent', () => {
  let component: BeneficiariesEditComponent;
  let fixture: ComponentFixture<BeneficiariesEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeneficiariesEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeneficiariesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
