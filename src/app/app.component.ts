import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test';

  constructor(private modalService: NgbModal){

  }

  public open(modal: any): void {
    this.modalService.open(modal);
  }

  isSidebarOpen:boolean = true;

  onSidebarToogle(isOpen:boolean){
    this.isSidebarOpen = isOpen;
  }
}
