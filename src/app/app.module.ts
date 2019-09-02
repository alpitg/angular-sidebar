import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutMainModule } from './layouts/layout-main/layout-main.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    // shared
    LayoutMainModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
