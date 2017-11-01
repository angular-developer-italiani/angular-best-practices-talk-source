import { Component } from '@angular/core';
import { DeviceStore } from './services/devices.store';
import { DevicesService } from './services/devices.service';

@Component({
  selector: 'devices-view',
  template: `
      <toggable title="Device">
        <device-form
          [active]="store.active"
          (reset)="actions.reset()"
          (save)="actions.save($event)"></device-form>
      </toggable>
      <hr>
      <devices-list
        [devices]="store.devices"
        [active]="store.active"
        (editContent)="actions.setActiveHandler($event)"
        (delete)="actions.delete($event)"></devices-list>
  `
})
export class DevicesViewComponent {
  constructor(
    public store: DeviceStore,
    public actions: DevicesService,
  ) {
    this.actions.getAll();
  }
}
