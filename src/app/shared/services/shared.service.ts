import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private sidebarFlag = new BehaviorSubject<boolean>(true);

  constructor() { }

  getSideBarFlag() {
    return this.sidebarFlag;
  }

  setSideBarFlag(value: boolean) {
    this.sidebarFlag.next(value);
  }

}
