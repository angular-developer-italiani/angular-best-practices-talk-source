import {Component, EventEmitter, Input, Output} from '@angular/core';
import { Device } from '../../model/device';

@Component({
  selector: 'devices-list',
  template: `
    <div *ngFor="let d of devices" class="panel"
         [ngClass]="{ 
              'ios': d.os === 'ios', 
              'android': d.os === 'android', 
              'others': d.os === 'others',
              'active': d.id === active?.id
      }">
      <div class="panel-heading">
        <!--OS icon (android / ios-->
        <i class="fa"
           [ngClass]="{'fa-android': d.os === 'android', 
                         'fa-apple'  : d.os === 'ios'}"></i>

        <!--device name-->
        <span>{{d.label}}</span>

        <div class="pull-right">
          <!--price -->
          <span *ngIf="d.price"
                [style.color]="d.price > 1000 ? 'red' : 'grey'">
                € {{d.price | number: '1.2-2'}} |         
              </span>

          <!--edit / delete buttons-->
          <i class="fa fa-edit icon" (click)="editContent.emit(d)"></i> |
          <i class="fa fa-trash icon" (click)="deleteHandler(d, $event)"></i>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .ios { border: 1px solid #ccc }
    .android { border: 1px solid lightgreen }
    .others { border: 1px solid lightcyan }
    .active { border: 2px solid #333 }
  `]
})
export class DevicesListComponent {
  @Input() devices: Device[];
  @Input() active: Device;
  @Output() editContent: EventEmitter<Device>  = new EventEmitter();
  @Output() delete: EventEmitter<Device>  = new EventEmitter();

  deleteHandler(device: Device, evt: MouseEvent) {
    evt.stopPropagation();
    this.delete.emit(device);
  }
}
