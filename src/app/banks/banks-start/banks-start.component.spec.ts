import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BanksStartComponent } from './banks-start.component';

describe('BanksStartComponent', () => {
  let component: BanksStartComponent;
  let fixture: ComponentFixture<BanksStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BanksStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BanksStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
