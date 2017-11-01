import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'navbar',
  template: `
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand">Angular Lazy</a>
        </div>
        <ul class="nav navbar-nav">
          <li routerLink="/login" routerLinkActive="active">
            <a>Login</a>
          </li>
          <li routerLink="/welcome" routerLinkActive="active">
            <a>Welcome</a>
          </li>
          <li routerLink="/devices" routerLinkActive="active"
              *ifLogged>
            <a>Devices</a>
          </li>
          <li routerLink="/logout" routerLinkActive="active"
            (click)="auth.logout()">
            <a>Logout</a>
          </li>

        </ul>
      </div>
    </nav>
  `
})
export class NavBarComponent {
  constructor( private router: Router, public auth: AuthService ) {}

  logout() {
    this.router.navigateByUrl('login');
  }
}
