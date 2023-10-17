import { Component, Input } from '@angular/core';
import { EntryStatusEnum } from '../common/entry-status.enum';

@Component({
  selector: 'entry-status',
  templateUrl: './entry-status.component.html',
  styleUrls: ['./entry-status.component.scss']
})
export class EntryStatusComponent {
  @Input() entryStatus: EntryStatusEnum = EntryStatusEnum.ACCEPTED;
}
