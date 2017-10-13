import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { routing } from "./app.routing";
import { ItemsComponent } from './items/items.component';
import { UserComponent } from './user/user.component';
import {FormsModule} from "@angular/forms";
import {UserService} from "./user/user.service";
import { AbcComponent } from './abc/abc.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ItemsComponent,
    UserComponent,
    AbcComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpModule,
    FormsModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
