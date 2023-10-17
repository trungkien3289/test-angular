import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCarbonHeatmapComponent } from './home-carbon-heatmap.component';

describe('HomeCarbonHeatmapComponent', () => {
  let component: HomeCarbonHeatmapComponent;
  let fixture: ComponentFixture<HomeCarbonHeatmapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeCarbonHeatmapComponent]
    });
    fixture = TestBed.createComponent(HomeCarbonHeatmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
