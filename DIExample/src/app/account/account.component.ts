import {Component, Input} from '@angular/core';
import {LoggingService} from '../logging.service';
import {AccountService} from '../account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LoggingService]

})
export class AccountComponent {
  @Input()
  account!: { name: string; status: string; };
  @Input() id!: number;

  constructor(private _loggingService: LoggingService, private  __accountService: AccountService) {
  }

  onSetTo(status: string) {
    this.__accountService.updateStatus(this.id, status);
    this.__accountService.statusUpdated.emit(status);
  }
}
