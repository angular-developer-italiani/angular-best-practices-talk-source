import { Injectable } from '@angular/core';
import { Device } from '../model/device';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { environment as env } from '../../../../environments/environment';
import { DeviceStore } from './devices.store';

const INITIAL_STATE = {  os: null };

@Injectable()
export class DevicesService {

  constructor(
    private http: HttpClient,
    private store: DeviceStore
  ) {
    this.store.active = INITIAL_STATE;
    console.log ('environment:', env);
  }

  /**
   * get all devices
   */
  getAll() {
    this.http.get<Device[]>(`${env.baseUrl}/devices`)
      .subscribe(result => this.store.devices = result);
  }

  /**
   * Save element (add or edit)
   * @param f
   */
  save(value) {
    if (this.store.active.id) {
      this.edit(value as Device);
    } else {
      this.add(value as Device);
    }
  }

  /**
   * Add element
   * @param {Device} device
   */
  add(device: Device) {
    this.http.post(`${env.baseUrl}/devices`, device)
      .subscribe(res => {
        this.store.devices.push(res as Device);
        this.reset();
      })
  }

  /**
   * Edit active element
   * @param {Device} device
   */
  edit(device: Device) {
    const newDevice = Object.assign(
      {}, this.store.active, device
    );

    this.http.patch(`${env.baseUrl}/devices/${newDevice.id}`, newDevice )
      .subscribe(
        res => {
          const index = this.store.devices.findIndex(d => {
            return d.id === newDevice.id;
          });
          this.store.devices[index] = newDevice;
        }
      );
  }

  /**
   * delete element
   * @param {Device} device
   */
  delete(device: Device) {
    this.http.delete(`${env.baseUrl}/devices/${device.id}`)
      .subscribe(
        () => {
          const index = this.store.devices.indexOf(device)
          this.store.devices.splice(index, 1);
          this.reset();
        }
      );
  }

  /**
   * Set Active Element
   * @param {Device} device
   */
  setActiveHandler(device: Device) {
    this.store.active = Object.assign({}, device);
  }

  /**
   * Reset active element
   * @param f
   */
  reset() {
    this.store.active = INITIAL_STATE;
  }
}
