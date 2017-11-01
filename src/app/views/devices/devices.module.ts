import { NgModule } from '@angular/core';
import { devices_routing } from './devices.routing';
import { DevicesViewComponent } from './devices-view.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UIKitModule } from '../../uikit/uikit.module';
import { DevicesService } from './services/devices.service';
import { DeviceStore } from './services/devices.store';
import { DeviceFormComponent } from './components/form/device-form.component';
import { DevicesListComponent } from './components/list/devices-list.component';

@NgModule({
  declarations: [
    DevicesViewComponent, DeviceFormComponent, DevicesListComponent
  ],
  imports: [
    devices_routing,
    CommonModule,
    FormsModule,
    UIKitModule
  ],
  providers: [
    DeviceStore,
    DevicesService
  ],
})
export class DevicesModule {}
