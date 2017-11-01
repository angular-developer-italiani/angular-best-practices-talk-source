import { NgModule } from '@angular/core';
import { login_routing } from './login.routing';
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [ LoginComponent ],
  imports: [ login_routing ],

})
export class LoginModule {}

