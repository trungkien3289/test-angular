import { Component } from '@angular/core';
import { UpLoadFileMethod } from '../common/upload-file-method-enum';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  uploadFileMethod: UpLoadFileMethod = UpLoadFileMethod.CUSTOM_FILES;
}
