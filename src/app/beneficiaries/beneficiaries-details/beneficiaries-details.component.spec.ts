import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficiariesDetailsComponent } from './beneficiaries-details.component';

describe('BeneficiariesDetailsComponent', () => {
  let component: BeneficiariesDetailsComponent;
  let fixture: ComponentFixture<BeneficiariesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeneficiariesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeneficiariesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
