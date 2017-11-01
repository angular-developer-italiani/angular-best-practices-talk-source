import { NgModule } from '@angular/core';
import { AuthService } from './auth.service';
import { AuthStore } from './auth.store';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './auth.guard';
import { AuthInterceptor } from './auth.interceptor';

@NgModule({
  providers: [
    AuthService,
    AuthStore,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,             // <=== ADDED
      useClass: AuthInterceptor, multi: true  // <=== ADDED
    }
  ],
  imports: [
    HttpClientModule
  ],
})
export class AuthModule {}
