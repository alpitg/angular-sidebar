import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  sidebarToggleFlag = false;

  constructor(private _sharedService: SharedService) {
    this._sharedService.getSideBarFlag().subscribe((x: boolean) => {
      this.sidebarToggleFlag = x;
    });
   }

  ngOnInit() {
  }

  onSidebarToggleClicked() {
    this._sharedService.setSideBarFlag(!this.sidebarToggleFlag);
  }

}
