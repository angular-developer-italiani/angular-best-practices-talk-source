import {
  Component, EventEmitter, Input, Output
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Device } from '../../model/device';

@Component({
  selector: 'device-form',
  template: `
    <form novalidate
          (submit)="saveHandler(f)"
          #f="ngForm">

      <input type="text"
             [ngModel]="active?.label"
             name="label"
             required
             class="form-control"
             placeholder="Phone name *"
             #labelInput>

      <input type="number"
             [ngModel]="active?.price"
             name="price"
             class="form-control"
             placeholder="Price *"
             #labelInput>

      <select [ngModel]="active?.os"
              name="os"
              required
              class="form-control">
        <option value="null">Select OS *</option>
        <option value="ios">ios</option>
        <option value="android">android</option>
        <option value="others">others</option>
      </select>

      <textarea
        [ngModel]="active?.desc"
        name="desc"
        class="form-control"
        placeholder="description (not required)"></textarea>

      <div class="btn btn-group">
        <button class="btn btn-primary"
                type="submit"
                [disabled]="f.invalid">
          {{active?.id ? 'SAVE' : 'ADD'}}
        </button>

        <button
          class="btn btn-default"
          type="button"
          *ngIf="active?.id"
          (click)="reset.emit(f);">
          ADD NEW
        </button>

      </div>
    </form>
  `
})
export class DeviceFormComponent {
  @Input() active: Device;
  @Output() save: EventEmitter<any> = new EventEmitter();
  @Output() reset: EventEmitter<any> = new EventEmitter();

  saveHandler(form: NgForm) {
    this.save.emit(form.value);
    // if adding a new element
    if (!this.active.id) {
      // reset the form
      form.reset();
    }
  }
}
