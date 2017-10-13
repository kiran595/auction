import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { ItemsComponent } from "./items/items.component";
import {UserComponent} from "./user/user.component";

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
      },
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'items',
        component: ItemsComponent
      },
  {
        path: 'user',
        component: UserComponent
      }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
