import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { FileDataService } from '../services/file-data.service';
import { FileExtractData } from './file-extract-data.model';

@Component({
  selector: 'custom-files-upload',
  templateUrl: './custom-files-upload.component.html',
  styleUrls: ['./custom-files-upload.component.scss'],
})
export class CustomFilesUploadComponent implements OnInit {
  data: any[] = [];
  form: any = null;

  displayedColumns: string[] = [
    'fileName',
    'entry',
    'entryStatus',
    'fuelType',
    'vehicleType',
    'fuelQuantity',
    'fuelQuantityUnit',
    'dateOrPeriod',
    'periodAttribution',
  ];

  constructor(private fileDataService: FileDataService,
    private _formBuilder: FormBuilder){

  }
  ngOnInit(): void {
    this.form = this._formBuilder.group({
      items: this._formBuilder.array([])
    });

    if(this.form){
      let data = this.fileDataService.getAll();
      let grouControls = data.map((element: FileExtractData) => {
        return FileExtractData.asFormGroup(element);
      });
      let arrayControls = new FormArray(grouControls);
      this.form.setControl('items', arrayControls);
    }
  }

  get items(): FormArray {
    return this.form.get('items') as FormArray;
  }

  save(): void {
    this.markAllAsTouched();
    if(this.form.valid){
      console.log("Save data successfully");
    }else{
      console.log('Form Status', this.form.valid);
      console.log('Form Touched', this.form.touched);
      console.log('Form Untouch', this.form.untouched);
      console.log('Form Invalid', this.form.invalid);
      console.log('Form Pristine', this.form.pristine);
    }
  }

  markAllAsTouched() {
    const formArray = this.form.get('items') as FormArray;
    formArray.controls.forEach((control) => {
      if(control instanceof FormGroup){
        this.marlAllControlInGroupAsTouched(control);
      }else{
        control.markAllAsTouched();
      }
    });
  }

  marlAllControlInGroupAsTouched(formGroup: FormGroup){
    for (const controlName in formGroup.controls) {
      if (formGroup.controls.hasOwnProperty(controlName)) {
        const control = formGroup.get(controlName);
        control?.markAsTouched();
      }
    }
  }
}
