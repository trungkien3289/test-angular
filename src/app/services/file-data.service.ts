import { Injectable } from '@angular/core';
import { FormArray } from '@angular/forms';
import { Observable } from 'rxjs';
import { FileExtractData } from '../manage/bussiness-activity/custom-files-upload/file-extract-data.model';

@Injectable({
  providedIn: 'root'
})
export class FileDataService {

  constructor() { }

  getAll = () : FileExtractData[] => {
    let data: FileExtractData[] = [
      {
        fileName: 'AAA',
        entry: 1,
        entryStatus: 'Accepted',
        fuelType: 'ULS Cir Dsl #1',
        vehicleType: 'Deawoo',
        fuelQuantity: 700,
        fuelQuantityUnit: 'Gallons',
        dateOrPeriod: '01-12-2022',
        periodAttribution: 'Not selected',
      },
      {
        fileName: 'BBB',
        entry: 2,
        entryStatus: 'Accepted',
        fuelType: 'ULS Cir Dsl #2',
        vehicleType: 'SMRM',
        fuelQuantity: 500,
        fuelQuantityUnit: 'Gallons',
        dateOrPeriod: '01-12-2022',
        periodAttribution: 'Not selected',
      },
      {
        fileName: 'CCC',
        entry: 3,
        entryStatus: 'AcceptedWithLowQuality',
        fuelType: 'l',
        vehicleType: 'Unknown',
        fuelQuantity: 100,
        fuelQuantityUnit: 'Gallons',
        dateOrPeriod: '',
        periodAttribution: '',
      },
      {
        fileName: 'DDD',
        entry: 4,
        entryStatus: 'Rejected',
        fuelType: 'Unknown',
        vehicleType: 'Unknown',
        fuelQuantity: undefined,
        fuelQuantityUnit: 'Unknown',
        dateOrPeriod: '',
        periodAttribution: '',
      },
      {
        fileName: 'EEE',
        entry: 5,
        entryStatus: 'AcceptedWithLowQuality',
        fuelType: 'Unknown',
        vehicleType: 'Unknown',
        fuelQuantity: 100,
        fuelQuantityUnit: 'Gallons',
        dateOrPeriod: '',
        periodAttribution: '',
      },
      {
        fileName: 'FFF',
        entry: 6,
        entryStatus: 'Rejected',
        fuelType: 'ULS Cir Dsl #2',
        vehicleType: 'Unknown',
        fuelQuantity: undefined,
        fuelQuantityUnit: 'Gallons',
        dateOrPeriod: '',
        periodAttribution: '',
      },
      // Add more data objects as needed
    ];

    return data;
  }
}
