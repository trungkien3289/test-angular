import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryStatusComponent } from './entry-status.component';

describe('EntryStatusComponent', () => {
  let component: EntryStatusComponent;
  let fixture: ComponentFixture<EntryStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntryStatusComponent]
    });
    fixture = TestBed.createComponent(EntryStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
