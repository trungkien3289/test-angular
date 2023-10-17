import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BussinessActivityComponent } from './bussiness-activity.component';

describe('BussinessActivityComponent', () => {
  let component: BussinessActivityComponent;
  let fixture: ComponentFixture<BussinessActivityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BussinessActivityComponent]
    });
    fixture = TestBed.createComponent(BussinessActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
