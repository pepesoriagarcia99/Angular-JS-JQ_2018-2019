import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//animations
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//material
import{ MaterialModule} from './material';
import { SideMenuComponent } from './side-menu/side-menu.component'


@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //animations
    BrowserAnimationsModule,
    //material
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
