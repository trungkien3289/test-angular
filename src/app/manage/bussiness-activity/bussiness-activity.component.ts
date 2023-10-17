import { Component } from '@angular/core';
import { UpLoadFileMethod } from '../../common/upload-file-method-enum';

@Component({
  selector: 'bussiness-activity',
  templateUrl: './bussiness-activity.component.html',
  styleUrls: ['./bussiness-activity.component.scss']
})
export class BussinessActivityComponent {
  uploadFileMethod: UpLoadFileMethod = UpLoadFileMethod.CUSTOM_FILES;
}
