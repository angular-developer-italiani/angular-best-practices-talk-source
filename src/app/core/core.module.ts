import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { NavBarComponent } from './components/navbar.component';
import { AuthModule } from './services/auth.module';
import { IfLoggedDirective } from './components/iflogged.directive';

@NgModule({
  declarations: [
    NavBarComponent, IfLoggedDirective
  ],
  imports: [
    CommonModule,
    HttpModule,
    RouterModule,
    AuthModule
  ],
  exports: [
    NavBarComponent, IfLoggedDirective
  ]
})
export class CoreModule {}
