import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerCarbonWikiComponent } from './manager-carbon-wiki.component';

describe('ManagerCarbonWikiComponent', () => {
  let component: ManagerCarbonWikiComponent;
  let fixture: ComponentFixture<ManagerCarbonWikiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagerCarbonWikiComponent]
    });
    fixture = TestBed.createComponent(ManagerCarbonWikiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
