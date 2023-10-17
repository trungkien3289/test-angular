import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarbonInsightsComponent } from './carbon-insights.component';

describe('CarbonInsightsComponent', () => {
  let component: CarbonInsightsComponent;
  let fixture: ComponentFixture<CarbonInsightsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarbonInsightsComponent]
    });
    fixture = TestBed.createComponent(CarbonInsightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
