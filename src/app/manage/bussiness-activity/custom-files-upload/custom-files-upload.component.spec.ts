import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomFilesUploadComponent } from './custom-files-upload.component';

describe('CustomFilesUploadComponent', () => {
  let component: CustomFilesUploadComponent;
  let fixture: ComponentFixture<CustomFilesUploadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomFilesUploadComponent]
    });
    fixture = TestBed.createComponent(CustomFilesUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
