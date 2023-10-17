import { FormControl, FormGroup, Validators } from '@angular/forms';

export class FileExtractData {
  fileName: string = '';
  entry?: number = 0;
  entryStatus: string = '';
  fuelType:string = '';
  vehicleType: string = '';
  fuelQuantity?: number;
  fuelQuantityUnit: string = '';
  dateOrPeriod: string = '';
  periodAttribution: string = '';

  static asFormGroup(item: FileExtractData): FormGroup {
    const fg = new FormGroup({
      fileName: new FormControl(item.fileName, Validators.required),
      entry: new FormControl(item.entry, Validators.required),
      entryStatus: new FormControl(item.entryStatus, Validators.required),
      fuelType: new FormControl(item.fuelType, Validators.required),
      vehicleType: new FormControl(item.vehicleType, Validators.required),
      fuelQuantity: new FormControl(item.fuelQuantity, Validators.required),
      fuelQuantityUnit: new FormControl(item.fuelQuantityUnit, Validators.required),
      dateOrPeriod: new FormControl(item.dateOrPeriod, Validators.required),
      periodAttribution: new FormControl(item.periodAttribution, Validators.required)
    });
    return fg;
  }
}
