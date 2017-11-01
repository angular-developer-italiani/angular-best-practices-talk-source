import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';

const routes: Routes = [
  { path: '', component: LoginComponent }
];

export const login_routing: ModuleWithProviders = RouterModule.forChild(routes);
