import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BanksSummaryComponent } from './banks-summary.component';

describe('BanksSummaryComponent', () => {
  let component: BanksSummaryComponent;
  let fixture: ComponentFixture<BanksSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BanksSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BanksSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
