import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

/**
 * Guard for router. It checks if a token exists
 */
@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate() {
    if (!this.authService.authorized) {
      this.router.navigateByUrl('login');
    }
    return Boolean(this.authService.authorized);
  }
}
