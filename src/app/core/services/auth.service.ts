import { AuthStore } from './auth.store';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/do';
import { environment } from '../../../environments/environment';

@Injectable()
export class AuthService {
  constructor(
    private store: AuthStore,
    private http: HttpClient
  ) {}

  doLogin(user: string, pass: string) {
    const params = new HttpParams()
      .set('user', user)
      .set('pass', pass);

    return this.http.get<any>(
      `${environment.baseUrl}/login`, { params }
    )
    .do(res => {
      this.authorized = res.token as string;
    });
  }

  logout() {
    this.authorized = null;
  }

  set authorized( value: string ) {
    if (value) {
      this.store.tokenObservable.next(value);
    } else {
      this.store.tokenObservable.next(null);
    }
  }


  get authorized(): string {
    return this.store.token;
  }

  get token(): string {
    return this.authorized;
  }
}
