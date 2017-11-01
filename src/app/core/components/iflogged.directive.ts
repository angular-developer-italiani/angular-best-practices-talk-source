import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthStore } from '../services/auth.store';

@Directive({
  selector: '[ifLogged]',
})
export class IfLoggedDirective {
  constructor (
    private authStore: AuthStore,
    private template: TemplateRef<any>,
    private view: ViewContainerRef
  ) {

    authStore.tokenObservable.subscribe(res => {
      this.view.clear();
      if (res) {
        this.view.createEmbeddedView(template);
      }
    });
  }
}
