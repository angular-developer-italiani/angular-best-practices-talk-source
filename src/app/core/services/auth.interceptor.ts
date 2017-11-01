import {
  HttpEvent, HttpHandler, HttpInterceptor, HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable, Injector } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  // BUG Angular 4.3: we cannot inject the provider
  // constructor(private authService: AuthService) {}

  // FIX: we need to manually use the injector
  constructor(
    private injector: Injector,
    private router: Router
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    // Inject token into header
    const authService = this.injector.get(AuthService);
    const copiedReq = req.clone({
      headers: req.headers.set(
        'authorization', 'Bearer ' + authService.token
      )
    });

    // console.log('Intercepted!', req);
    console.log('copiedReq!', copiedReq);
    if (!authService.authorized) {
      // redirect to login if not authorized (no token)
      this.router.navigateByUrl('login');
    }

    return next.handle(copiedReq);
  }
}
