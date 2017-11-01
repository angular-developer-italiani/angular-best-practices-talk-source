import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeViewComponent} from './welcome-view.component';

const routes: Routes = [
  { path: '', component: WelcomeViewComponent },
];

export const welcome_routing: ModuleWithProviders = RouterModule.forChild(routes);
