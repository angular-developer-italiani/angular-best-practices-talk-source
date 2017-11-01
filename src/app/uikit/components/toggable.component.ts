import { Component, Input } from '@angular/core';

@Component({
  selector: 'toggable',
  template: `
    <div class="panel panel-default">
       <h4
         class="panel-heading right"
         (click)="opened = !opened">
           {{title}}
           <i class="fa"
              [ngClass]="{'fa-times': opened,
                          'fa-chevron-down': !opened }"></i>
       </h4>
       <div *ngIf="opened" class="panel-body">
         <ng-content></ng-content>
       </div>
    </div>
  `,
  styles: [`
    .right { text-align: right; margin: 0 }
  `]
})
export class ToggableComponent {
  @Input() title: string;
  opened = true;
}
