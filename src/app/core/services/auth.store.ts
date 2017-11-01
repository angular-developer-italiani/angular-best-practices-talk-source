import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export class AuthStore {
  token: string;
  tokenObservable: BehaviorSubject<String> = new BehaviorSubject(null);

  constructor() {
    this.tokenObservable.subscribe((res: string) => {
      this.token = res;
    });
  }
}
