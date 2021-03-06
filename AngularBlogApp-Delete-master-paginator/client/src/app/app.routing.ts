import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AddPostComponent } from './add-post/add-post.component';
import {SqlComponent} from './hppe/sql-errors/sql-errors.component';


export const AppRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent },
  { path: 'sql-errors', component: SqlComponent}
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);
