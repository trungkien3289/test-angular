import { Component, Input } from '@angular/core';

@Component({
  selector: 'custom-slide-toggle',
  templateUrl: './custom-slide-toggle.component.html',
  styleUrls: ['./custom-slide-toggle.component.scss']
})
export class CustomSlideToggleComponent {
  @Input() isChecked: boolean = false;
}
