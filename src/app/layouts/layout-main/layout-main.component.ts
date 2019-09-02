import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-layout-main',
  templateUrl: './layout-main.component.html',
  styleUrls: ['./layout-main.component.scss']
})
export class LayoutMainComponent implements OnInit {

  toggleFlag = true;

  constructor(private _sharedService: SharedService) { 
  this._sharedService.getSideBarFlag().subscribe((x: boolean) => {
    this.toggleFlag = x
    });
  }

  ngOnInit() {
  }

  onSidebarToggleClicked() {
    this._sharedService.setSideBarFlag(!this.toggleFlag);
  }

}
