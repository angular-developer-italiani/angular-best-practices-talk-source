import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DevicesViewComponent } from './devices-view.component';

const routes: Routes = [
  { path: '', component: DevicesViewComponent },
];

export const devices_routing: ModuleWithProviders = RouterModule.forChild(routes);
