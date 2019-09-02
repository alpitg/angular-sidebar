import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutMainComponent } from './layout-main.component';
import { SidebarModule } from '../sidebar/sidebar.module';
import { HeaderModule } from '../header/header.module';

@NgModule({
  declarations: [LayoutMainComponent],
  imports: [
    CommonModule,
    SidebarModule,
    HeaderModule
  ],
  exports: [LayoutMainComponent],
})
export class LayoutMainModule { }
