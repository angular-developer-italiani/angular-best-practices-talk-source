import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './core/services/auth.guard';

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot([
      {
        path: 'login',
        loadChildren: 'app/views/login/login.module#LoginModule',
      },
      {
        path: 'devices',
        loadChildren: 'app/views/devices/devices.module#DevicesModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'welcome',
        loadChildren: 'app/views/welcome/welcome.module#WelcomeModule'
      },
      { path: '**', redirectTo: 'welcome' }
    ])
  ],
  providers: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
