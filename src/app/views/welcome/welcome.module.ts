import { NgModule } from '@angular/core';
import { welcome_routing } from './welcome.routing';
import { WelcomeViewComponent } from './welcome-view.component';

@NgModule({
  declarations: [ WelcomeViewComponent ],
  imports: [welcome_routing]
})
export class WelcomeModule {}
