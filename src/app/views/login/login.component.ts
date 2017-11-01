import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  template: `
    <h3>Sign In</h3>
    <input type="text" placeholder="Username">
    <input type="text" placeholder="Password">
    <em>Add any user and pass</em>
    <hr>
    <button class="btn btn-primary" 
            (click)="login()">login</button>
    <hr>
  `
})
export class LoginComponent {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}


  /**
   * Simulate login
   */
  login() {
    this.authService.doLogin('mario', '12345')
      .subscribe(() => {
          this.router.navigateByUrl('devices');
        })
  }
}
