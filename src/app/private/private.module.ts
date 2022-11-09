import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { PrivateComponent } from './private.component';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    PrivateComponent,
    CategoriesListComponent,
    NavbarComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    FontAwesomeModule
  ]
})
export class PrivateModule { }
